import * as yup from "yup";

export const registerValidator = yup.object({
    email: yup
        .string()
        .required("Email is required")
        .email("Email must contain '@' and '.'"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "The password must contain at least 6 characters"),
    passwordConfirmation: yup
        .string()
        .required("Password confirmation is required")
        .min(6, "The password must contain at least 6 characters")
})
