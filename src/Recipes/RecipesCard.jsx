import PropTypes from 'prop-types'; 
import { FaRegClock } from "react-icons/fa";
import { SlFire } from "react-icons/sl";

const RecipesCard = ({recipe,hendleWantToCook}) => {
     let {image,name,id,description,ingredients,preparing_time,calories} = recipe
    return (
            <div className="">
            <div className="card bg-base-100 shadow-xl h-[700px]">
         <figure className="px-7 pt-7">
           <img className="rounded-xl " src={image} />
         </figure>
         <div className="space-y-2 p-7">
           <h2 className="card-title">{name}</h2>
           <p className="border-b-[1px] border-[#2828281A] pb-4 text-[#878787]">{description}</p>
           <p className="text-xl font-semibold">ingredients : {ingredients.length}</p>

          <div className="border-b-[1px] border-[#2828281A] pb-4">
          <ul className="list-disc pl-6">
           {ingredients.map((ingre,index)=> 
            <li className="text-[#878787]" key={index}>{ingre}</li>
           )}
           </ul>
          </div>

           <div className="flex justify-between py-4 text-[#282828CC]">
            <p className="flex items-center gap-1"><FaRegClock /> {preparing_time}</p>
            <p className="flex items-center gap-1"><SlFire />{calories}</p>
           </div>

           <div className="card-actions">
             <button onClick={()=>hendleWantToCook(recipe,id)} className="btn border-none bg-[#0BE58A] rounded-[30px]">Want to Cook</button>
           </div>
         </div>
       </div>
        </div>  
    );
};

RecipesCard.propTypes ={
    recipe:PropTypes.object.isRequired,
    hendleWantToCook : PropTypes.func.isRequired,
}

export default RecipesCard;