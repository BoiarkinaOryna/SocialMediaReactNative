export type FullUserWithoutRelations = {
    id: Number,
    name?: string,
    username?: string,
    pseudonym?: string,
    birthDate?: string,
    email: string,
    password: string,
    image?: string,
    about?: string,
    signature?: string,
    avatar?: Avatar,
}
// Relations:
    // post?: Post[],
    // album?: Album[],
    // adminidtratedGroups?: ChatGroup[], // chatGroupMembers -> chat_app_chatgroup_members???
    // chatMessages?: ChatMessage[],
    // frendship?: Friendship[] // from, to

export type Avatar = {
    id: Number,
    image: string,
    profile: FullUserWithoutRelations,
    shown: Boolean,
    active: Boolean
}