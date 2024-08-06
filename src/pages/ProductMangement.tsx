import { FaPlus } from "react-icons/fa";
import CreateProductsModal from "../components/Modal/CreateProductsModal";
import { useState } from "react";
import { useDeleteProductsMutation, useGetProductsFilterListQuery } from "../reduxs/api/ProductEndpoints";
import Loading from "../components/Ui/Loading";
import { TProducts } from "../components/interface/interface";
import UpdateProductsModal from "../components/Modal/UpdateProductsModal";
const ProductMangement = () => {
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
    const [openUpdateProductModal, setOpenUpdateProductModal] = useState(false);
    const [ProductId, setProductId] = useState("");
    const [searchTerm, setsearchTerm] = useState("");

    const params = {
        name: searchTerm
    }
    const { data, isFetching } = useGetProductsFilterListQuery(params);
    const [DeleteTrigger] = useDeleteProductsMutation();

    if (isFetching) {
        return <Loading />
    }
    return (
        <div className="max-w-[1200px] mx-auto relative min-h-[85vh]">

            <div className="flex justify-between items-center flex-col md:flex-row px-5 my-5">
                <p className="font-poppin text-black">{data?.data?.length} items found</p>
                <div>
                    <input type="text" className="border rounded-full px-7 py-2 border-black text-black" name="search" id="search" placeholder="Search" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
                </div>
            </div>

            <div className="overflow-x-auto">
                {
                    data?.data?.length ?
                        <table className="table text-black">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data?.data?.map((item: TProducts, index: number) =>
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.category}</td>
                                            <td className="">
                                                <button className="bg-green-500 w-fit px-5 mr-3 py-2 rounded-lg font-poppin" onClick={() => {
                                                    setProductId(item?._id);
                                                    setOpenUpdateProductModal(!openUpdateProductModal)
                                                }}>Update</button>
                                                <button className="bg-red-500 px-5 py-2 rounded-lg font-poppin w-fit" onClick={() => DeleteTrigger(item?._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                        :
                        <p className=" text-2xl w-full text-center text-black mt-5">No Data founds, please add new data</p>
                }
            </div>

            {
                openCreateProductModal &&
                <CreateProductsModal setModals={setOpenCreateProductModal} showModals={openCreateProductModal} />
            }
            {
                openUpdateProductModal &&
                <UpdateProductsModal _id={ProductId} setModals={setOpenUpdateProductModal} showModals={openUpdateProductModal} />
            }
            <div className="absolute bottom-5 right-5 lg:bottom-10 lg:right-0 cursor-pointer tooltip  tooltip-top" data-tip="Create New Product" onClick={() => setOpenCreateProductModal(!openCreateProductModal)}>
                <FaPlus className="text-black text-6xl bg-green-500 rounded-full p-3" />
            </div>
        </div>
    );
};

export default ProductMangement;