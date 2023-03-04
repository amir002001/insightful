import React from 'react'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { FormStep } from '@/pages/signup'
import { motion } from 'framer-motion'
// TODO add form validation

export const MessageForm = (props: {
    set_form_data: React.Dispatch<React.SetStateAction<any>>
    form_data: any
    set_active_step: React.Dispatch<React.SetStateAction<FormStep>>
}) => {
    return (
        <motion.div
            initial={{ x: '-200vw' }}
            animate={{ x: 0 }}
            exit={{ x: '200vw' }}
            transition={{ duration: 0.7 }}
            className="container flex flex-col p-16 max-w-[1200px]"
        >
            <h2 className="text-[32px] font-title text-mainred">
                Write a message for the mentors
            </h2>
            <Form
                onSubmit={(values) => {
                    props.set_form_data({ ...props.form_data, ...values })
                    props.set_active_step('message')
                }}
            >
                {({ submit }) => (
                    <form
                        className="mt-4"
                        onSubmit={(e) => {
                            e.preventDefault()
                            submit()
                        }}
                    >
                        <div className="">
                            <Field name="message" onBlurValidate={z.string()}>
                                {({ value, setValue, errors, onBlur }) => {
                                    return (
                                        <div>
                                            <label htmlFor="message">
                                                Help your prospective mentors
                                                get to know you better! You can
                                                tell us about yourself, your
                                                project, your goals, anything.
                                            </label>
                                            <textarea
                                                className="p-4 mt-4 w-full bg-white rounded-xl border border-mainred"
                                                id="message"
                                                name="message"
                                                placeholder="Tell us your story..."
                                                rows={8}
                                                value={value}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                                onBlur={onBlur}
                                            />
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
                            onClick={() => props.set_active_step('goals')}
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
