const Header = () => {
  return (
    <div className="flex items-center  justify-between  border border-gray-300 shadow-lg  bg-red-600">
      <div>
        <img
          className="w-36 rounded-full p-3"
          src="/Food_App_Logo_Vibrant_Modern.jpg"
          alt="Food App Logo"
        />
      </div>
      <div className="font-bold text-2xl font-serif bg-black text-white rounded-lg p-2">
        @the_Taste_Route
      </div>
      <div>
        <ul className="flex space-x-6 text-2xl font-bold mb-20 p-4 font-serif">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header; 