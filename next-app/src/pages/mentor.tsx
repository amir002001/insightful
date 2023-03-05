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
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2>
                            {mentor?.first_name} {mentor?.last_name}
                        </h2>
                        <h3> </h3>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Mentor
