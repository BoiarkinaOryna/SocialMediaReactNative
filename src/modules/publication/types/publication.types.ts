import { InferType } from "yup";
import { publicationValidator } from "../models/publication.validation";
import { FullUserWithoutRelations } from "@shared/types/user.types";

export type PublicationSchema = InferType<typeof publicationValidator>;

export type Post = {
    id: number;
    links: string[] | null;
    title: string;
    topic: string | null;
    content: string | null;
    author: {
        profile: {
            id: number,
            pseudonym: string | undefined,
            avatar: string | undefined
        }
    }
}
export type CreatePost = {
    links?: string;
    title: string;
    topic: string;
    content: string;
}