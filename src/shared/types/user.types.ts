export type FullUserWithoutRelations = {
    id: Number,
    firstName?: String,
    lastName?: String
    username?: String,
    pseudonym?: String,
    birthDate?: String,
    email: String,
    password: String,
    image?: String,
    about?: String,
    signature?: String,
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
    image: String,
    profile: FullUserWithoutRelations,
    shown: Boolean,
    active: Boolean
}