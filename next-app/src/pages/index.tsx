/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/Image'
import { Logo } from '@/components/svgs/logo'
import Link from 'next/link'

const items = Array.from(Array(20).keys()).map((num) => (
    <img
        key={num}
        src={'https://picsum.photos/200/300?' + num}
        className="rounded-full w-object-cover w-[90px] h-[124px]"
        alt=""
    />
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
                        <h2 className="mt-8 w-2/3 text-2xl font-medium max-w-[1200px]">
                            By providing equal opportunities and support to
                            women entrepreneurs, we can unlock their full
                            potential and drive innovation and economic growth.
                        </h2>
                        <div className="flex gap-4 mt-8">
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
                    <h3 className="text-2xl max-w-[900px]">
                        By matching you with mentors with similar goals,
                        industry, and personal background, we are aiming to make
                        you feel empathized with and understood while
                        progressing professionally.
                    </h3>
                </section>
                <section className="flex-col items-center mt-20 text-center">
                    <h2 className="font-bold text-mainred text-[40px] font">
                        Hear what our mentees have to say about Insightful!
                    </h2>
                    <div className="flex justify-evenly mt-16 text-left">
                        <div>
                            <div className="flex items-center pl-6 bg-mainpink">
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-bold text-mainred">
                                        Shannon Williams
                                    </h3>
                                    <h4 className="w-60 text-2xl font-medium">
                                        Transitioning into Entrepreneurship
                                    </h4>
                                </div>
                                <div className="relative w-72 h-56">
                                    <Image
                                        fill
                                        alt="shannon"
                                        src="/shannon.png"
                                        className="object-cover"
                                    ></Image>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="self-start font-bold text-mainred text-[64px]">
                                    “
                                </span>
                                <p className="mt-4 text-2xl max-w-[500px]">
                                    Being surrounded by a community of ambitious
                                    and supportive women who are passionate
                                    about their businesses has been inspiring
                                    and empowering.
                                </p>
                                <span className="self-end font-bold text-[64px] text-mainred">
                                    &rdquo;
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center px-6 bg-mainpink">
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-bold text-mainred">
                                        Aisha Smith
                                    </h3>
                                    <h4 className="w-60 text-2xl font-medium">
                                        Learning Business Strategy
                                    </h4>
                                </div>
                                <div className="relative w-72 h-56">
                                    <Image
                                        fill
                                        alt="aisha"
                                        src="/aisha.png"
                                    ></Image>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="self-start font-bold text-mainred text-[64px]">
                                    “
                                </span>
                                <p className="mt-4 text-2xl max-w-[500px]">
                                    I have made meaningful connections with
                                    other women in the program, which I believe
                                    will continue to be a source of support and
                                    collaboration for years to come.
                                </p>
                                <span className="self-end font-bold text-[64px] text-mainred">
                                    &rdquo;
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center p-16 mt-16 text-center bg-mainpink">
                    <h2 className="font-title text-[30px]">
                        Ready to be{' '}
                        <span className="text-mainred">insightful?</span>
                    </h2>
                    <h3 className="mt-4 text-3xl font-medium">
                        Sign up below as a mentor or as a mentee!
                    </h3>
                    <div className="flex gap-2 mt-10">
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
