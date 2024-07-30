import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetSingleProductsQuery, useUpdateProductsMutation } from "../../reduxs/api/ProductEndpoints";

interface ProductsModalProps {
    showModals: boolean,
    _id: string,
    setModals: (value: boolean) => void
}

const UpdateProductsModal: React.FC<ProductsModalProps> = ({ showModals, setModals, _id }) => {
    const [formLoading, setFormLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: ProductData } = useGetSingleProductsQuery(_id);
    const [UpdateTrigger] = useUpdateProductsMutation();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateNewProducts = async (data: any) => {
        try {
            setFormLoading(true);
            const filteredData = Object.fromEntries(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(data).filter(([_, value]) => value !== '')
            );

            const payload = {
                id: _id,
                payload: filteredData
            }
            
            UpdateTrigger(payload);
        } catch (error) {
            console.error(error);
            setFormLoading(false);
        } finally {
            setFormLoading(false);
            setModals(false);
        }
    }

    return (
        <div>
            {
                showModals &&
                <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box text-black border-2 border-black">
                        <h3 className="font-bold text-lg">Create new products!</h3>
                        {
                            formLoading ? <p>Loading</p> :
                                <form onSubmit={handleSubmit(handleCreateNewProducts)} className="mt-3">
                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.name ? "bg-red-500" : ""}`}>
                                        Name
                                        <input type="text" defaultValue={ProductData?.data?.name} {...register("name")} className="grow outline-none" placeholder={"Dumbblee"} />
                                    </label>

                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.price ? "bg-red-500" : ""}`}>
                                        Price
                                        <input defaultValue={ProductData?.data?.price} type="text" {...register("price")} className="grow outline-none" placeholder={"$35"} />
                                    </label>

                                    <label className={`form-control w-full `}>
                                        <div className="label">
                                            <span className="label-text">Pick one category</span>
                                        </div>
                                        <select {...register("category", {
                                            required: true, validate: {
                                                notDefault: (value) => value !== "Pick one" || "Please select a category"
                                            }
                                        })} defaultValue={ProductData?.data?.category} className={`select select-bordered ${errors?.category ? "bg-red-500" : ""}`}>
                                            <option disabled>Pick one</option>
                                            <option>Cardio</option>
                                            <option>Strength Training</option>
                                            <option>Home Gym</option>
                                            <option>Fitness</option>
                                        </select>
                                    </label>

                                    <label className={`form-control w-full `}>
                                        <div className="label">
                                            <span className="label-text">Description</span>
                                        </div>
                                        <textarea defaultValue={ProductData?.data?.description} className={`${errors?.description ? "bg-red-500" : ""} textarea textarea-bordered h-24`} {...register("description")} placeholder="description"></textarea>
                                    </label>

                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.discount ? "bg-red-500" : ""}`}>
                                        Discount
                                        <input type="number" {...register("discount")}
                                            defaultValue={ProductData?.data?.discount} className="grow outline-none" placeholder="10%" />
                                    </label>

                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.stock ? "bg-red-500" : ""}`}>
                                        Stock
                                        <input type="number" defaultValue={ProductData?.data?.stock} {...register("stock")} className="grow outline-none" placeholder="888" />
                                    </label>

                                    <div className="modal-action">
                                        <div >
                                            <button className=" bg-green-500 px-5 py-2 rounded-lg mr-3" type="submit">Update</button>
                                            <button className="bg-red-500 px-5 py-2 rounded-lg" onClick={() => {
                                                setModals(!showModals)
                                            }}>Cancel</button>
                                        </div>
                                    </div>
                                </form>
                        }

                    </div>
                </dialog >
            }

        </div >
    );
};

export default UpdateProductsModal;