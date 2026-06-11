import * as yup from "yup";

export const myDataValidator = yup.object({
    name: yup
        .string()
        .default(""),
    surname: yup
        .string()
        .default(""),
    pseudonym: yup
        .string()
        .default(""),
    username: yup
        .string()
        .min(3, "Username must contain at least 3 characters")
        .default(""),
    birthDate: yup
        .string()
        .default(""),
    email: yup
        .string()
        .email("Email must contain '@' and '.'")
        .default("")
})

export const albumValidator = yup.object({
    name: yup
        .string()
        .required(),
    theme: yup
        .string()
        .required(),
    year: yup
        .number()
        .required()
        .max(2030, "Year must be before 2030")
        .positive("Year must be a positive number")
        .integer("Year must be an integer")
})
