import React from 'react'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { FormStep } from '@/pages/signup'
// TODO add form validation

export const ProfessionalBackgroundForm = (props: {
    set_form_data: React.Dispatch<React.SetStateAction<any>>
    form_data: any
    set_active_step: React.Dispatch<React.SetStateAction<FormStep>>
}) => {
    return (
        <div className="container flex flex-col p-16 max-w-[1200px]">
            <h2 className="text-3xl font-title text-mainred">
                Professional Background
            </h2>
            <a href="#" className="mt-2 underline">
                Why am I being asked this?
            </a>
            <Form
                onSubmit={(values) => {
                    props.set_form_data({ ...props.form_data, ...values })
                    props.set_active_step('goals')
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
                            <Field name="expertise" onBlurValidate={z.string()}>
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="expertise"
                                            >
                                                What&apos;s your
                                                expertise/industry?
                                            </label>
                                            <input
                                                className="p-4 mt-4 rounded-2xl border max-w-[600px] border-mainred"
                                                id="expertise"
                                                name="expertise"
                                                placeholder="Type here"
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                            />
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field name="education" onBlurValidate={z.string()}>
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col mt-12">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="education"
                                            >
                                                What gender do you identify
                                                with?
                                            </label>

                                            <select
                                                className="p-4 mt-4 rounded-2xl border max-w-[600px] border-mainred"
                                                name="education"
                                                id="education"
                                                value={value}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                                onBlur={onBlur}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                    hidden
                                                >
                                                    Select
                                                </option>
                                                <option value="diploma">
                                                    diploma
                                                </option>
                                                <option value="undergraduate degree">
                                                    undergraduate degree
                                                </option>
                                                <option value="masters degree">
                                                    masters degree
                                                </option>
                                            </select>

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
                            next
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
        </div>
    )
}