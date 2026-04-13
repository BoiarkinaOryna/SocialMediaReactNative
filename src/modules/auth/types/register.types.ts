import { type InferType } from "yup";
import { registerValidator } from "../models/register.validation";

export type ResgisterSchema = InferType<typeof registerValidator>;