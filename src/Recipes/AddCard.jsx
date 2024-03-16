import PropTypes from 'prop-types'; 
import AddCurrently from './AddCurrently';
const AddCard = ({adding,hendlePreparing,preparing,totalTime,totalCalories}) => {

    return (
        <div className="md:w-[40%] border-[1px] border-[#28282833] rounded-xl">
            <h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Want to cook: {adding.length}</h2>
  
            <table className="w-[100%]">
            <tr className="text-center"> 
              <td></td>
              <td>Name</td>
              <td>Time</td>
              <td>Calories</td> 
              <td></td>
            </tr> 
          {adding.map((add,index) =>           
              <tr key={index} className="bg-[#28282808] text-center"> 
             <td className="w-5"><div className="px-3">{index + 1}</div></td>
              <td>{add.name}</td>
              <td>{add.preparing_time} min</td>
              <td>{add.calories} calories</td>
              <td><button onClick={()=>hendlePreparing(add,add.preparing_time,add.calories)} className=" btn border-none bg-[#0BE58A] rounded-[30px]">Preparing</button></td>
            </tr>
          )}
          </table>  
          <AddCurrently preparing ={preparing} totalTime={totalTime} totalCalories={totalCalories}></AddCurrently>
           
        </div>
    );
};

 AddCard.propTypes={
    adding: PropTypes.array.isRequired,
    hendlePreparing : PropTypes.func.isRequired,
    preparing : PropTypes.func.isRequired,
    totalTime : PropTypes.number.isRequired,
    totalCalories:PropTypes.number.isRequired
 }
export default AddCard;