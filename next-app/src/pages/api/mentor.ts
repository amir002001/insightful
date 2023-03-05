import type { NextApiRequest, NextApiResponse } from 'next'
import {
    createServerSupabaseClient,
    SupabaseClient,
} from '@supabase/auth-helpers-nextjs'
import { Mentor } from './best'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mentor[]>
) {
    const page = parseInt(req.query.page as string)
    const supabaseServerClient = createServerSupabaseClient({
        req,
        res,
    })
    const full_mentors = await supabaseServerClient
        .from('mentors')
        .select()
        .range(page * 8, (page + 1) * 8)
    res.status(200).json(full_mentors as unknown as Mentor[])
}
