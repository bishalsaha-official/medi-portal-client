import SectionHeading from "../../../Shared/SectionHeading";
import Gastrology from '../../../assets/Services/Gastrology.png'
import Orthopedic from '../../../assets/Services/orthopedic.png'
import Gynecology from '../../../assets/Services/Gynecology.png'
import Neorology from '../../../assets/Services/Neorology.png'
import DentalCare from '../../../assets/Services/DentalCare.png'
import CosmeticSurgery from '../../../assets/Services/CosmeticSurgery.png'

const Services = () => {
    return (
        <div className="max-w-10/12 mx-auto my-10">
            <SectionHeading heading="Our Services" subHeading="Get access to expert medical care and services, all in one place. Your health, simplified and seamless."></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
                <div className="flex flex-col justify-center text-center p-5 shadow-sm shadow-[#aba7a5]">
                    <img src={Gastrology} className="w-28 mx-auto mb-5" alt="Gastrology" />
                    <h3 className="text-[3B3A3A] font-semibold text-xl">Gastrology</h3>
                </div>
                <div className="flex flex-col justify-center text-center p-5 shadow-sm shadow-[#aba7a5]">
                    <img src={Orthopedic} className="w-28 mx-auto mb-5" alt="Orthopedic" />
                    <h3 className="text-[3B3A3A] font-semibold text-xl">Orthopedic</h3>
                </div>
                <div className="flex flex-col justify-center text-center p-5 shadow-sm shadow-[#aba7a5]">
                    <img src={Gynecology} className="w-28 mx-auto mb-5" alt="Gynecology" />
                    <h3 className="text-[3B3A3A] font-semibold text-xl">Gynecology</h3>
                </div>
                <div className="flex flex-col justify-center text-center p-5 shadow-sm shadow-[#aba7a5]">
                    <img src={Neorology} className="w-28 mx-auto mb-5" alt="Neorology" />
                    <h3 className="text-[3B3A3A] font-semibold text-xl">Neorology</h3>
                </div>
                <div className="flex flex-col justify-center text-center p-5 shadow-sm shadow-[#aba7a5]">
                    <img src={DentalCare} className="w-28 mx-auto mb-5" alt="DentalCare" />
                    <h3 className="text-[3B3A3A] font-semibold text-xl">Dental Care</h3>
                </div>
                <div className="flex flex-col justify-center text-center p-5 shadow-sm shadow-[#aba7a5]">
                    <img src={CosmeticSurgery} className="w-28 mx-auto mb-5" alt="CosmeticSurgery" />
                    <h3 className="text-[3B3A3A] font-semibold text-xl">Cosmetic Surgery</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;