import React from 'react'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const LoginForm = (props: {}) => {
    return (
        <motion.div
            initial={{ x: '-200vh' }}
            animate={{ x: 0 }}
            className="container flex flex-col p-24 max-w-[1200px]"
            transition={{ duration: 0.7 }}
        >
            <Form onSubmit={(values) => {}}>
                {({ submit }) => (
                    <form
                        className="mt-16"
                        onSubmit={(e) => {
                            e.preventDefault()
                            submit()
                        }}
                    >
                        <div className="grid grid-cols-2 gap-x-12 gap-y-24">
                            <Field name="email" onBlurValidate={z.string()}>
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
                            <Field name="password" onBlurValidate={z.string()}>
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
                        <div className="flex gap-4 justify-end w-full">
                            <Link
                                href={'/signup'}
                                className={clsx(
                                    'float-right py-3 px-6 mt-12 font-bold text-mainred uppercase rounded-full text-[24px] '
                                )}
                            >
                                Sign Up
                            </Link>
                            <button
                                onClick={submit}
                                className={clsx(
                                    'float-right py-3 px-6 mt-12 font-bold text-white uppercase rounded-full text-[24px] bg-mainred'
                                )}
                            >
                                login
                            </button>
                        </div>
                    </form>
                )}
            </Form>
        </motion.div>
    )
}
