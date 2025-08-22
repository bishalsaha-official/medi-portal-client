const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className='text-center my-5'>
            <h2 className="text-3xl font-bold text-[#0A0808] mb-3">{heading}</h2>
            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;