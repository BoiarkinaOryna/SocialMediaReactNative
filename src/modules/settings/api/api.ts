import { baseApi } from "@shared/api/api";
import { AlbumData,EditableUserData } from "./api.types";

export const settingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation<any, EditableUserData>({
            query: (body) => ({
                url: "settings",
                method: "PATCH",
                body,
            })
        }),
        createAlbum: builder.mutation<any, {body: AlbumData, token: String}>({
            query: ({body, token}) => ({
                url: "albums",
                method: "POST",
                headers: {Authorization: `Bearer ${token}`},
                body
            })
        }),
        
    })
})

export const {
    useUpdateProfileMutation,
    useCreateAlbumMutation
} = settingsApi