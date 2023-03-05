import { Logo } from '@/components/svgs/logo'
import { Caret } from '@/components/svgs/caret'
import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'

const Login = () => {
    return (
        <>
            <Head>
                <title>Insightful - login</title>
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
            <main className="flex relative flex-col gap-12 pr-16 pl-24 w-screen h-screen"></main>
        </>
    )
}

export default Login
