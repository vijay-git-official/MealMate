import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId);


    if (!resInfo) return <div className="text-center mt-8">Loading...</div>;


    const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];





    return (

        <>
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">{name || "Restaurant Name"}</h1>
                <p className="text-gray-600 mb-2">{cuisines?.join(", ") || "Cuisines not available"}</p>

                <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                {itemCards.length > 0 ? (
                    <ul className="space-y-4">
                        {itemCards.map((item) => (
                            <li key={item.card.info.id} className="border-b pb-4">
                                <h3 className="text-xl font-medium">{item.card.info.name}</h3>
                                <p className="text-gray-600">
                                    ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100 || "N/A"}
                                </p>
                                <p className="text-sm text-gray-500">{item.card.info.description || "No description available."}</p>
                                <button className="mt-4 bg-red-300 p-2 rounded-md">Add Items </button>
                            </li>
                        ))}


                    </ul>


                ) : (
                    <p className="text-gray-600">No menu items available.</p>
                )}


            </div>
        </>
    );
};

export default RestaurantMenu;
