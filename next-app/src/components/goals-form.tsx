import React from 'react'
import { motion } from 'framer-motion'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { FormStep } from '@/pages/signup'

const goals_schema = z.union([
    z.literal('Transitioning into entrepreneurship'),
    z.literal('building a business strategy'),
    z.literal('scaling my business'),
    z.literal('Imrpoving my leadership skills'),
])
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
                            <Field name="goals" onChangeValidate={goals_schema}>
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
                                                            'Transitioning into entrepreneurship'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        className="hidden"
                                                        id="Transitioning into entrepreneurship"
                                                        name="goals"
                                                        value="Transitioning into entrepreneurship"
                                                        checked={
                                                            value ===
                                                            'Transitioning into entrepreneurship'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="Transitioning into entrepreneurship"
                                                        tabIndex={0}
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
                                                            'building a business strategy'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="building a business strategy"
                                                        name="goals"
                                                        value="building a business strategy"
                                                        className="hidden"
                                                        checked={
                                                            value ===
                                                            'building a business strategy'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="building a business strategy"
                                                        tabIndex={0}
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
                                                            'scaling my business'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        id="scaling my business"
                                                        name="goals"
                                                        value="scaling my business"
                                                        className="hidden"
                                                        checked={
                                                            value ===
                                                            'scaling my business'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        className="inline-block py-4 px-6 w-full h-full"
                                                        tabIndex={0}
                                                        htmlFor="scaling my business"
                                                    >
                                                        Scaling my business
                                                    </label>
                                                </div>

                                                <div
                                                    className={clsx(
                                                        ' rounded-xl border border-mainred max-w-[500px]',
                                                        value ===
                                                            'Imrpoving my leadership skills'
                                                            ? 'bg-paleorange'
                                                            : 'bg-white'
                                                    )}
                                                >
                                                    <input
                                                        className="hidden"
                                                        type="radio"
                                                        id="Imrpoving my leadership skills"
                                                        name="goals"
                                                        value="Imrpoving my leadership skills"
                                                        checked={
                                                            value ===
                                                            'Imrpoving my leadership skills'
                                                        }
                                                        onChange={(e) =>
                                                            setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        className="inline-block py-4 px-6 w-full h-full"
                                                        tabIndex={0}
                                                        htmlFor="Imrpoving my leadership skills"
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
