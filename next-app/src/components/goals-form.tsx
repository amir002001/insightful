import React from 'react'
import { motion } from 'framer-motion'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { FormStep } from '@/pages/signup'
// TODO add form validation
type goals =
    | 'Transitioning into entrepreneurship'
    | 'building a business strategy'
    | 'scaling my business'
    | 'Imrpoving my leadership skills'

export const GoalsForm = (props: {
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
            <Form
                onSubmit={(values) => {
                    props.set_form_data({ ...props.form_data, ...values })
                    props.set_active_step('message')
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
                        <div className="">
                            <Field name="goals" onChangeValidate={z.string()}>
                                {({ value, setValue, errors }) => {
                                    return (
                                        <div className="flex flex-col gap-4">
                                            <fieldset className="flex flex-col gap-4">
                                                <legend className="text-3xl font-title text-mainred">
                                                    What are your goals right
                                                    now?
                                                </legend>

                                                <div
                                                    className={clsx(
                                                        'mt-12 rounded-xl border border-mainred max-w-[500px]',
                                                        value ===
                                                            'entrepreneurship'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        className="hidden"
                                                        id="entrepreneurship"
                                                        name="game"
                                                        value="entrepreneurship"
                                                        checked={
                                                            value ===
                                                            'entrepreneurship'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="entrepreneurship"
                                                        className="inline-block py-4 px-6 w-full h-full"
                                                    >
                                                        transitioning into
                                                        entrepreneurship
                                                    </label>
                                                </div>

                                                <div
                                                    className={clsx(
                                                        ' rounded-xl border border-mainred max-w-[500px]',
                                                        value ===
                                                            'business strategy'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="business strategy"
                                                        name="goals"
                                                        value="business strategy"
                                                        className="hidden"
                                                        checked={
                                                            value ===
                                                            'business strategy'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="business strategy"
                                                        className="inline-block py-4 px-6 w-full h-full"
                                                    >
                                                        Building a business
                                                        strategy
                                                    </label>
                                                </div>
                                                <div
                                                    className={clsx(
                                                        ' rounded-xl border border-mainred max-w-[500px]',
                                                        value ===
                                                            'scaling business'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="scaling business"
                                                        name="goals"
                                                        value="scaling business"
                                                        className="hidden"
                                                        checked={
                                                            value ===
                                                            'scaling business'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        className="inline-block py-4 px-6 w-full h-full"
                                                        htmlFor="scaling business"
                                                    >
                                                        Scaling my business
                                                    </label>
                                                </div>

                                                <div
                                                    className={clsx(
                                                        ' rounded-xl border border-mainred max-w-[500px]',
                                                        value ===
                                                            'leadership skills'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        className="hidden"
                                                        type="radio"
                                                        id="leadership skills"
                                                        name="game"
                                                        value="leadership skills"
                                                        checked={
                                                            value ===
                                                            'leadership skills'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        className="inline-block py-4 px-6 w-full h-full"
                                                        htmlFor="leadership skills"
                                                    >
                                                        Improving my leadership
                                                        skills
                                                    </label>
                                                </div>
                                            </fieldset>
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}{' '}
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
                            next
                        </button>
                        <button
                            onClick={() =>
                                props.set_active_step('professional background')
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
