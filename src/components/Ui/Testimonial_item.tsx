/* eslint-disable @typescript-eslint/no-explicit-any */

const Testimonial_item = ({image, name, role, description} : any) => {
    return (
        <div>
            <div className="w-96 h-60 mr-5 border border-black p-5 rounded-2xl backdrop-blur-2xl bg-gray-100 bg-opacity-30">
                <div className="flex gap-4 items-center">
                    <img src={image} className="size-10" />
                    <div className="flex flex-col">
                        <p className="text-black text-xl font-poppin font-bold">{name}</p>
                        <p className="text-black opacity-90">{role}</p>
                    </div>
                </div>
                <p className="text-black text-justify">{description}</p>
            </div>
        </div>
    );
};

export default Testimonial_item;