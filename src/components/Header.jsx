import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStaus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-red-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
            src={LOGO_URL}
            alt="Food App Logo"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link to="/" className="hover:text-red-200">Home</Link>
          <span>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
          <Link to="/about" className="hover:text-red-200">About</Link>
          <Link to="/offer" className="hover:text-red-200">Offers</Link>
          <Link to="/cart" className="hover:text-red-200">Cart ({cartItems.length})</Link>
          <button 
            className="bg-white text-red-700 px-4 py-2 rounded-full hover:bg-red-100 transition duration-300"
            onClick={() => setBtn(btn === "Login" ? "Logout" : "Login")}
          >
            {btn}
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-red-600 px-4 py-2">
          <Link to="/" className="block py-2 text-white hover:text-red-200">Home</Link>
          <span className="block py-2 text-white">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
          <Link to="/about" className="block py-2 text-white hover:text-red-200">About</Link>
          <Link to="/offer" className="block py-2 text-white hover:text-red-200">Offers</Link>
          <Link to="/cart" className="block py-2 text-white hover:text-red-200">Cart ({cartItems.length})</Link>
          <button 
            className="block w-full text-left py-2 text-white hover:text-red-200"
            onClick={() => {
              setBtn(btn === "Login" ? "Logout" : "Login");
              setIsMenuOpen(false);
            }}
          >
            {btn}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
