import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getData: builder.query<unknown, void>({
      query: () => `get-data/sample.json`,
    }),
    updateData: builder.mutation<unknown, number>({
      query: (id) => `update-data/${id}`,
    }),
  }),
});

export const { useGetDataQuery, useUpdateDataMutation } = api;
