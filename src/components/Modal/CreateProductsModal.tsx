import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UploadImage from "../../utils/UploadImage";
import { useDispatch } from "react-redux";
import { createProducts } from "../../reduxs/slice/CreateProductSlice";
import { useNavigate } from "react-router-dom";


interface ProductsModalProps {
    showModals: boolean,
    setModals: (value: boolean) => void
}

const CreateProductsModal: React.FC<ProductsModalProps> = ({ showModals, setModals }) => {
    const [formLoading, setFormLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const naviagte = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateNewProducts = async (data: any) => {
        try {
            setFormLoading(true);

            const thumnails = await UploadImage(data.thumnail[0]);
            const imageUrlArray = [];
            const img = data.image;
            for (let index = 0; index < img.length; index++) {
                const imgFile = img[index];
                const imageUrl = await UploadImage(imgFile);
                await imageUrlArray.push(imageUrl);
            }

            const payloads = await {
                ...data,
                image: imageUrlArray,
                thumnail: thumnails
            }
            dispatch(createProducts(payloads));
        } catch (error) {
            console.error(error);
            setFormLoading(false);
        } finally {
            setFormLoading(false);
            naviagte('/manegement/draft')
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
                                        <input type="text" {...register("name", { required: true })} className="grow outline-none" placeholder={"Dumbblee"} />
                                    </label>

                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.price ? "bg-red-500" : ""}`}>
                                        Price
                                        <input autoComplete="off" autoCorrect="off" type="number" {...register("price", { required: true })} className="grow outline-none" placeholder={"$35"} />
                                    </label>

                                    <label className={`form-control w-full `}>
                                        <div className="label">
                                            <span className="label-text">Pick one category</span>
                                        </div>
                                        <select {...register("category", {
                                            required: true, validate: {
                                                notDefault: (value) => value !== "Pick one" || "Please select a category"
                                            }
                                        })} defaultValue={"Pick one"} className={`select select-bordered ${errors?.category ? "bg-red-500" : ""}`}>
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
                                        <textarea className={`${errors?.description ? "bg-red-500" : ""} textarea textarea-bordered h-24`} {...register("description", { required: true })} placeholder="description"></textarea>
                                    </label>

                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.discount ? "bg-red-500" : ""}`}>
                                        Discount
                                        <input type="number" {...register("discount", { required: false })} className="grow outline-none" placeholder="10%" />
                                    </label>

                                    <label className={`input input-bordered mt-3 flex items-center gap-2 ${errors?.stock ? "bg-red-500" : ""}`}>
                                        Stock
                                        <input type="number" {...register("stock", { required: true, valueAsNumber: true })} className="grow outline-none" placeholder="888" />
                                    </label>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Pick a thumbnails</span>
                                        </div>
                                        <input type="file" {...register("thumnail", { required: true })} className={`file-input file-input-bordered w-full  ${errors?.thumnail ? "bg-red-500" : ""}`} />
                                    </label>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Pick some images of products</span>
                                        </div>
                                        <input type="file" {...register("image", { required: true })} multiple className={`file-input file-input-bordered w-full  ${errors?.stock ? "bg-red-500" : ""}`} />
                                    </label>

                                    <div className="modal-action">
                                        <div >
                                            <button className=" bg-green-500 px-5 py-2 rounded-lg mr-3" type="submit">Create</button>
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

export default CreateProductsModal;