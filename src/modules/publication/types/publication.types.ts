import { InferType } from "yup";
import { publicationValidator } from "../models/publication.validation";

export type PublicationSchema = InferType<typeof publicationValidator>;

export type Post = {
    id: number;
    url: string | null;
    title: string;
    topic: string | null;
    text: string | null;
    userId: number | null;
}
export type CreatePost = {
    url?: string;
    title: string;
    topic: string;
    text: string;
}