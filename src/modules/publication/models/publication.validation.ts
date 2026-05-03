import * as yup from "yup";

export const publicationValidator = yup.object({
  title: yup.string().required("Введіть назву публікації"),
  topic: yup.string().required("Введіть тему публікації"),
  text: yup.string().required("Напишіть текст публікації"),
  url: yup.string().default(""),
});
