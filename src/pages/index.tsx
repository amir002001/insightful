import Head from "next/head";
import { supabase } from "@/lib/supabase-clinet";
interface TEST {
	countries: any[];
}
export default function Home({ countries }: TEST) {
	return (
		<>
			<Head>
				<title>Insightful</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<ul>
					{countries.map((country: any) => (
						<li key={country.id}>{country.name}</li>
					))}
				</ul>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	let { data } = await supabase.from("countries").select();

	return {
		props: {
			countries: data,
		},
	};
}
