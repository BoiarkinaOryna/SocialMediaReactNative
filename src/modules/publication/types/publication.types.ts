import { InferType } from "yup";
import { publicationValidator } from "../models/publication.validation";

export type PublicationSchema = InferType<typeof publicationValidator>;

export type Post = {
    id: number;
    links: string[] | null;
    title: string;
    topic: string | null;
    content: string | null;
    userId: number | null;
}
export type CreatePost = {
    links?: string;
    title: string;
    topic: string;
    content: string;
}