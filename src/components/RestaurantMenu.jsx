import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId);
    const dispatch = useDispatch();

    if (!resInfo) return <div className="text-center mt-8">Loading...</div>;

    const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    const handleAddItem = (item) => {
        dispatch(addItems(item));
    };

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-red-700">{name || "Restaurant Name"}</h1>
                <p className="text-gray-600 mb-6">{cuisines?.join(", ") || "Cuisines not available"}</p>

                <h2 className="text-2xl font-semibold mb-4 text-red-600">Menu</h2>
                {itemCards.length > 0 ? (
                    <ul className="space-y-6">
                        {itemCards.map((item) => (
                            <li key={item.card.info.id} className="border-b pb-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">{item.card.info.name}</h3>
                                        <p className="text-gray-600 mt-1">
                                            ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100 || "N/A"}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">{item.card.info.description || "No description available."}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleAddItem(item)} 
                                        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No menu items available.</p>
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;

