import { Logo } from '@/components/svgs/logo'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import {
    ethnicity_schema,
    gender_schema,
    location_schema,
    PersonalInfoForm,
    pronoun_schema,
} from '@/components/personal-info-form'
import { z } from 'zod'
import { ProfessionalBackgroundForm } from '@/components/professional-background-form'
import { GoalsForm } from '@/components/goals-form'
import { MessageForm } from '@/components/message-form'
import Link from 'next/link'
import { SignupEmailForm } from '@/components/signup-email-form'

export type FormStep =
    | 'signup email'
    | 'personal info'
    | 'professional background'
    | 'goals'
    | 'message'

const form_switch = ({
    step,
    form_data,
    set_form_data,
    set_active_step,
}: {
    step: FormStep
    form_data: any
    set_form_data: any
    set_active_step: any
}) => {
    switch (step) {
        case 'personal info':
            return (
                <PersonalInfoForm
                    form_data={form_data}
                    set_form_data={set_form_data}
                    set_active_step={set_active_step}
                />
            )
        case 'message':
            return (
                <MessageForm
                    form_data={form_data}
                    set_form_data={set_form_data}
                    set_active_step={set_active_step}
                />
            )
        case 'goals':
            return (
                <GoalsForm
                    form_data={form_data}
                    set_form_data={set_form_data}
                    set_active_step={set_active_step}
                />
            )
        case 'professional background':
            return (
                <ProfessionalBackgroundForm
                    form_data={form_data}
                    set_form_data={set_form_data}
                    set_active_step={set_active_step}
                />
            )
        case 'signup email':
            return (
                <SignupEmailForm
                    form_data={form_data}
                    set_form_data={set_form_data}
                    set_active_step={set_active_step}
                />
            )
    }
}

const Signup = () => {
    const [active_step, set_active_step] = useState<FormStep>('personal info')
    const [form_data, set_form_data] = useState({})
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
                    {form_switch({
                        set_active_step: set_active_step,
                        set_form_data: set_form_data,
                        form_data: form_data,
                        step: active_step,
                    })}
                </section>
            </main>
        </>
    )
}

export default Signup
