import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
  baseUrl: "http://192.168.88.239:3000"
  }),
  endpoints: () => ({})
});
