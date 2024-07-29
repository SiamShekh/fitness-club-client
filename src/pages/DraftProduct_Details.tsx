import { useSelector } from "react-redux";
import { AppRoot } from "../reduxs/store/Store";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const DraftProduct_Details = () => {
    const ReduxProducts = useSelector((state: AppRoot) => state.persistedProduct);
    
    const images = [];
    for (let index = 0; index < ReduxProducts.image.length; index++) {
        const element = ReduxProducts.image[index];
        images.push({
            original: element,
            thumbnail: element
        })
    }
    console.log(images);

    return (
        <div className="max-w-[1200px] mx-auto my-10 p-5 relative">
            <div className="flex justify-between lg:flex-row flex-col gap-2 ">
                <div className="flex-1">
                    <ImageGallery items={images} showThumbnails={true} thumbnailPosition="left" showNav={false} showPlayButton={false} showFullscreenButton={false} />
                </div>

                <div className="flex-1 lg:ml-10">
                    <p className="text-4xl font-poppin text-black font-bold">{ReduxProducts.name}</p>

                    <div className="flex md:items-center justify-between flex-col md:flex-row items-start">
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Category</p>
                            <p className="bg-black text-white px-8 py-2 w-fit mt-3">{ReduxProducts.category}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Price</p>
                            <div className="border-2 border-black px-4 py-2 w-fit">
                                <input readOnly type="text" value={`$${ReduxProducts.price}`} className="text-black outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="flex md:items-center justify-between flex-col md:flex-row items-start">
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Discount</p>
                            <p className="bg-black text-white px-8 py-2 w-fit mt-3">{ReduxProducts.discount}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Stock</p>
                            <div className="border-2 border-black px-4 py-2 w-fit">
                                <input readOnly type="text" value={ReduxProducts.stock} className="text-black outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-black p-2 w-full text-white mt-5 cursor-pointer">
                        <p className="text-center">Add the products</p>
                    </div>

                </div>
            </div>
            
            <div>
                <p className="text-xl text-black font-roboto">Description: </p>
                <p className="font-roboto text-black w-fit">{ReduxProducts.description}</p>
            </div>
        </div>
    );
};

export default DraftProduct_Details;