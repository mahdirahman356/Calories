import PropTypes from 'prop-types'; 

const AddCard = ({adding}) => {

    return (
        <div className="md:w-[40%] border-[1px] border-[#28282833] rounded-xl">
            <h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Want to cook: {adding.length} </h2>
            <div className="w-[60%] ml-14 flex text-[#878787] font-semibold">
              {/* <p className="mr-24">Name</p>
              <p className="mr-14">Time</p>
              <p className="mr-5">Calories</p> */}
            </div>
  
            <table className="w-[100%]">
            <tr> 
              <td></td>
              <td>Name</td>
              <td>Time</td>
              <td>Calories</td> 
              <td></td>
            </tr> 
          {adding.map((add,index) =>           
              <tr key={index} className="bg-[#28282808]"> 
             <td className="w-5"><div className="px-3">{index + 1}</div></td>
              <td>{add.name}</td>
              <td>{add.preparing_time}</td>
              <td>{add.calories}</td>
              <td><button className="btn border-none bg-[#0BE58A] rounded-[30px]">Preparing</button></td>
            </tr>
          )}
          </table>  

           {/* <div className="bg-[#28282808] flex justify-between items-center gap-8 p-2">
               <p>1</p>
               <p></p>
               <p>30 min</p>
               <p>450 calories</p>
               <button className="btn">Preparing</button>
           </div> */}

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