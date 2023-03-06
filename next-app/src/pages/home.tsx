import { Logo } from '@/components/svgs/logo'
import { Caret } from '@/components/svgs/caret'
import clsx from 'clsx'
import Head from 'next/head'
import { useAtom } from 'jotai'
import { user_atom } from '@/atoms/user'
import { mentor_atom } from '@/atoms/mentor'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { Mentor, User } from './api/best'
import { useState } from 'react'
import Image from 'next/image'
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
const get_normal_data = async (page: number) => {
    const normal = await fetch(`api/mentor?page=${page}`).then((res) =>
        res.json()
    )
    const normal_data = (normal as BestResponse).data
    return normal_data
}
const Home = () => {
    const [page, set_page] = useState(0)
    const [user] = useAtom(user_atom)
    const [_, set_mentor] = useAtom(mentor_atom)
    console.log(user)
    const router = useRouter()
    if (typeof window !== typeof undefined && user === null) router.push('/')
    const { data: best_data } = useQuery({
        queryFn: async () => {
            return await get_best(user as unknown as User)
        },
        queryKey: 'best',
    })
    const { data: normal_data } = useQuery({
        queryFn: async () => {
            return await get_normal_data(page)
        },
        queryKey: ['normal', page],
        keepPreviousData: true,
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
            <nav className="flex justify-between items-center p-6 w-screen border-b">
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
            <main className="flex relative flex-col gap-12 pr-16 w-screen h-screen">
                <div className="flex gap-16">
                    <aside className="relative p-16 bg-mainpink">
                        <h2 className="text-5xl font-title text-mainred">
                            Welcome!
                        </h2>
                        <h3 className="mt-4 text-2xl font-bold">
                            Best Mentor Matches
                        </h3>
                        {best_data &&
                            best_data.data.map((mentor) => (
                                <div
                                    onClick={() => {
                                        set_mentor(mentor)
                                        router.push('/mentor')
                                    }}
                                    className="flex gap-5 p-2 mt-3 rounded-2xl border cursor-pointer w-[400px] border-mainred"
                                    key={mentor.first_name + mentor.last_name}
                                >
                                    <div className="relative w-32 h-32 shrink-0">
                                        <img
                                            alt="profilepfp"
                                            src={
                                                'https://picsum.photos/200/200?' +
                                                mentor.email
                                            }
                                            className="object-contain rounded-lg"
                                        ></img>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-bold">{`${mentor.first_name} ${mentor.last_name}`}</h4>
                                        <h5 className="text-sm">
                                            {mentor.job_title}
                                        </h5>
                                        <div className="flex flex-wrap gap-2 mt-3 w-full">
                                            {mentor.mentorship_topics.map(
                                                (topic) => (
                                                    <span
                                                        className="whitespace-nowrap text-[10px] bg-[#ff4f6e] px-3 py-1 rounded-full text-white"
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
                    <article className="mt-16 w-full">
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
                                        <span className="whitespace-nowrap text-white bg-[#FF4F6E] px-3 py-1 rounded-full">
                                            {key == 0
                                                ? 'Fundraising and Finance'
                                                : 'Product Development'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between mt-12">
                                <h4 className="text-2xl font-bold">
                                    Browse all mentors
                                </h4>
                                <button
                                    disabled
                                    className="font-medium uppercase cursor-not-allowed"
                                >
                                    Filter
                                </button>
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {normal_data &&
                                    normal_data?.map((mentor) => (
                                        <div
                                            onClick={() => {
                                                set_mentor(mentor)
                                                router.push('/mentor')
                                            }}
                                            key={mentor.email}
                                            className="p-4 w-full rounded-2xl border cursor-pointer"
                                        >
                                            <div className="relative w-full h-48">
                                                <img
                                                    src={
                                                        'https://picsum.photos/200/200?' +
                                                        mentor.email
                                                    }
                                                    alt="mentor profile"
                                                    className="bg-contain rounded-lg"
                                                ></img>
                                            </div>
                                            <h4 className="mt-6 text-lg font-bold">
                                                {mentor.first_name}{' '}
                                                {mentor.last_name}
                                            </h4>
                                            <h5 className="text-sm">
                                                {mentor.job_title}
                                            </h5>
                                            <div className="flex flex-wrap gap-2 mt-3 w-full">
                                                {mentor.mentorship_topics.map(
                                                    (topic) => (
                                                        <span
                                                            className="whitespace-nowrap text-white bg-[#FF4F6E] text-[10px] px-3 py-1 rounded-full"
                                                            key={topic}
                                                        >
                                                            {topic}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <button
                                onClick={() => set_page((prev) => prev + 1)}
                                className="self-center mt-8 font-bold uppercase"
                            >
                                Load More
                            </button>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Home
