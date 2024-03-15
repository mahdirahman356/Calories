import PropTypes from 'prop-types'; 

const AddCard = ({adding}) => {
    console.log(adding)
    return (
        <div className="md:w-[40%] border-[1px] border-[#28282833] rounded-xl">
            <h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Want to cook: </h2>
            <div className="w-[60%] ml-14 flex justify-between text-[#878787] font-semibold">
              <p className="">Name</p>
              <p className="">Time</p>
              <p className="">Calories</p>
            </div>

           <div className="bg-[#28282808] flex justify-between gap-8 p-2">
               <p>1</p>
               <p>Pepperoni Pizza</p>
               <p>30 min</p>
               <p>450 calories</p>
               <button className="btn">Preparing</button>
           </div>

            <h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Currently cooking:</h2>
            <div className="w-[80%] mx-auto flex justify-between text-[#878787] font-semibold">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
        </div>
    );
};

 AddCard.propTypes={
    adding: PropTypes.array.isRequired
 }
export default AddCard;