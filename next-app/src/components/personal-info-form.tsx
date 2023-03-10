import React from 'react'
import { Form, Field } from 'houseform'
import { z } from 'zod'
import { clsx } from 'clsx'
import { FormStep } from '@/pages/signup'
import { motion } from 'framer-motion'

export const ethnicity_schema = z.union([
    z.literal('Indigenous'),
    z.literal('Asian'),
    z.literal('Black/African American'),
    z.literal('Hispanic/Latino'),
    z.literal('Native Hawaiian/Pacific Islander'),
    z.literal('White'),
    z.literal('other'),
])
export const location_schema = z.string().min(1)
export const gender_schema = z.union([
    z.literal('woman'),
    z.literal('transgender'),
    z.literal('non-binary/non-comforming'),
    z.literal('other/prefer not to say'),
])
export const pronoun_schema = z.union([
    z.literal('she/her/hers'),
    z.literal('they/them/theirs'),
    z.literal('ze/hir/hirs'),
    z.literal('others'),
])

export const PersonalInfoForm = (props: {
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
                Personal Information
            </h2>
            <a href="#" className="mt-2 underline">
                Why am I being asked this?
            </a>
            <Form
                onSubmit={(values) => {
                    props.set_form_data({ ...props.form_data, ...values })
                    props.set_active_step('professional background')
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
                            <Field name="gender" onBlurValidate={gender_schema}>
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="gender"
                                            >
                                                What gender do you identify
                                                with?
                                            </label>

                                            <select
                                                className="p-4 mt-4 rounded-2xl border border-mainred"
                                                name="gender"
                                                id="gender"
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
                                                <option value="woman">
                                                    woman
                                                </option>
                                                <option value="transgender">
                                                    transgender
                                                </option>
                                                <option value="non-binary/non-comforming">
                                                    non-binary/non-comforming
                                                </option>
                                                <option value="other/prefer not to say">
                                                    other/prefer not to say
                                                </option>
                                            </select>

                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field
                                name="pronouns"
                                onBlurValidate={pronoun_schema}
                            >
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="pronouns"
                                            >
                                                Select your pronouns
                                            </label>
                                            <select
                                                name="pronouns"
                                                id="pronouns"
                                                value={value}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                                className="p-4 mt-4 rounded-2xl border border-mainred"
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
                                                <option value="she/her/hers">
                                                    she/her/hers
                                                </option>
                                                <option value="they/them/theirs">
                                                    they/them/theirs
                                                </option>
                                                <option value="ze/hir/hirs">
                                                    ze/hir/hirs
                                                </option>
                                                <option value="others">
                                                    others
                                                </option>
                                            </select>
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field
                                name="location"
                                onBlurValidate={location_schema}
                            >
                                {({ value, setValue, onBlur, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="location"
                                            >
                                                Where do you reside?
                                            </label>
                                            <input
                                                className="p-4 mt-4 rounded-2xl border border-mainred"
                                                name="location"
                                                id="location"
                                                value={value}
                                                onBlur={onBlur}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                                placeholder={'Location'}
                                            />
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field
                                name="ethnicity"
                                onChangeValidate={ethnicity_schema}
                            >
                                {({ value, setValue, errors }) => {
                                    return (
                                        <div className="flex flex-col">
                                            <label
                                                className="font-bold text-[24px] text-mainred"
                                                htmlFor="ethnicity"
                                            >
                                                What&apos;s your ethnicity?
                                            </label>

                                            <select
                                                className="p-4 mt-4 rounded-2xl border border-mainred"
                                                name="ethnicity"
                                                id="ethnicity"
                                                value={value}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                    hidden
                                                >
                                                    Select
                                                </option>
                                                <option value="woman">
                                                    Asian
                                                </option>
                                                <option value="Black/African American">
                                                    Black/African American
                                                </option>
                                                <option value="Hispanic/Latino">
                                                    Hispanic/Latino
                                                </option>
                                                <option value="Native Hawaiian/Pacific Islander">
                                                    Native Hawaiian/Pacific
                                                    Islander
                                                </option>
                                                <option value="White">
                                                    White
                                                </option>
                                                <option value="other">
                                                    other
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
                    </form>
                )}
            </Form>
        </motion.div>
    )
}
