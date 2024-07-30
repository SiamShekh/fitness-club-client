import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
    reducerPath: 'BaseApi',
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api/v1'}),
    endpoints: ()=> ({})
});



