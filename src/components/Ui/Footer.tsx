
const Footer = () => {

    return (
        <div className="bg-gray-200">
            <div className="max-w-[1200px] mx-auto">
                <footer className="footer footer-center  text-base-content p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Fitness Club</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;