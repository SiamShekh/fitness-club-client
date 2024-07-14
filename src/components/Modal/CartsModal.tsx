
const CartsModal = () => {

    return (
        <div>
            <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-lg">Carts</h3>
                    <div className="py-4">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <img src="https://chaldn.com/_mpimage/taddy-bear-galice-soft-toy-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D84390&q=best&v=1" className="size-20" />
                            </div>
                            <div className="flex gap-5">
                                <div>
                                    <p className="font-roboto text-xl">Asgaard sofa</p>
                                    <p className="font-roboto text-xl">{"1 X "} <span className="text-blue-900">$55</span></p>
                                </div>
                                <button className="btn">X</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="">
                                <img src="https://chaldn.com/_mpimage/taddy-bear-galice-soft-toy-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D84390&q=best&v=1" className="size-20" />
                            </div>
                            <div className="flex gap-5">
                                <div>
                                    <p className="font-roboto text-xl">Asgaard sofa</p>
                                    <p className="font-roboto text-xl">{"1 X "} <span className="text-blue-900">$55</span></p>
                                </div>
                                <button className="btn">X</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="">
                                <img src="https://chaldn.com/_mpimage/taddy-bear-galice-soft-toy-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D84390&q=best&v=1" className="size-20" />
                            </div>
                            <div className="flex gap-5">
                                <div>
                                    <p className="font-roboto text-xl">Asgaard sofa</p>
                                    <p className="font-roboto text-xl">{"1 X "} <span className="text-blue-900">$55</span></p>
                                </div>
                                <button className="btn">X</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn  bg-blue-700 text-white">Checkout</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartsModal;