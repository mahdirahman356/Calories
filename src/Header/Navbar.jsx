
import { IoIosSearch } from "react-icons/io";
import Image from './Image/Frame 5 (1).png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a className="font-semibold text-gray-600">Home</a></li>
      <li><a className="font-semibold text-gray-600">Recipes</a></li>
      <li><a className="font-semibold text-gray-600">About</a></li>
      <li><a className="font-semibold text-gray-600">Search</a></li>
      </ul>
    </div>
    <a className="mx-2 text-center text-xl md:text-3xl font-bold text-gray-700">Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="font-semibold text-gray-600">Home</a></li>
      <li><a className="font-semibold text-gray-600">Recipes</a></li>
      <li><a className="font-semibold text-gray-600">About</a></li>
      <li><a className="font-semibold text-gray-600">Search</a></li>
    </ul>
  </div>
 

  <div className="md:navbar-end">
    <div className="bg-[#150B2B0D] px-2 md:px-2 py-1 md:py-2 w-[90%] md:w-[50%] flex items-center gap-1 rounded-[20px]">   
    <div>
    <IoIosSearch className="text-gray-500" />   
    </div>
    <input className=" bg-[#150B2B01] w-[80%]"  type="text" placeholder= "search" />
    </div>
    <div>
        <img className="mx-2" src={Image} alt="" />
    </div> 
  </div>
</div>
        </div>
    );
};

export default Navbar;