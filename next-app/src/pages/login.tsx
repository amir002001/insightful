import { Logo } from '@/components/svgs/logo'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { z } from 'zod'
import Link from 'next/link'
import { LoginForm } from '@/components/login-form'

const Login = () => {
    const [form_data, set_form_data] = useState(0)

    return (
        <>
            <Head>
                <title>Insightful - signup</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Link
                href={'/'}
                className="flex absolute top-6 left-6 z-20 gap-3 items-center text-xl font-title text-mainred"
            >
                <Logo className="w-9 h-9" />
                <h1>Insightful</h1>
            </Link>
            <main className="flex relative w-screen h-screen">
                <div className="relative z-10 w-1/3 h-full max-w-[460px]">
                    <Image
                        alt="left background"
                        src={
                            'https://res.cloudinary.com/df3h8ffly/image/upload/v1677947958/Rectangle_7_1_i2nz50.webp'
                        }
                        fill
                        className="object-cover"
                    />
                </div>
                <section className="flex justify-center items-center w-full bg-mainpink">
                    <LoginForm />
                </section>
            </main>
        </>
    )
}

export default Login
