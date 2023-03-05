import React from 'react'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { FormStep } from '@/pages/signup'
import { motion } from 'framer-motion'

const email_schema = z.string().email()
const password_schema = z.string().min(4)

export const SignupEmailForm = (props: {
    set_form_data: React.Dispatch<React.SetStateAction<any>>
    form_data: any
    set_active_step: React.Dispatch<React.SetStateAction<FormStep>>
}) => {
    return (
        <motion.div
            initial={{ x: '-200vh' }}
            animate={{ x: 0 }}
            className="container flex flex-col p-24 max-w-[1200px]"
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-3xl font-title text-mainred">
                Let&apos;s get your credentials
            </h2>
            <Form
                onSubmit={(values) => {
                    props.set_form_data({ ...props.form_data, ...values })
                    console.log(props.form_data)
                }}
            >
                {({ submit }) => (
                    <form
                        className="mt-16"
                        onSubmit={(e) => {
                            e.preventDefault()
                            submit()
                        }}
                    >
                        <div className="grid grid-cols-2 gap-x-12 gap-y-24">
                            <Field name="email" onBlurValidate={email_schema}>
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="p-4 mt-4 rounded-2xl border border-mainred"
                                                name="email"
                                                id="email"
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                                placeholder={'email'}
                                            />
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field
                                name="password"
                                onBlurValidate={password_schema}
                            >
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                className="p-4 mt-4 rounded-2xl border border-mainred"
                                                name="password"
                                                id="password"
                                                type={'password'}
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                                placeholder={'password'}
                                            />
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )
                                }}
                            </Field>
                        </div>
                        <button
                            onClick={submit}
                            className={clsx(
                                'float-right py-3 px-6 mt-12 font-bold text-white uppercase rounded-full text-[24px] bg-mainred'
                            )}
                        >
                            Done
                        </button>
                        <button
                            onClick={() =>
                                props.set_active_step('personal info')
                            }
                            className={clsx(
                                'mr-4 float-right py-3 px-6 mt-12 font-bold uppercase rounded-full text-[24px] text-mainred'
                            )}
                        >
                            back
                        </button>
                    </form>
                )}
            </Form>
        </motion.div>
    )
}
