import { faker } from "@faker-js/faker";

type Mentor = {
	first_name: string;
	last_name: string;
	job_title: string;
};

const create_fake_mentor = (): Mentor => {
	const first_name = faker.name.firstName();
	const last_name = faker.name.lastName();
	const job_title = faker.name.jobTitle();
	return { first_name: first_name, job_title: job_title, last_name: last_name };
};
const main = () => {
	const mentor = create_fake_mentor();
	console.log(mentor);
};

main();
