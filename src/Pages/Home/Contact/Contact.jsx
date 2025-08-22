import { FaClock } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="max-w-10/12 mx-auto my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="text-white flex items-center gap-5 bg-[#07332F] p-10 rounded-xl ">
                <h2 className="text-4xl font-bold"><FaClock></FaClock></h2>
                <div>
                    <h3 className="text-2xl font-bold">Opening Hours</h3>
                    <p className="text-xl">Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="text-white flex items-center gap-5 bg-[#F7A582] p-10 rounded-xl ">
                <h2 className="text-4xl font-bold"><FaLocationDot></FaLocationDot></h2>
                <div>
                    <h3 className="text-2xl font-bold">Our Locations</h3>
                    <p className="text-xl">Khulna 17, khulna -1200, Bangladesh</p>
                </div>
            </div>
            <div className="text-white flex items-center gap-5 bg-[#07332F] p-10 rounded-xl ">
                <h2 className="text-4xl font-bold"><FaPhoneVolume></FaPhoneVolume></h2>
                <div>
                    <h3 className="text-2xl font-bold">Contact Us</h3>
                    <p className="text-xl">+88 01750 00 00 00</p>
                    <p className="text-xl">+88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;