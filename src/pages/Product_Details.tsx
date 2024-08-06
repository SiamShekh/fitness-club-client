import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useGetSingleProductsQuery } from "../reduxs/api/ProductEndpoints";
import Loading from "../components/Ui/Loading";
import { useDispatch } from "react-redux";
import { CreateNewCart } from "../reduxs/slice/CartsSlice";
import { useState } from "react";
const Product_Details = () => {
    const getId = useParams().id;
    const { data, isFetching } = useGetSingleProductsQuery(getId);
    const dispatch = useDispatch();
    const [Quantity, setQuantity] = useState(0);
    const images = [];

    for (let index = 0; index < data?.data?.image?.length; index++) {
        const element = data?.data.image[index];
        images.push({
            original: element,
            thumbnail: element
        })
    }

    if (isFetching) {
        return <Loading />
    }
    return (
        <div className="max-w-[1200px] mx-auto my-10 p-5">
            <div className="flex justify-between lg:flex-row flex-col gap-2 ">
                <div className="flex-1">
                    <ImageGallery items={images} showThumbnails={true} thumbnailPosition="left" showNav={false} showPlayButton={false} showFullscreenButton={false} />

                </div>
                <div className="flex-1 lg:ml-10">
                    <p className="text-4xl font-poppin text-black font-bold">{data?.data?.name}</p>
                    <div className="flex items-center gap-3 mt-5">
                        <div className="font-roboto text-4xl text-black">${data?.data?.price}</div>
                    </div>
                    <p className="line-clamp-2 text-black font-roboto mt-5">{data?.data?.description}</p>
                    <div className="flex md:items-center justify-between flex-col md:flex-row items-start">
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Category</p>
                            <p className="bg-black text-white px-8 py-2 w-fit mt-3">{data?.data?.category}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Quantity</p>
                            <div className="border-2 border-black px-4 py-2 w-fit">
                                <input type="number" value={Quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" className="text-black outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-2 w-full text-white mt-5 cursor-pointer">
                        {
                            Quantity ?
                                <p className="text-center" onClick={() => {
                                    dispatch(CreateNewCart({
                                        ...data.data,
                                        Quantity
                                    }))
                                }}>Add to cart</p>
                                :
                                <p className="text-center">Add a quantity</p>
                        }

                    </div>
                    <div className=" p-2 w-full text-black border-2 border-black mt-5 cursor-pointer">
                        <p className="text-center">Buy Now</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xl text-black font-roboto">Description: </p>
                <p className="font-roboto text-black">{data?.data?.description}</p>
            </div>
        </div>
    );
};

export default Product_Details;