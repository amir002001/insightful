import Head from 'next/head'
import { Logo } from '@/components/svgs/logo'
import Link from 'next/link'

const items = Array.from(Array(20).keys()).map((num) => (
    <div key={num} className="bg-gray-200 rounded-full">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
            src={'https://picsum.photos/200/300?' + num}
            className="rounded-full w-object-cover"
            alt=""
        />
    </div>
))

export default function Landing() {
    return (
        <>
            <Head>
                <title>Insightful</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <nav className="w-screen">
                <div className="flex justify-between items-center p-6 bg-mainpink">
                    <Link
                        href="/"
                        className="flex gap-3 items-center text-xl font-title text-mainred"
                    >
                        <Logo className="w-9 h-9" />
                        <h1>Insightful</h1>
                    </Link>
                    <div className="flex gap-4">
                        <button
                            disabled
                            className="flex gap-2 items-center py-1 px-5 text-sm font-bold uppercase rounded-full border cursor-not-allowed text-mainred border-mainred"
                        >
                            Login
                        </button>
                        <Link
                            href="/signup"
                            className="flex gap-2 items-center py-1 px-5 text-sm font-bold text-white uppercase rounded-full bg-mainred"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="">
                <section id="hero" className="text-center bg-mainpink">
                    <div className="flex flex-col items-center py-12">
                        <h1 className="w-3/4 leading-10 font-title text-[40px] text-mainred max-w-[1123px]">
                            A career mentorship platform designed for the women
                            and gender-diverse community.
                        </h1>
                        <h2 className="mt-2 w-2/3 font-medium text-[28px] max-w-[1200px]">
                            By providing equal opportunities and support to
                            women entrepreneurs, we can unlock their full
                            potential and drive innovation and economic growth.
                        </h2>
                        <div className="flex gap-2 mt-5">
                            <Link
                                href={'/signup'}
                                className="py-4 px-8 text-2xl font-bold text-white uppercase rounded-full bg-mainred border-mainred"
                            >
                                Find Mentorship
                            </Link>
                            <button
                                disabled
                                className="py-4 px-8 text-2xl font-bold text-white uppercase rounded-full cursor-not-allowed bg-mainred border-mainred"
                            >
                                Become a Mentor
                            </button>
                        </div>
                    </div>
                </section>
                <section className="flex overflow-hidden gap-9 mt-12">
                    <div className="flex flex-shrink-0 gap-8 carousel-track">
                        {items}
                    </div>
                </section>
                <section className="flex flex-col items-center mt-8 text-center">
                    <h2 className="font-bold text-[40px] text-mainred">
                        Connect with mentors that empathizes with you.
                    </h2>
                    <h3 className="font-medium text-[28px] max-w-[900px]">
                        By matching you with mentors with similar goals,
                        industry, and personal background, we are aiming to make
                        you feel empathized with and understood while
                        progressing professionally.
                    </h3>
                </section>
                {/*TODO finish section*/}
                <section className="hidden flex-col items-center mt-20 text-center">
                    <h2 className="font-bold text-mainred text-[40px] font">
                        Hear what our mentees have to say about Insightful!
                    </h2>
                </section>
                <section className="flex flex-col items-center p-16 mt-16 text-center bg-mainpink">
                    <h2 className="font-title text-[30px]">
                        Ready to be{' '}
                        <span className="text-mainred">insightful?</span>
                    </h2>
                    <h3 className="text-3xl font-medium">
                        Sign up below as a mentor or as a mentee!
                    </h3>
                    <div className="flex gap-2 mt-5">
                        <Link
                            href={'/signup'}
                            className="py-4 px-8 text-2xl font-bold text-white uppercase rounded-full bg-mainred border-mainred"
                        >
                            Find Mentorship
                        </Link>
                        <button
                            disabled
                            className="py-4 px-8 text-2xl font-bold text-white uppercase rounded-full cursor-not-allowed bg-mainred border-mainred"
                        >
                            Become a Mentor
                        </button>
                    </div>
                </section>
            </main>
            <footer className="flex justify-between py-16 px-32 w-screen">
                <div className="flex gap-6">
                    <span className="text-2xl font-bold">About Us</span>
                    <span className="text-2xl font-bold">Contact Us</span>
                    <span className="text-2xl font-bold">How We Work</span>
                    <span className="text-2xl font-bold">FAQs</span>
                </div>
                <Link
                    href="/"
                    className="flex gap-3 items-center text-xl font-title text-mainred"
                >
                    <Logo className="w-9 h-9" />
                    <h1>Insightful</h1>
                </Link>
            </footer>
        </>
    )
}
