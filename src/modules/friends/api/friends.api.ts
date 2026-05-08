import { baseApi } from "@shared/api/api";
import { friend, request } from "../types/friends.types";
import { string } from "yup";


const friendsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFriends: builder.query<friend[], string>({
            query: (token) => ({
                url: "/friends/all",
                headers: {Authorization: `Bearer ${token}`}
            })
        }),
        getRecommendations: builder.query<friend[], string>({
            query: (token) => ({
                url: "/friends/recommendations",
                headers: {Authorization: `Bearer ${token}`}
            })
        }),
        getRequests: builder.query<request[], string>({
            query: (token) => ({
                url: "/friends/requests",
                headers: {Authorization: `Bearer ${token}`}
            })
        }),
        sendRequest: builder.mutation<any, {token: string, id: number}>({
            query: ({token, id}) => ({
                url: "/friends/request",
                method: "POST",
                headers: {Authorization: `Bearer ${token}`},
                body: {toProfileId: id}
            })
        }),
        acceptRequest: builder.mutation<any, {token: string, id: number}>({
            query: ({token, id}) => ({
                url: `/friends/accept/${id}`,
                method: "POST",
                headers: {Authorization: `Bearer ${token}`},
            })
        }),
        declineRequest: builder.mutation<any, {token: string, id: number}>({
            query: ({token, id}) => ({
                url: `/friends/${id}`,
                method: "DELETE",
                headers: {Authorization: `Bearer ${token}`},
            })
        }),
    })
})

export const {
    useGetFriendsQuery,
    useGetRecommendationsQuery,
    useGetRequestsQuery,
    useSendRequestMutation,
    useAcceptRequestMutation,
    useDeclineRequestMutation
} = friendsApi