import { FullUserWithoutRelations } from "@shared/types/user.types"

export type Message = {
    id: number;
    text: string;
    created_at: Date;
    sender_id: number;
    chat_id: any;
    readers?: any[];
  };