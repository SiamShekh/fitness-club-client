import { BaseApi } from "./BaseApi";

const ProductEndpoints = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        AddProducts: builder.mutation({
            invalidatesTags: ["Products"],
            query: (payload) => ({
                url: '/product/create-products',
                method: 'POST',
                body: payload
            })
        }),
        GetProductsList: builder.query({
            query: () => ({
                url: '/product/get-all',
                method: 'GET'
            }),
            providesTags: ["Products"],
        }),
        GetProductsFilterList: builder.query({
            query: (arg) => ({
                url: '/product/filter',
                method: 'GET',
                params: arg
            }),
            providesTags: ["Products"],
        }),
        DeleteProducts: builder.mutation({
            query: (arg) => ({
                url: `/product/delete-products/${arg}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        }),
        getSingleProducts: builder.query({
            query: (arg) => ({
                url: `/product/get-products/${arg}`,
                method: "GET"
            }),
        }),
        UpdateProducts: builder.mutation({
            query: (arg) => ({
                url: `/product/update-products/${arg.id}`,
                body: arg.payload,
                method: "PUT"
            }),
            invalidatesTags: ["Products"]
        }),
    })
});

export const { useAddProductsMutation, useGetProductsListQuery, useDeleteProductsMutation, useGetSingleProductsQuery, useUpdateProductsMutation, useGetProductsFilterListQuery } = ProductEndpoints;