import { baseApi } from "@shared/api/api";
import { CreatePost, Post } from "../types/publication.types";


export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], {token: string, take: number, page: number}>({
      query: ({token, take, page}) => ({
        url: `/posts?take=${take}&page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createPost: builder.mutation<any, {data: CreatePost, token: string}>({
      query: ({data, token}) => ({
        url: "/posts/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
    getMyPosts: builder.query<Post[], {token: string, take: number, page: number}>({
      query: ({token, take,page}) => ({
        url: `/posts/my?=${take}&page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    delete: builder.mutation<any, {id: number, token: string}>({
      query: ({id, token}) => ({
        url: "/posts/dlete",
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        id,
      }),
    }),   
  }),
});


export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useDeleteMutation,
  useGetMyPostsQuery
} = postsApi;