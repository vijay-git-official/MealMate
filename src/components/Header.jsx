
import { LOGO_URL } from "../utils/constants";
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  const [btn, setBtn] = useState("Login")




  return (
    <div className="flex items-center  justify-between  border border-gray-300 shadow-lg  bg-red-700">
      <div>
        <img
          className="w-36 rounded-full p-3"
          src={LOGO_URL}
          alt="Food App Logo"
        />
      </div>
      {/* <div className="font-bold text-2xl font-serif bg-black text-white rounded-lg p-2">
        @the_Taste_Route
      </div> */}
      <div>
        <ul className="flex space-x-6 text-2xl font-bold mb-20 p-4 font-serif">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="bg-red-100 rounded-lg p-1" onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login");

          }}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header; 