import type { NextApiRequest, NextApiResponse } from 'next'
import {
    createServerSupabaseClient,
    SupabaseClient,
} from '@supabase/auth-helpers-nextjs'
import { Configuration, OpenAIApi } from 'openai'

export interface User {
    pronouns: string
    ethnicity: string
    gender: string
    expertise: string
    education: string
    goals: string
    message: string
}
const MENTOR_TOPICS = {
    IDEATION: 'Business ideation and/or strategy',
    LEADERSHIP: 'Leadership and management',
    PRODUCT_DEV: 'Product development',
    FINANCE: 'Fundraising and finance',
} as const

const PRONOUNS = {
    HE_HIM: 'he/him/his',
    SHE_HER: 'she/her/hers',
    THEY_THEM: 'they/them/theirs',
    ZE_HIR: 'ze/hir/hirs',
} as const

const EDUCATION = {
    DIPLOMA: 'diploma',
    MASTERS: 'masters degree',
    UNDERGRAD: 'undergraduate degree',
} as const

type ObjectValues<T> = T[keyof T]
type Pronoun = ObjectValues<typeof PRONOUNS>
type Education = ObjectValues<typeof EDUCATION>
type MentorTopic = ObjectValues<typeof MENTOR_TOPICS>

export type Mentor = {
    first_name: string
    last_name: string
    job_title: string
    gender: string
    ethnicity: string
    location: string
    pronouns: Pronoun
    expertise: string
    education: Education
    mentorship_topics: MentorTopic[]
    rationale: string
    email: string
    embedding: number[]
}
export interface PartialMentor {
    mentor_id: number
    similarity: number
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mentor[]>
) {
    if (req.method == 'POST') {
        const body = req.body as User
        const supabaseServerClient = createServerSupabaseClient({
            req,
            res,
        })
        const config = new Configuration({
            apiKey: process.env.OPEN_AI_API_KEY,
        })
        const openai = new OpenAIApi(config)
        const embed_input = `goals: ${body.goals}. gender: ${body.gender}. pronouns: ${body.pronouns}. education: ${body.education}. ethnicity: ${body.ethnicity}. expertise: ${body.expertise}. rationale: ${body.message}`
        const embedding_response = await openai.createEmbedding({
            input: embed_input,
            model: 'text-embedding-ada-002',
        })
        const [{ embedding }] = embedding_response.data.data

        const mentors = await supabaseServerClient.rpc('match_mentors', {
            query_embedding: embedding,
            similarity_threshold: 0.0,
            match_count: 10,
        })
        const full_mentors = await supabaseServerClient
            .from('mentors')
            .select()
            .in(
                'id',
                mentors.data.map((ment: PartialMentor) => ment.mentor_id)
            )
        res.status(200).json(full_mentors as unknown as Mentor[])
    } else {
        res.status(404).end()
    }
}
