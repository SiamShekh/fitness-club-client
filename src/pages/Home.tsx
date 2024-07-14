import dumbbells from "../assets/image/dumbbells.webp";
import man_holding_dumbells from "../assets/image/man_holding_dumbells.webp";
import cube_icon from "../assets/icon/cube_icon.png";
import dumbbells_image from "../assets/image/dumbbells_image.png";
import cxercise_bike from "../assets/image/cxercise_bike.webp";
import Product_Item from "../components/Ui/Product_Item";

const Home = () => {
    return (
        <div className="px-5 pt-5 overflow-hidden">
            {/* Hero: Hero about the site */}
            <div className="">
                <div className="max-w-[1200px] md:h-[85vh] mx-auto flex items-center justify-between flex-col-reverse md:flex-row ">
                    <div className="flex-1 flex flex-col justify-center z-10">
                        <p className="text-center lg:text-start">
                            <span className="text-[#000] lg:text-7xl font-bold text-3xl font-teko">Find Your Fitness Journey at Our Store</span>
                            <span className="text-black lg:text-xl font-light text-xs font-roboto block">Discover a wide range of high-quality fitness equipment and accessories to help you achieve your goals.</span>
                        </p>
                        <div className="flex items-center gap-4 lg:justify-start justify-center">
                            <button className="lg:px-7 px-3 py-3 bg-black text-white lg:mx-0 w-fit rounded-lg font-roboto font-semibold text-xl mt-5">Explore</button>

                            <button className="lg:px-7 px-3 py-3 border-2 border-black text-black lg:mx-0 w-fit rounded-lg font-roboto font-semibold text-xl mt-5">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={dumbbells} className="w-full" />
                    </div>
                </div>
            </div>

            {/* Explore Our Wide Range of Fitness Products */}
            <div className="my-16 lg:my-0">
                <div className="lg:h-[85vh] max-w-[1200px] mx-auto">
                    <p className="lg:text-xl text-black font-poppin text-center">Discover</p>
                    <div className="lg:w-3/4 mx-auto my-2">
                        <p className="lg:text-4xl text-xl text-black font-medium font-poppin text-center">Explore Our Wide Range of Fitness Products</p>
                        <p className="lg:text-xl text-black font-poppin text-center">We offer a diverse selection of high-quality fitness equipment and accessories to help you achieve your fitness goals.</p>
                    </div>

                    <div className="flex justify-between items-center flex-col md:flex-row gap-5 mt-10">
                        <div className="flex items-center flex-col gap-2 text-center">
                            <img src={cube_icon} className="size-8" />
                            <p className="text-2xl font-poppin font-medium text-black">Cardio Equipment</p>
                            <p className="text-xs font-poppin text-black w-4/5">Find the perfect cardio equipment to elevate your workouts.</p>
                        </div>

                        <div className="flex items-center flex-col gap-2  text-center">
                            <img src={cube_icon} className="size-8" />
                            <p className="text-2xl font-poppin font-medium text-black">Strength Equipment</p>
                            <p className="text-xs font-poppin text-black w-4/5">Discover our range of strength training equipment for all fitness levels.</p>
                        </div>

                        <div className="flex items-center flex-col gap-2 text-center">
                            <img src={cube_icon} className="size-8" />
                            <p className="text-2xl font-poppin font-medium text-black">Fitness Accessories</p>
                            <p className="text-xs font-poppin text-black w-4/5">Enhance your workouts with our selection of fitness accessories.</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <p className="px-7 py-2 text-black font-poppin text-xl border-2 border-black">Shop</p>
                    </div>
                </div>
            </div>

            {/* Hero: our best selling products */}
            <div className="lg:h-screen">
                <div className="relative max-w-[1200px] mx-auto">

                    <div className="flex justify-between items-center">
                        <p className="text-3xl font-bold text-black font-roboto">Our Best Seller</p>
                        <p className="text-xs font-bold text-black font-roboto">View all</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5">
                        <Product_Item />
                        <Product_Item />
                        <Product_Item />
                        <Product_Item />
                    </div>

                </div>
            </div>

            {/* Hero: category */}
            <div className="mt-5 lg:mt-0">
                <div className="relative max-w-[1200px] mx-auto">

                    <div className="flex justify-between items-center mb-5">
                        <p className="text-3xl font-bold text-black font-roboto">Shop by category</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
                        <div className="relative w-full flex justify-center items-center h-[60vh]">
                            <p className="text-2xl font-poppin font-bold text-white z-10 text-center relative w-full">Dumbbells</p>
                            <img src={dumbbells_image} className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0" />
                            <div className="w-full h-full bg-gradient-to-t from-black to-transparent object-cover absolute top-0 left-0 z-0 right-0 bottom-0" />
                        </div>

                        <div className="relative w-full flex justify-center items-center h-[60vh]">
                            <p className="text-2xl font-poppin font-bold text-white z-10 text-center relative w-full">Dumbbells</p>
                            <img src={cxercise_bike} className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0" />
                            <div className="w-full h-full bg-gradient-to-t from-black to-transparent object-cover absolute top-0 left-0 z-0 right-0 bottom-0" />
                        </div>

                        <div className="relative w-full flex justify-center items-center h-[60vh]">
                            <p className="text-2xl font-poppin font-bold text-white z-10 text-center relative w-full">Dumbbells</p>
                            <img src={dumbbells_image} className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0" />
                            <div className="w-full h-full bg-gradient-to-t from-black to-transparent object-cover absolute top-0 left-0 z-0 right-0 bottom-0" />
                        </div>

                        <div className="relative w-full flex justify-center items-center h-[60vh]">
                            <p className="text-2xl font-poppin font-bold text-white z-10 text-center relative w-full">Dumbbells</p>
                            <img src={dumbbells_image} className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0" />
                            <div className="w-full h-full bg-gradient-to-t from-black to-transparent object-cover absolute top-0 left-0 z-0 right-0 bottom-0" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Image Gallery */}
            <div className="mt-10 max-w-[1200px] mx-auto z-0 relative lg:h-[85vh] h-[50vh] ">
                <div className="h-[20%]">
                    <p className="text-3xl font-roboto font-bold text-center text-black">Image Gallery</p>
                    <p className="text-xs font-roboto font-light text-center text-black">Explore our wide range of fitness equipment and accessories.</p>
                </div>

                <div className="flex justify-between items-center gap-2 overflow-hidden mt-5 relative h-[80%]">
                    <div className="flex-1 grid grid-cols-2 gap-2 h-full">
                        <img src="https://img.freepik.com/premium-photo/gym-with-black-floor-yellow-light-ceiling_899870-10360.jpg" alt="" className="flex-1 h-full object-cover" />
                        <img src="https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114221.jpg" alt="" className="flex-1 h-full object-cover" />
                        <img src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg" alt="" className="flex-1  col-span-2 object-cover w-full h-full" />

                    </div>
                    <div className="flex-1 h-full flex flex-col gap-2">
                        <div className="flex-1">
                            <img src="https://img.freepik.com/premium-photo/gym-with-lot-equipment-it_662214-439869.jpg" alt="" className="col-span-2 object-cover w-full flex-1 h-full" />
                        </div>
                        <div className="flex-1">
                            <img src="https://img.freepik.com/free-photo/bodybuilder-training-arm-with-resistance-band_7502-4758.jpg" alt="" className=" col-span-2 object-cover w-full flex-1 h-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefit Image */}

            <div className="z-10 relative mt-28 lg:mt-0">
                <div className="max-w-[1200px] md:h-screen mx-auto flex items-center justify-between flex-col md:flex-row ">
                    <div className="flex-1 flex flex-col justify-center z-10">
                        <p className="text-center lg:text-start">
                            <span className="text-[#000] lg:text-7xl font-bold text-3xl font-teko">Why need to do exercise</span>
                            <span className="text-black lg:text-xl font-light text-xs font-roboto block">Exercise boosts energy
                                Regular physical activity can improve your muscle strength and boost your endurance. Exercise sends oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.</span>
                        </p>
                        <div className="flex items-center gap-4 lg:justify-start justify-center">
                            <button className="lg:px-7 px-3 py-3 bg-black text-white lg:mx-0 w-fit rounded-lg font-roboto font-semibold text-xl mt-5">Explore</button>

                            <button className="lg:px-7 px-3 py-3 border-2 border-black text-black lg:mx-0 w-fit rounded-lg font-roboto font-semibold text-xl mt-5">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={man_holding_dumbells} className="w-screen" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;