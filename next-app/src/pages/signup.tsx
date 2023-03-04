import { Logo } from '@/components/svgs/logo'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { PersonalInfoForm } from '@/components/personal-info-form'

const Signup = () => {
    const [active_step, set_active_step] = useState(0)
    const [form_data, set_form_data] = useState(0)

    return (
        <>
            <Head>
                <title>Insightful</title>
            </Head>
            <nav className="w-screen">
                <div className="w-full h-14 bg-gray-200"></div>
            </nav>
            <main className="flex relative w-screen h-screen">
                <div className="relative w-1/3 h-full max-w-[460px]">
                    <Image
                        alt="left background"
                        src={
                            'https://res.cloudinary.com/df3h8ffly/image/upload/v1677947958/Rectangle_7_1_i2nz50.webp'
                        }
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex absolute top-6 left-6 gap-3 items-center text-xl font-title text-mainred">
                    <Logo className="w-9 h-9" />
                    <h1>Insightful</h1>
                </div>
                <section className="flex justify-center items-center w-full">
                    <PersonalInfoForm />
                </section>
            </main>
        </>
    )
}

export default Signup
