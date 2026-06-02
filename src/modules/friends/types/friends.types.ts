export type friend = {
    id: number
    username: string
    first_name: string,
    last_name: string,
    userId: number,
    // userId: number;
    // birth_date: string | null
    // signature: string | null
    // avatar: string | null
    pseudonym: string | null
    // is_image_signature: boolean
    // is_text_signature: boolean
}

// export type request = {
//     id: number,
//     from_user_id: number,   
//     to_user_id: number,
//     created_at: string,
//     user_app_user_user_app_friendship_from_user_idTouser_app_user: {
//       first_name: string,
//       last_name: string,
//       username: string,
//       avatar: string
//     }
// }
export type request = {
    id: number,
    from_user_id: number,   
    to_user_id: number,
    created_at: string,
    username: string,
    pseudonym: string | null,
    // user_app_user_user_app_friendship_from_user_idTouser_app_user: {
    //   first_name: string,
    //   last_name: string,
    //   username: string,
    //   avatar: string
    // }
}