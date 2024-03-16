
import PropTypes from 'prop-types'; 

const AddCurrently = ({preparing}) => {
    return (
        <div> 

<h2 className="text-2xl font-bold text-center my-5 border-b-[1px] border-[#2828281A] pb-4 w-[80%] mx-auto">Currently cooking: {preparing.length}</h2>
            <table className="w-[100%]">
            <tr className="text-center"> 
              <td></td>
              <td>Name</td>
              <td>Time</td>
              <td>Calories</td> 
            </tr> 
            
            {preparing.map((pre,index) =>      
            <tr key={index} className="text-center bg-[#28282808]">  
             <td className="w-5"><div className="px-3">{index + 1}</div></td>
              <td>{pre.name}</td>
              <td>{pre.preparing_time}</td>
              <td>{pre.calories}</td>
              </tr>   
          )}
            </table>


           
        </div>
    );
};

AddCurrently.propTypes={
  preparing:PropTypes.array.isRequired
}
export default AddCurrently;