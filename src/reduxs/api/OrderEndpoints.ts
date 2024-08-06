import { BaseApi } from "./BaseApi";

const OrderEndpoins = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateOrder: builder.mutation({
            query: (arg) => ({
                url: '/order/create-order',
                method: 'POST',
                body: arg
            })
        })
    })
});

export const { useCreateOrderMutation } = OrderEndpoins;