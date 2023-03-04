import Head from 'next/head'
import { Logo } from '@/components/svgs/logo'
import { Discord } from '@/components/svgs/discord'

const items = Array(10)
    .fill(0)
    .map((num) => (
        <div key={num} className="bg-gray-200 rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
                src="https://picsum.photos/200/300"
                className="rounded-full w-object-cover"
                alt=""
            />
        </div>
    ))

export default function Home() {
    return (
        <>
            <Head>
                <title>Insightful</title>
            </Head>
            <nav className="w-screen">
                <div className="w-full h-14 bg-gray-200"></div>
                <div className="flex justify-between items-center p-6 bg-mainpink">
                    <div className="flex gap-3 items-center text-xl font-title text-mainred">
                        <Logo className="w-9 h-9" />
                        <h1>Insightful</h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex gap-2 items-center py-1 px-5 text-sm font-bold uppercase rounded-full border text-mainred border-mainred">
                            Login
                        </button>
                        <button className="flex gap-2 items-center py-1 px-5 text-sm font-bold text-white uppercase rounded-full bg-mainred">
                            Sign Up
                        </button>
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
                        <h2 className="mt-2 w-2/3 font-medium text-[28px] max-w-[1000px]">
                            Lorem ipsum dolor sit amet consectetur. Orci
                            dignissim amet semper mauris felis nam. Risus.
                        </h2>
                        <div className="flex gap-2 mt-5">
                            <button className="py-2 px-3 uppercase rounded-full border-2 text-mainred font-bold bg-[#FFE0BC] border-mainred">
                                Find Mentorship
                            </button>
                            <button className="py-2 px-3 uppercase rounded-full border-2 text-mainred font-bold bg-[#FFE0BC] border-mainred">
                                Become a Mentor
                            </button>
                        </div>
                    </div>
                </section>
                <section className="flex overflow-hidden gap-9 mt-12">
                    {items}
                </section>
                <section className="flex flex-col items-center mt-8 text-center">
                    <h2 className="font-bold text-[40px] text-mainred">
                        Connect with mentors that empathizes with you.
                    </h2>
                    <h3 className="font-medium text-[28px] max-w-[658px]">
                        Lorem ipsum dolor sit amet consectetur. Orci dignissim
                        amet semper mauris felis nam. Risus.
                    </h3>
                </section>
            </main>
        </>
    )
}
