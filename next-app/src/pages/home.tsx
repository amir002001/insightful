import { Logo } from '@/components/svgs/logo'
import Image from 'next/image'
import { Caret } from '@/components/svgs/caret'
import clsx from 'clsx'
import Head from 'next/head'

const Home = () => {
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
                    <div className="flex gap-3 items-center">
                        <Logo className="w-9 h-9" />
                        <h1 className="text-xl font-title text-mainred">
                            Insightful
                        </h1>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button
                            className={clsx(
                                'rounded-lg px-4 py-3',
                                'bg-mainpink'
                            )}
                        >
                            Home
                        </button>
                        <button className={clsx('rounded-lg px-4 py-3')}>
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
                        {Array.from(Array(4).keys()).map((key) => (
                            <div
                                className="flex gap-5 p-2 mt-3 rounded-2xl border w-[480px] border-mainred"
                                key={key}
                            >
                                <div className="relative w-32 h-32 shrink-0">
                                    <Image
                                        alt="profilepfp"
                                        src={'https://picsum.photos/200/200'}
                                        fill
                                        className="object-contain rounded-lg"
                                    ></Image>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-bold">
                                        Mentor&apos;s Name
                                    </h4>
                                    <h5 className="text-sm">
                                        Title at Workplace
                                    </h5>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        {Array.from(Array(4).keys()).map(
                                            (key) => (
                                                <span
                                                    className="whitespace-nowrap bg-[#FF4F6E] px-3 py-1 rounded-full"
                                                    key={key}
                                                >
                                                    lorem ipsum
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
                            <button className="font-medium uppercase text-mainred">
                                View All
                            </button>
                        </div>
                        <div className="flex gap-2 mt-4">
                            {Array.from(Array(2).keys()).map((key) => (
                                <div
                                    key={key}
                                    className="flex gap-12 items-center p-4 rounded-2xl bg-mainpink"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-lg">Mar 8</span>
                                        <span className="text-lg text-mainred">
                                            1.00PM
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-bold">
                                            Abdul
                                        </span>
                                        <span className="whitespace-nowrap bg-[#FF4F6E] px-3 py-1 rounded-full">
                                            Leadership
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
