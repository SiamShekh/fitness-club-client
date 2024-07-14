import CartsModal from "../components/Modal/CartsModal";
import ImageGallerys from "../components/Ui/ImageGallery"
const Product_Details = () => {
    // const getId = useParams().id;

    return (
        <div className="max-w-[1200px] mx-auto my-10 p-5">
            <CartsModal />
            <div className="flex justify-between lg:flex-row flex-col gap-2 ">
                <div className="flex-1">
                    <ImageGallerys />
                </div>
                <div className="flex-1 lg:ml-10">
                    <p className="text-4xl font-poppin text-black font-bold">Ami</p>
                    <div className="flex items-center gap-3 mt-5">
                        <div className="font-roboto text-xl text-black">{"$55 | "}
                            <span>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </span>
                            <span>{"(3.5 stars) • 10 reviews"}</span>
                        </div>
                    </div>
                    <p className="line-clamp-2 text-black font-roboto mt-5">This is an example product description.</p>
                    <div className="flex md:items-center justify-between flex-col md:flex-row items-start">
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Category</p>
                            <p className="bg-black text-white px-8 py-2 w-fit mt-3">Electornic</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-[16px] text-black font-roboto">Quantity</p>
                            <div className="border-2 border-black px-4 py-2 w-fit">
                                <input type="number" placeholder="Quantity" className="text-black outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-2 w-full text-white mt-5 cursor-pointer">
                        <p className="text-center">Add to cart</p>
                    </div>
                    <div className=" p-2 w-full text-black border-2 border-black mt-5 cursor-pointer">
                        <p className="text-center">Buy Now</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xl text-black font-roboto">Description: </p>
                <p className="font-roboto text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at illum enim ipsa similique error ab repellendus sed! Ipsum laborum voluptas commodi aliquam minima tenetur quaerat a delectus facere, quae reiciendis rem repellat illum ullam voluptatum at nulla dolorem quisquam? Incidunt, temporibus. Facilis quasi aliquam natus cumque, pariatur ex nostrum iusto quae rerum, sapiente laborum nulla, eveniet consequuntur omnis necessitatibus quaerat autem provident impedit deserunt culpa assumenda incidunt quia? Vero impedit distinctio ipsum deserunt omnis quam necessitatibus rem nihil dignissimos, recusandae similique, laborum quidem nesciunt soluta quo vitae voluptatem placeat dolores rerum cum et nisi! Repellat consectetur exercitationem autem, quisquam nihil minima quae, fuga natus, maxime quasi eos? Tenetur consequuntur corporis numquam totam labore illo natus nihil distinctio impedit reiciendis temporibus, culpa, magnam amet nesciunt iusto dolorem pariatur mollitia. Dolores ducimus accusamus sit facilis temporibus sequi saepe, molestias atque aperiam libero cupiditate enim harum corrupti vel magnam dignissimos? Laudantium suscipit veniam iure quae ipsam repudiandae odit explicabo eius non optio, sint dolores? Voluptatum, natus consequatur commodi obcaecati veniam quas eveniet ullam sapiente aliquid dolorum perspiciatis. Qui odio voluptas in incidunt a voluptatum neque dolorem odit eum praesentium consequuntur ipsa, repellat velit maiores, iusto, cum inventore. Ipsum inventore magnam dolorem cumque.</p>
            </div>
        </div>
    );
};

export default Product_Details;