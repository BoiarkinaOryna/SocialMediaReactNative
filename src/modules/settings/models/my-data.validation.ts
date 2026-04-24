import * as yup from "yup";

export const myDataValidator = yup.object({
    name: yup
        .string()
        .required()
        .nullable(),
    surname: yup
        .string()
        .required()
        .nullable(),
    birthDate: yup
        .date()
        .required()
        .nullable(),
    email: yup
        .string()
        .email("Email must contain '@' and '.'")
        .required()
        // .nonNullable()
        .default(undefined)
})

export const albumValidator = yup.object({
    title: yup
        .string()
        .required(),
    topic: yup
        .string()
        .required(),
    year: yup
        .number()
        .max(2030, "Year must be before 2030")
        .positive("Year must be a positive number")
        .integer("Year must be an integer")
})