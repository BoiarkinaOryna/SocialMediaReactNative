import { baseApi } from "@shared/api/api";
import { EditableUserData } from "./api.types";

export const settingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation<any, EditableUserData>({
            query: (body) => ({
                url: "settings",
                method: "PATCH",
                body,
            })
        })
    })
})

export const {
    useUpdateProfileMutation
} = settingsApi