import { baseApi } from "@shared/api/api";
import { CreatePost, Post } from "../types/publication.types";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], { token: string; take: number; page: number }>({
      query: ({ token, take, page }) => ({
        url: `/post?take=${take}&page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<any, { data: CreatePost; token: string }>({
      query: ({ data, token }) => ({
        url: "/post/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          ...data,
          links: [data.links],
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    addPostImage: builder.mutation<any, { base64: string; postId: number; token: string }>({
      query: ({ base64, postId, token }) => ({
        url: "/post/image",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          image: base64,
          postId,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    getMyPosts: builder.query<Post[], { token: string; take: number; page: number }>({
      query: ({ token, take, page }) => ({
        url: `/post/my?take=${take}&page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Posts"],
    }),
    delete: builder.mutation<any, { id: number; token: string }>({
      query: ({ id, token }) => ({
        url: "/post/my",
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
  useAddPostImageMutation,
  useDeleteMutation,
  useGetMyPostsQuery,
  useLazyGetMyPostsQuery,
} = postsApi;
