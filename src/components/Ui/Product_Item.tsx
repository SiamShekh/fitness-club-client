const Product_Item = () => {
    return (
        <div className="rounded-md relative bg-gray-200 p-3">
            <img src={"https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"} className="w-full h-[40vh] object-cover rounded-t-md" />
            <div className="my-3">
                <p className="text-xl font-roboto font-medium text-black text-center">Lorem, ipsum dolor.</p>
                <p className="text-xs opacity-75 text-black font-roboto font-medium text-center">Rating: 4.4</p>
                <p className="text-2xl my-5 font-roboto font-medium text-black text-center">$99</p>
                <p className="px-7 py-2 text-black font-poppin text-xl border-2 border-black text-center">View Details</p>

            </div>
        </div>
    );
};

export default Product_Item;