import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateOrderMutation } from "../reduxs/api/OrderEndpoints";
import { Link } from "react-router-dom";

const Checkouts = () => {
    const [billing, setBilling] = useState(false);
    const { register, handleSubmit } = useForm();
    const [triggerCheckout] = useCreateOrderMutation();
    const [isComepelete, setComepelete] = useState(false);
    const HandleCheckOut = async (e) => {
        const payload = {
            name: e.name,
            email: e.email,
            phone: e.phone,
            shiping: {
                street_address: e.shipping_address,
                city: e.shipping_city,
                state: e.shipping_state,
                postal: e.shipping_postal,
                country: e.shipping_country
            },
            billing: {
                street_address: e.billing_address || e.shipping_address,
                city: e.billing_city || e.shipping_city,
                state: e.billing_state || e.shipping_state,
                postal: e.billing_postal || e.shipping_postal,
                country: e.billing_country || e.shipping_country
            }
        }
        await triggerCheckout(payload);
        setComepelete(true);
    }

    return (
        <div className="max-w-[1200px] mx-auto py-10">
            {
                isComepelete &&
                <dialog id="my_modal_1" open className="modal">
                    <div className="modal-box border border-black bg-transparent backdrop-blur-lg bg-white bg-opacity-10 text-black">
                        <h3 className="font-bold text-lg">Order Created!</h3>
                        <p className="py-4">New Order was created and stored the data into database.</p>
                        <Link to={'/products'} className="border border-black rounded-xl bg-opacity-40 backdrop-blur-sm px-5 py-2">Close</Link>
                    </div>
                </dialog>
            }
            <form onSubmit={handleSubmit(HandleCheckOut)}>
                <div className="my-3">
                    <p className="text-2xl font-poppin font-bold text-black">Personal Information</p>

                    <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
                        <label className="form-control w-full flex-1 mx-auto">
                            <div className="label">
                                <span className="label-text">What is your Full Name?</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>


                                <input type="text" placeholder="Full Name" {...register('name', { required: true })} className="grow" />
                            </label>
                        </label>

                        <label className="form-control w-full flex-1">
                            <div className="label">
                                <span className="label-text">What is your email address?</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>



                                <input type="text" placeholder="Email Address" {...register('email', { required: true })} className="grow" />
                            </label>
                        </label>

                        <label className="form-control w-full flex-1">
                            <div className="label">
                                <span className="label-text">What is your phone number?</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>



                                <input type="number" placeholder="Phone Number" {...register('phone', { required: true })} className="grow" />
                            </label>
                        </label>
                    </div>
                </div>

                <div className="my-3">
                    <p className="text-2xl font-poppin font-bold text-black">Shipping Information</p>
                    <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
                        <label className="form-control w-full flex-1 mx-auto">
                            <label className="input input-bordered flex items-center gap-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
                                    <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
                                </svg>

                                <input type="text" placeholder="Street Address" {...register('shipping_address', { required: true })} className="grow" />
                            </label>
                        </label>

                        <label className="form-control w-full flex-1">

                            <label className="input input-bordered flex items-center gap-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M7.605 2.112a.75.75 0 0 1 .79 0l5.25 3.25A.75.75 0 0 1 13 6.707V12.5h.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H3V6.707a.75.75 0 0 1-.645-1.345l5.25-3.25ZM4.5 8.75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 8a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 8 8Zm2 .75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                                </svg>

                                <input type="text" placeholder="City" {...register('shipping_city', { required: true })} className="grow" />
                            </label>
                        </label>

                        <label className="form-control w-full flex-1">

                            <label className="input input-bordered flex items-center gap-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M3.75 2a.75.75 0 0 0 0 1.5H4v9h-.25a.75.75 0 0 0 0 1.5H6a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 0 0-1.5H12v-9h.25a.75.75 0 0 0 0-1.5h-8.5ZM6.5 4a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 7 4h-.5ZM6 7a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 7 8h-.5a.5.5 0 0 1-.5-.5V7Zm3-3a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5h.5A.5.5 0 0 0 10 5v-.5a.5.5 0 0 0-.5-.5H9Zm-.5 3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V7Z" clipRule="evenodd" />
                                </svg>

                                <input type="text" {...register('shipping_state', { required: true })} placeholder="State/Province/Region" className="grow" />
                            </label>
                        </label>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
                            <label className="form-control w-full flex-1 mx-auto">
                                <label className="input input-bordered flex items-center gap-2 text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034-4.81-2.748ZM14 5.357 8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11V5.357ZM7.25 14.435V8.43L2 5.357V11c0 .27.144.518.378.651l4.872 2.784Z" />
                                    </svg>


                                    <input type="text" placeholder="Postal/ZIP Code" {...register('shipping_postal', { required: true })} className="grow" />
                                </label>
                            </label>

                            <label className="form-control w-full flex-1">

                                <label className="input input-bordered flex items-center gap-2 text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path d="M7.702 1.368a.75.75 0 0 1 .597 0c2.098.91 4.105 1.99 6.004 3.223a.75.75 0 0 1-.194 1.348A34.27 34.27 0 0 0 8.341 8.25a.75.75 0 0 1-.682 0c-.625-.32-1.262-.62-1.909-.901v-.542a36.878 36.878 0 0 1 2.568-1.33.75.75 0 0 0-.636-1.357 38.39 38.39 0 0 0-3.06 1.605.75.75 0 0 0-.372.648v.365c-.773-.294-1.56-.56-2.359-.8a.75.75 0 0 1-.194-1.347 40.901 40.901 0 0 1 6.005-3.223ZM4.25 8.348c-.53-.212-1.067-.411-1.611-.596a40.973 40.973 0 0 0-.418 2.97.75.75 0 0 0 .474.776c.175.068.35.138.524.21a5.544 5.544 0 0 1-.58.681.75.75 0 1 0 1.06 1.06c.35-.349.655-.726.915-1.124a29.282 29.282 0 0 0-1.395-.617A5.483 5.483 0 0 0 4.25 8.5v-.152Z" />
                                        <path d="M7.603 13.96c-.96-.6-1.958-1.147-2.989-1.635a6.981 6.981 0 0 0 1.12-3.341c.419.192.834.393 1.244.602a2.25 2.25 0 0 0 2.045 0 32.787 32.787 0 0 1 4.338-1.834c.175.978.315 1.969.419 2.97a.75.75 0 0 1-.474.776 29.385 29.385 0 0 0-4.909 2.461.75.75 0 0 1-.794 0Z" />
                                    </svg>


                                    <input type="text" placeholder="Country" {...register('shipping_country', { required: true })} className="grow" />
                                </label>
                            </label>

                        </div>
                    </div>
                </div>

                <div className="my-3">
                    <p className="text-2xl font-poppin font-bold text-black">Billing Information</p>

                    <div className="form-control my-5">
                        <label className="label cursor-pointer flex-row-reverse w-fit gap-4">
                            <span className="label-text">Same address as the shipping address</span>
                            <input type="checkbox" onChange={(e) => setBilling(e.target.checked)} checked={billing} />
                        </label>
                    </div>
                    {
                        !billing &&
                        <div>
                            <div className={`flex items-center justify-between gap-5 flex-col md:flex-row`}>
                                <label className="form-control w-full flex-1 mx-auto">
                                    <label className="input input-bordered flex items-center gap-2 text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                            <path fillRule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
                                            <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
                                        </svg>

                                        <input type="text" {...register('billing_street', { required: true })} placeholder="Street Address" className="grow" />
                                    </label>
                                </label>

                                <label className="form-control w-full flex-1">

                                    <label className="input input-bordered flex items-center gap-2 text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                            <path fillRule="evenodd" d="M7.605 2.112a.75.75 0 0 1 .79 0l5.25 3.25A.75.75 0 0 1 13 6.707V12.5h.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H3V6.707a.75.75 0 0 1-.645-1.345l5.25-3.25ZM4.5 8.75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 8a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 8 8Zm2 .75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                                        </svg>

                                        <input type="text" {...register('billing_city', { required: true })} placeholder="City" className="grow" />
                                    </label>
                                </label>

                                <label className="form-control w-full flex-1">

                                    <label className="input input-bordered flex items-center gap-2 text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                            <path fillRule="evenodd" d="M3.75 2a.75.75 0 0 0 0 1.5H4v9h-.25a.75.75 0 0 0 0 1.5H6a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 0 0-1.5H12v-9h.25a.75.75 0 0 0 0-1.5h-8.5ZM6.5 4a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 7 4h-.5ZM6 7a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 7 8h-.5a.5.5 0 0 1-.5-.5V7Zm3-3a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5h.5A.5.5 0 0 0 10 5v-.5a.5.5 0 0 0-.5-.5H9Zm-.5 3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V7Z" clipRule="evenodd" />
                                        </svg>

                                        <input type="text" {...register('billing_state', { required: true })} placeholder="State/Province/Region" className="grow" />
                                    </label>
                                </label>
                            </div>
                            <div className="mt-3">
                                <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
                                    <label className="form-control w-full flex-1 mx-auto">
                                        <label className="input input-bordered flex items-center gap-2 text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                                <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034-4.81-2.748ZM14 5.357 8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11V5.357ZM7.25 14.435V8.43L2 5.357V11c0 .27.144.518.378.651l4.872 2.784Z" />
                                            </svg>


                                            <input type="text" {...register('billing_postal', { required: true })} placeholder="Postal/ZIP Code" className="grow" />
                                        </label>
                                    </label>

                                    <label className="form-control w-full flex-1">

                                        <label className="input input-bordered flex items-center gap-2 text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                                <path d="M7.702 1.368a.75.75 0 0 1 .597 0c2.098.91 4.105 1.99 6.004 3.223a.75.75 0 0 1-.194 1.348A34.27 34.27 0 0 0 8.341 8.25a.75.75 0 0 1-.682 0c-.625-.32-1.262-.62-1.909-.901v-.542a36.878 36.878 0 0 1 2.568-1.33.75.75 0 0 0-.636-1.357 38.39 38.39 0 0 0-3.06 1.605.75.75 0 0 0-.372.648v.365c-.773-.294-1.56-.56-2.359-.8a.75.75 0 0 1-.194-1.347 40.901 40.901 0 0 1 6.005-3.223ZM4.25 8.348c-.53-.212-1.067-.411-1.611-.596a40.973 40.973 0 0 0-.418 2.97.75.75 0 0 0 .474.776c.175.068.35.138.524.21a5.544 5.544 0 0 1-.58.681.75.75 0 1 0 1.06 1.06c.35-.349.655-.726.915-1.124a29.282 29.282 0 0 0-1.395-.617A5.483 5.483 0 0 0 4.25 8.5v-.152Z" />
                                                <path d="M7.603 13.96c-.96-.6-1.958-1.147-2.989-1.635a6.981 6.981 0 0 0 1.12-3.341c.419.192.834.393 1.244.602a2.25 2.25 0 0 0 2.045 0 32.787 32.787 0 0 1 4.338-1.834c.175.978.315 1.969.419 2.97a.75.75 0 0 1-.474.776 29.385 29.385 0 0 0-4.909 2.461.75.75 0 0 1-.794 0Z" />
                                            </svg>


                                            <input type="text" {...register('billing_country', { required: true })} placeholder="Country" className="grow" />
                                        </label>
                                    </label>

                                </div>
                            </div>
                        </div>
                    }
                </div>

                <button className="w-full bg-black text-white p-3 skew-x-12" type="submit">Checkouts</button>
            </form>
        </div>
    );
};

export default Checkouts;