import Loading from "../components/Ui/Loading";
import Product_Item from "../components/Ui/Product_Item";
import { useGetProductsListQuery } from "../reduxs/api/ProductEndpoints";

const Product = () => {
    const { data, isFetching } = useGetProductsListQuery(undefined);
    console.log(data);

    if (isFetching) {
        return <Loading />
    }
    return (
        <div>
            <div className="max-w-[1200px] mx-auto p-5">
                <div className="flex justify-between items-center my-5">
                    <p className="font-poppin text-black">{data?.data.length} items found</p>
                    <div>
                        <button className="border rounded-full px-7 py-2 border-black text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Filters</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {
                        data?.data.map((data: object, index: number) => <Product_Item data={data} key={index} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;