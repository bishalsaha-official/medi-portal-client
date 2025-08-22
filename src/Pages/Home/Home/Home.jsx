import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;