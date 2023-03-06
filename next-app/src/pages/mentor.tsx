import { Logo } from '@/components/svgs/logo'
import { Caret } from '@/components/svgs/caret'
import clsx from 'clsx'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAtomValue } from 'jotai'
import { mentor_atom } from '@/atoms/mentor'
const Mentor = () => {
    const router = useRouter()
    const mentor = useAtomValue(mentor_atom)
    if (typeof window !== typeof undefined && mentor === null) router.push('/')
    console.log(mentor)
    return (
        <>
            <Head>
                <title>Insightful</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <nav className="flex justify-between items-center p-6 w-screen">
                <div className="flex gap-8">
                    <Link href="/" className="flex gap-3 items-center">
                        <Logo className="w-9 h-9" />
                        <h1 className="text-xl font-title text-mainred">
                            Insightful
                        </h1>
                    </Link>
                    <div className="flex gap-4 items-center">
                        <button
                            disabled
                            className={clsx(
                                'rounded-lg px-4 py-3 cursor-not-allowed',
                                'bg-mainpink'
                            )}
                        >
                            Home
                        </button>
                        <button
                            disabled
                            className={clsx(
                                'rounded-lg px-4 py-3 cursor-not-allowed'
                            )}
                        >
                            My Bookings
                        </button>
                    </div>
                </div>
                <div>
                    <button disabled className="flex cursor-not-allowed">
                        <span className="font-bold uppercase">Username</span>
                        <Caret className="w-6" />
                    </button>
                </div>
            </nav>
            <main className="container px-12 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <img
                            src="https://picsum.photos/200/200"
                            className="rounded-2xl"
                            alt=""
                        />
                        <div className="flex flex-col justify-between mt-2">
                            <div className="">
                                <div className="flex gap-5 items-baseline">
                                    <h2 className="text-3xl font-bold text-mainred">
                                        {mentor?.first_name} {mentor?.last_name}
                                    </h2>
                                    <span className="text-2xl">
                                        {mentor?.pronouns}
                                    </span>
                                </div>
                                <h3 className="mt-2 text-2xl">
                                    {mentor?.job_title}
                                </h3>
                                <h3 className="text-2xl">
                                    {mentor?.expertise}
                                </h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 -translate-y-0.5 text-mainred"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>{mentor?.location}</span>
                                </div>
                                <div className="h-6 bg-black w-[1px]"></div>
                                <span>{mentor?.pronouns}</span>
                                <div className="h-6 bg-black w-[1px]"></div>
                                <span>from {mentor?.ethnicity}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            disabled
                            className="py-4 px-8 font-bold text-white uppercase rounded-full cursor-not-allowed bg-mainred"
                        >
                            Book a session
                        </button>
                        <span className="mt-4 font-medium uppercase">
                            Next available
                        </span>
                        <span className="text-xl font-bold uppercase">
                            Mar 10, 2023
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-16 mt-16 w-full rounded-3xl border border-mainred">
                    <div className="">
                        <h3 className="text-2xl font-bold">
                            Mentorship Topics
                        </h3>
                        <div className="flex flex-col gap-2 mt-4">
                            {mentor?.mentorship_topics.map((topic) => (
                                <span
                                    className="w-fit text-[10px] bg-[#ff4f6e] px-3 py-1 rounded-full text-white"
                                    key={topic}
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Personal Info</h3>
                        <p className="mt-4">{mentor?.rationale}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Education</h3>
                        <p className="mt-4">{mentor?.education}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Email</h3>
                        <a
                            href={`mailto:${mentor?.email}`}
                            className="inline-block mt-4 text-blue-600 underline"
                        >
                            {mentor?.email}
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Mentor
