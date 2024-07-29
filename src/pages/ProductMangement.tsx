import { FaPlus } from "react-icons/fa";
import CreateProductsModal from "../components/Modal/CreateProductsModal";
import { useState } from "react";
const ProductMangement = () => {
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);

    return (
        <div className="max-w-[1200px] mx-auto relative min-h-[85vh]">
            <div className="overflow-x-auto">
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton Lorem ipsum dolor sit amet.</td>
                            <td>$45</td>
                            <td>Food</td>
                            <td className="">
                                <button className="bg-green-500 w-fit px-5 mr-3 py-2 rounded-lg font-poppin">Update</button>
                                <button className="bg-red-500 px-5 py-2 rounded-lg font-poppin w-fit">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {
                openCreateProductModal &&
                <CreateProductsModal setModals={setOpenCreateProductModal} showModals={openCreateProductModal}/>
            }
            <div className="absolute bottom-5 right-5 lg:bottom-10 lg:right-0 cursor-pointer tooltip  tooltip-top" data-tip="Create New Product" onClick={() => setOpenCreateProductModal(!openCreateProductModal)}>
                <FaPlus className="text-black text-6xl bg-green-500 rounded-full p-3" />
            </div>
        </div>
    );
};

export default ProductMangement;