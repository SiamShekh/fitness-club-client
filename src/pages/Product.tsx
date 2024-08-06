/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Loading from "../components/Ui/Loading";
import Product_Item from "../components/Ui/Product_Item";
import { useLazyGetProductsFilterListQuery } from "../reduxs/api/ProductEndpoints";
import { useForm } from "react-hook-form";

const Product = () => {
    const { register, handleSubmit } = useForm();
    const searchParam = {
        name: ""
    }
    const [trigger, { data, isFetching }] = useLazyGetProductsFilterListQuery();
    useEffect(() => {
        trigger(searchParam)
    }, [])

    const HandleSearch = (event: any) => {
        const searchParam = {
            name: event.name
        };
        trigger(searchParam)
    }

    if (isFetching) {
        return <Loading />
    }
    
    return (
        <div>
            <div className="max-w-[1200px] mx-auto p-5">
                <div className="flex justify-between items-center my-5">
                    <p className="font-poppin text-black">{data?.data.length} items found</p>

                    <div className="items-center gap-5 navbar-end hidden md:flex text-black">
                        <form onSubmit={handleSubmit(HandleSearch)} className="input input-bordered outline-none flex items-center gap-2">
                            <input type="text" className="grow" {...register("name")} placeholder="Search" />
                            <kbd className="kbd kbd-sm">⌘</kbd>
                            <kbd className="kbd kbd-sm">K</kbd>
                        </form>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
                    {
                        data?.data.map((data: object, index: number) => <Product_Item data={data} key={index} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;