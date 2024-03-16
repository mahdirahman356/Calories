
import PropTypes from 'prop-types'; 
import './AddCurrently.css'
const AddCurrently = ({preparing,totalTime,totalCalories}) => {

    
    return (
        <div> 

<h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Currently cooking: {preparing.length}</h2>
    <table className="w-full">
  <thead>
    <tr className="text-center text-[#878787]">
      <th></th>
      <th>Name</th>
      <th>Time</th>
      <th>Calories</th>
    </tr>
  </thead>
  <tbody>
    {preparing.map((pre, index) => (
      <tr key={index} className=" text-center bg-[#28282808] text-[#282828B3]">
        <td className="w-5">
          <div className="px-3">{index + 1}</div>
        </td>
        <td>{pre.name}</td>
        <td>{pre.preparing_time} min</td>
        <td>{pre.calories} calories</td>
      </tr>
    ))}

   
    <tr className="text-center text-[#282828CC] font-bold">
      <td></td>
      <td></td>
      <td>Total Time: {totalTime}</td>
      <td>Total calories: {totalCalories}</td>
    </tr>
  </tbody> 
</table>

        </div>
    );
};

AddCurrently.propTypes={
  preparing:PropTypes.array.isRequired,
  totalTime : PropTypes.number.isRequired,
  totalCalories : PropTypes.number.isRequired
}
export default AddCurrently;