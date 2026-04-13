import { type InferType } from "yup";
import { loginValidator } from "../models/login.validation";

export type LoginSchema = InferType<typeof loginValidator>;