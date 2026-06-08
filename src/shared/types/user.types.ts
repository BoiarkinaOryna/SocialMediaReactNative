export type FullUserWithoutRelations = {
    id: number,
    username: string | null,
    pseudonym?: string,
    birth_date?: string,
    email: string,
    signature?: string,
    avatar?: string,
}
// Relations:
    // post?: Post[],
    // album?: Album[],
    // adminidtratedGroups?: ChatGroup[], // chatGroupMembers -> chat_app_chatgroup_members???
    // chatMessages?: ChatMessage[],
    // frendship?: Friendship[] // from, to

// export type Avatar = {
//     id: Number,
//     image: string,
//     profile: FullUserWithoutRelations,
//     shown: Boolean,
//     active: Boolean
// }
