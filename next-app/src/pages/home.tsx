import { Logo } from '@/components/svgs/logo'
import Image from 'next/image'
import { Caret } from '@/components/svgs/caret'
import clsx from 'clsx'
import Head from 'next/head'
import { useAtom } from 'jotai'
import { user_atom } from '@/atoms/user'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { Mentor, User } from './api/best'
export interface BestResponse {
    error: null
    data: Mentor[]
    count: null
    status: number
    statusText: string
}

const get_best = async (user: User) => {
    const best = await fetch('api/best', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }).then((res) => res.json())
    return best as BestResponse
}

const Home = () => {
    const [user] = useAtom(user_atom)
    console.log(user)
    const router = useRouter()
    if (typeof window !== typeof undefined && user === null) router.push('/')
    const { data: best_data, isLoading } = useQuery({
        queryFn: async () => {
            return await get_best(user as unknown as User)
        },
    })
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
                    <button className="flex">
                        <span className="font-bold uppercase">Username</span>
                        <Caret className="w-6" />
                    </button>
                </div>
            </nav>
            <main className="flex relative flex-col gap-12 pr-16 pl-24 w-screen h-screen">
                <h2 className="mt-8 text-5xl font-title text-mainred">
                    Welcome!
                </h2>
                <div className="flex gap-16">
                    <aside>
                        <h3 className="text-2xl font-bold">
                            Best Mentor Matches
                        </h3>
                        {best_data &&
                            best_data.data.map((mentor) => (
                                <div
                                    className="flex gap-5 p-2 mt-3 rounded-2xl border w-[480px] border-mainred"
                                    key={mentor.first_name + mentor.last_name}
                                >
                                    <div className="relative w-32 h-32 shrink-0">
                                        <Image
                                            alt="profilepfp"
                                            src={
                                                'https://picsum.photos/200/200'
                                            }
                                            fill
                                            className="object-contain rounded-lg"
                                        ></Image>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-bold">{`${mentor.first_name} ${mentor.last_name}`}</h4>
                                        <h5 className="text-sm">
                                            {mentor.job_title}
                                        </h5>
                                        <div className="flex flex-wrap gap-2 w-full">
                                            {mentor.mentorship_topics.map(
                                                (topic) => (
                                                    <span
                                                        className="whitespace-nowrap bg-[#FF4F6E] px-3 py-1 rounded-full"
                                                        key={topic}
                                                    >
                                                        {topic}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </aside>
                    <article>
                        <div className="flex gap-8">
                            <h3 className="text-2xl font-bold">
                                Upcoming mentorship session
                            </h3>
                            <button
                                disabled
                                className="font-medium uppercase cursor-not-allowed text-mainred"
                            >
                                View All
                            </button>
                        </div>
                        <div className="flex gap-2 mt-4">
                            {Array.from(Array(2).keys()).map((key) => (
                                <div
                                    key={key}
                                    className="flex gap-12 items-center p-4 rounded-2xl cursor-not-allowed bg-mainpink"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-lg">Mar 8</span>
                                        <span className="text-lg text-mainred">
                                            1.00PM
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-bold">
                                            Krystal
                                        </span>
                                        <span className="whitespace-nowrap bg-[#FF4F6E] px-3 py-1 rounded-full">
                                            {key == 0
                                                ? 'Fundraising and Finance'
                                                : 'Product Development'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Home
