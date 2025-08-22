import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="max-w-10/12 mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#07332F] rounded-2xl p-10 md:p-20">
            <div className="text-white">
                <h2 className="text-3xl font-bold mb-3">Contact With Us</h2>
                <p className="max-w-96 my-10">Need help booking an appointment or finding the right doctor? Contact us today and we’ll assist you right away</p>
                <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold"><FaLocationDot></FaLocationDot></h2>
                    <p className="">Khulna 17, khulna -1200, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold"><FaPhoneVolume></FaPhoneVolume></h2>
                    <p className="">+88 01750 00 00 00</p>
                </div>
            </div>
            <div>
                <form>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="input p-6 bg-[#133D39] text-white" />
                        <input type="email" placeholder="Email" className="input p-6 bg-[#133D39] text-white" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 my-5">
                        <input type="number" placeholder="Mobile Number" className="input p-6 bg-[#133D39] text-white" />
                        <input type="text" placeholder="Doctor Name" className="input p-6 bg-[#133D39] text-white" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="date" className="input p-6 bg-[#133D39] text-white" />
                        <input type="time" className="input p-6 bg-[#133D39] text-white" />
                    </div>
                    <div>
                        <input className="btn bg-[#F7A582] w-full mt-5 text-white font-bold border-0" type="submit" value="Book Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;