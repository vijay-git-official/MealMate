import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.card.info.price || item.card.info.defaultPrice) / 100, 0);

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-red-700">My Cart</h2>
                {cartItems && cartItems.length > 0 ? (
                    <div>
                        <ul className="space-y-4 mb-6">
                            {cartItems.map((item, index) => (
                                <li key={index} className="border-b pb-4">
                                    <h3 className="text-xl font-medium text-gray-800">{item.card.info.name}</h3>
                                    <p className="text-gray-600">Price: ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}</p>
                                    {item.card.info.description && (
                                        <p className="text-sm text-gray-500 mt-1">{item.card.info.description}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xl font-semibold">Total:</span>
                            <span className="text-2xl font-bold text-red-600">₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <button 
                            onClick={handleClearCart} 
                            className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
                        >
                            Clear Cart
                        </button>
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;

