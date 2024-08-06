import { Link } from "react-router-dom";
import animated_workout from "../assets/image/animated_workout.webp";
import dumbbells from "../assets/image/dumbbells_3d icon.webp";
import Marquee from "react-fast-marquee";
import Testimonial_item from "../components/Ui/Testimonial_item";

const About = () => {
    const review = [
        {
            "image": "https://annemariesegal.com/wp-content/uploads/2017/06/img_0422-linkedin-size-smiling-man-in-suit.png?w=640",
            "name": "John Doe",
            "role": "Weightlifting",
            "description": "John dedicated himself to a rigorous weightlifting regimen, pushing his limits every day. His transformation is a testament to his hard work and determination, achieving incredible strength and physique."
        },
        {
            "image": "https://st.depositphotos.com/1017986/4933/i/450/depositphotos_49331663-stock-photo-smiling-businessman.jpg",
            "name": "Jane Smith",
            "role": "Yoga",
            "description": "Jane committed to a daily yoga practice, embracing both the physical and mental challenges. Her perseverance has led to significant improvements in flexibility, balance, and overall well-being."
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEODLpIAAbyykC0sf-tAcP2zM8dDWU7sMA&s",
            "name": "Alice Johnson",
            "role": "Running",
            "description": "Alice started with short runs and gradually increased her distance and speed. Her relentless effort and consistency have resulted in remarkable endurance and a healthier lifestyle."
        },
        {
            "image": "https://st2.depositphotos.com/1144472/5393/i/450/depositphotos_53935749-stock-photo-portrait-of-happy-smiling-businessman.jpg",
            "name": "Bob Brown",
            "role": "CrossFit",
            "description": "Bob immersed himself in the intense world of CrossFit, constantly challenging his physical limits. His hard work and dedication have drastically improved his strength, agility, and overall fitness."
        }
    ];

    return (
        <div className="max-w-[1200px] min-h-screen mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={animated_workout}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="text-4xl text-black font-semibold font-poppin">Funded at 1947</p>
                        <p className="text-black font-poppin">{"To be a healthy man, consistent and rigorous exercise is essential. Physical activity plays a crucial role in maintaining overall health and well-being. Engaging in regular exercise helps to strengthen the cardiovascular system, improving heart health and circulation. It also aids in building and maintaining muscle mass, which is vital for physical strength and metabolic efficiency. Additionally, exercise is a powerful tool for weight management, helping to burn calories and reduce body fat. \n\n Hard exercise, such as high-intensity interval training (HIIT), weightlifting, and endurance sports, pushes the body to adapt and improve. This intense physical exertion increases stamina, enhances muscle tone, and boosts energy levels. Moreover, rigorous workouts stimulate the release of endorphins, the body's natural mood elevators, reducing stress, anxiety, and depression. \n\n Incorporating a variety of exercises ensures balanced development and reduces the risk of injury. Combining aerobic activities with strength training and flexibility exercises promotes overall fitness. However, it's essential to listen to your body and avoid overtraining. Proper nutrition, hydration, and adequate rest are critical to support the body's recovery and growth. \n\n Ultimately, dedication to a hard exercise routine leads to improved physical health, mental clarity, and a higher quality of life, making it a cornerstone of a healthy lifestyle for men."}</p>
                    </div>
                </div>
            </div>

            <Marquee
                gradientColor="#FFFFFF"
                gradientWidth={200}
                direction="left"
                gradient
            >
                {
                    review.map(item =>
                        <Testimonial_item name={item.name} description={item.description} image={item.image} role={item.role} key={item.name} />
                    )
                }


            </Marquee>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={dumbbells}
                        className="max-w-sm rounded-lg " />
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="phone" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <Link to={`mailto:admin@fitness.club?subject=help%20for%20fitness%20issues&body=email%20example@example.com%0Aphone%201234567890
`} className="btn btn-primary">Contact</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;