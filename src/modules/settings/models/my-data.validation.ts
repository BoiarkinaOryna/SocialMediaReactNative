import * as yup from "yup";

export const myDataValidator = yup.object({
    name: yup.string(),
    surname: yup.string(),
    birthDate: yup.date(),
    email: yup
        .string()
        .email("Email must contain '@' and '.'")
})