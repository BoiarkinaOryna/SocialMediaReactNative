import { FullUserWithoutRelations } from "@shared/types/user.types"

export type Message = {
    id: number;
    text: string;
    created_at: string;
    sender: {
      id: number;
    };
    chat?: any;
    readers?: any[];
  };