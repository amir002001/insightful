import { faker } from "@faker-js/faker";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
dotenv.config();

const config = new Configuration({ apiKey: process.env.OPEN_AI_API_KEY });
const openai = new OpenAIApi(config);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const MENTOR_TOPICS = {
  IDEATION: "Business ideation and/or strategy",
  LEADERSHIP: "Leadership and management",
  PRODUCT_DEV: "Product development",
  FINANCE: "Fundraising and finance",
} as const;

const PRONOUNS = {
  HE_HIM: "he/him/his",
  SHE_HER: "she/her/hers",
  THEY_THEM: "they/them/theirs",
  ZE_HIR: "ze/hir/hirs",
} as const;

const EDUCATION = {
  DIPLOMA: "diploma",
  MASTERS: "masters degree",
  UNDERGRAD: "undergraduate degree",
} as const;

type ObjectValues<T> = T[keyof T];
type Pronoun = ObjectValues<typeof PRONOUNS>;
type Education = ObjectValues<typeof EDUCATION>;
type MentorTopic = ObjectValues<typeof MENTOR_TOPICS>;

type Mentor = {
  first_name: string;
  last_name: string;
  job_title: string;
  gender: string;
  ethnicity: string;
  location: string;
  pronouns: Pronoun;
  expertise: string;
  education: Education;
  mentorship_topics: MentorTopic[];
  rationale: string;
  email: string;
};

const generate_lore = async (
  mentor: Omit<Mentor, "rationale" | "email">
): Promise<string> => {
  const topics_formatted = mentor.mentorship_topics.join(", ");
  const prompt = `I'm writing a story for ${mentor.first_name} ${mentor.last_name}. This person is a ${mentor.job_title}. Their pronouns are \"${mentor.pronouns}\". Their gender is ${mentor.gender}. Their education is ${mentor.education}. They are an expert in heart ${mentor.expertise}. They are from ${mentor.ethnicity}. They currently live in ${mentor.location}. They want to mentor students regarding topics ${topics_formatted}. Generate a story  (around 400 tokens) from ${mentor.first_name}'s perspective (first person) about why they want to start mentoring, mentioning their life story and their struggles:`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
  return response.data.choices[0].text;
};

const create_fake_mentor = async (): Promise<Mentor> => {
  const first_name = faker.name.firstName("female");
  const last_name = faker.name.lastName();
  const job_title = faker.name.jobTitle();
  const gender = faker.name.gender();
  const ethnicity = faker.address.country();
  const location = faker.address.country();
  const pronouns = faker.helpers.arrayElement(Object.values(PRONOUNS));
  const expertise = faker.name.jobArea();
  const education = faker.helpers.arrayElement(Object.values(EDUCATION));
  const mentorship_topics = faker.helpers.arrayElements(
    Object.values(MENTOR_TOPICS)
  );
  const rationale = await generate_lore({
    first_name,
    last_name,
    job_title,
    gender,
    ethnicity,
    location,
    pronouns,
    expertise,
    education,
    mentorship_topics,
  });
  const email = `${first_name.replaceAll(" ", ".").toLowerCase()}.${last_name
    .replaceAll(" ", ".")
    .toLowerCase()}@${faker.internet.domainName()}`;

  return {
    first_name,
    last_name,
    job_title,
    gender,
    ethnicity,
    location,
    pronouns,
    expertise,
    education,
    mentorship_topics,
    rationale,
    email,
  };
};

const main = async () => {
  const mentor = await create_fake_mentor();
  await supabase.from("countries").insert({ name: "amir" });
};

main();
