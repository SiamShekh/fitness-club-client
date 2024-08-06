import { Link } from "react-router-dom";


export interface TProducts {
    data: {
        _id: string,
        name: string,
        price: string,
        category: string,
        description: string,
        review?: [
            string
        ],
        discount: number,
        stock: number,
        thumnail: string,
        image: [string],
        isDelete: boolean
    }
}

const Product_Item = ({ data }: TProducts) => {

    return (
        <div className="rounded-md relative bg-gray-200 p-3">
            <img src={data?.thumnail} className="w-full h-[40vh] object-cover rounded-t-md" />
            <div className="my-3">
                <p className="text-xl font-roboto font-medium text-black text-center">{data?.name}</p>
                <p className="text-2xl my-5 font-roboto font-medium text-black text-center">${data?.price}</p>
                <p className="px-7 py-2 text-black font-poppin text-xl border-2 border-black text-center"><Link to={`/products/${data?._id}`} >View Details</Link></p>
            </div>
        </div>
    );
};

export default Product_Item;