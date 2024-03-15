
const Header = () => {
    return (
        <div>
             <div className=" bg-[url(https://i.ibb.co/6R9T1Kf/Rectangle-1-5.png)] bg-no-repeat bg-cover bg-center text-center px-3 md:px-20 lg:px-52 py-32  space-y-5 md:space-y-9 rounded-[20px] mt-3 md:mt-12">
                <h1 className=" text-3xl md:text-5xl font-bold text-white">
                   Discover an exceptional cooking class tailored for you!
                </h1>
                <p className="text-[15px] md:text-[16px] text-white font-[400]">ndulge in our personalized cooking classes! Perfect for all skill levels, our expert-led sessions cater to your tastes and preferences. Unleash your culinary creativity and join us for a memorable cooking experience</p>
                <div>
                    <button className="btn md:px-8  mr-3 rounded-[30px] border-none bg-[#0BE58A]">Explore Now</button>
                    <button className="btn md:px-7 text-white bg-[#FFFFFF03] rounded-[30px]">Our Feedback</button>
                </div>
             </div>
        </div>
    );
};

export default Header;