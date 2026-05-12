import { InferType } from "yup";
import { publicationValidator } from "../models/publication.validation";

export type PublicationSchema = InferType<typeof publicationValidator>;
