import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    console.log("Mycart=", cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h2>My Cart</h2>
            <div>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index}>
                            <h3>Name: {item.card.info.name}</h3>
                            <p>Price: ₹{item.card.info.price / 100}</p>
                            {item.card.info.description && (
                                <p>Description: {item.card.info.description}</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            <button onClick={handleClearCart} className="p-2 rounded-lg bg-red-300"> Clear Cart</button>
        </div>
    );
};

export default Cart;

