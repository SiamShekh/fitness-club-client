import { useDispatch, useSelector } from "react-redux";
import { carts } from "../../reduxs/slice/CartsShowSlice";
import { AppRoot } from "../../reduxs/store/Store";
import { Link } from "react-router-dom";
import { TCartSlice } from "../interface/interface";
import { RemoveSingleCarts } from "../../reduxs/slice/CartsSlice";

const CartsModal = () => {
    const dispatch = useDispatch();
    const show_carts = useSelector((state: AppRoot) => state.Carts.show_carts);
    const cart = useSelector((state: AppRoot) => state.persistedCart.cart)
    return (
        <div>
            <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black border-black border-2">
                    <h3 className="font-bold text-lg">Carts</h3>
                    {
                        cart?.map((item: TCartSlice, index) => <div className="py-4">
                            <div className="flex items-center justify-between" key={index}>
                                <div className="">
                                    <img src={item.thumbnails} className="size-20 rounded-md" />
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <p className="font-roboto text-xl">{item?.name}</p>
                                        <p className="font-roboto text-xl">{item?.quantity} X <span className="text-blue-900">${item?.price}</span></p>
                                    </div>
                                    <button className="btn" onClick={()=> {
                                        dispatch(RemoveSingleCarts(item._id))
                                    }}>X</button>
                                </div>
                            </div>
                        </div>)
                    }

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={'/checkout'} onClick={() => dispatch(carts(false))} className="btn  bg-blue-700 text-white">Checkout</Link>
                            <button className="btn" onClick={() => dispatch(carts(false))}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartsModal;