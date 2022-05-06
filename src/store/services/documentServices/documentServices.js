import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const documentServices = createApi({
  reducerPath: "document",
  tagTypes: ["document"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-qa.salesroom.in/v1/",
  }),
  endpoints: (builder) => ({
    uploadDocument: builder.mutation({
      query: ({ businessId, category }, uploadFile) => ({
        url: `documents/upload?businessId=${businessId}&category=${category}`,
        method: "POST",
        body: uploadFile,
      }),
      invalidatesTags: ["document"],
    }),
  }),
});

export const { useUploadDocumentMutation } = documentServices;
export default documentServices;
