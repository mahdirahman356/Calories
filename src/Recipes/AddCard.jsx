
const AddCard = () => {
    return (
        <div className="md:w-[40%] border-[1px] border-[#28282833] rounded-xl">
            <h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Want to cook: </h2>
            <div className="w-[80%] mx-auto flex justify-between text-[#878787]">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
        </div>
    );
};

export default AddCard;