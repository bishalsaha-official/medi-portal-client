import { Link } from 'react-router-dom';
import banner from '../../../assets/Home/banner.jpg'
import doctor from '../../../assets/Home/doctor.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: ` url(${banner})`}} className="pt-28 bg-cover bg-no-repeat bg-center md:h-screen" >
            <div className='max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-bold mb-5 text-[#1B2A41]'>Your Best Medical Help Center</h1>
                    <p className='max-w-lg md:text-xl text-[#333333] mb-5'>MediPortal connects patients with trusted doctors through a secure and easy-to-use platform. Book appointments, access records, and manage your health anytime, anywhere.</p>
                    <button className='btn bg-[#1B2A41] border-0 text-white font-bold'>
                        <Link>All Service</Link>
                    </button>
                </div>
                <div className='flex justify-center md:justify-end mt-10'>
                    <img src={doctor} className='mt-36' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;