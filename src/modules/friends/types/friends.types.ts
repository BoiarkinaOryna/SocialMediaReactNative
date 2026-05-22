export type friend = {
    id: number
    userId: number;
    username: string
    birth_date: string | null
    signature: string | null
    avatar: string | null
    pseudonym: string | null
    is_image_signature: boolean
    is_text_signature: boolean
}

export type request = {
    id: number,
    fromProfileId: number,
    toProfileId: number,
    created_at: string,
    from_profile: {
      id: number,
      userId: number,
      birth_date: string | Date | null,
      signature: string | null,
      avatar: string | null,
      pseudonym: string | null,
      is_image_signature: boolean,
      is_text_signature: boolean
    }
}