import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);


    const { resId } = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();

        console.log(json);
        setResInfo(json.data)

    };
    if (resInfo === null) return <>Loading...!!</>

    // const {name,cuisines} = resInfo?.cards?.[2]?.card?.card?.info;

    const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};


    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card

        || {}
    console.log(itemCards);


    return (
        <>
            <div className="p-5">
                <h2 className="text-2xl font-bold"> Name Of Restaurant: {name}</h2>
                <h4>Cuisines : {cuisines.join}</h4>

            </div>
            <div className="p-5">
                <h2 className="text-2xl font-bold">Menu</h2>
                <ul className="mt-3">{itemCards.map((item, index) => (
                    <li key={item.card.info.id}>
                        {index + 1}. {item.card.info.name} = {" Rs "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))
                }

                </ul>
            </div>

        </>
    );
};

export default RestaurentMenu;
