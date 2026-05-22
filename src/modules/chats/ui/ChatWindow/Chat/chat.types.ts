import { FullUserWithoutRelations } from "@shared/types/user.types"

export type Message = {
    id: number,
    text?: string | null,
    chat: any, // потім можна змінити
    created_at: string,
    sender: any, // потім можна змінити
    readers: any // потім можна змінити

}