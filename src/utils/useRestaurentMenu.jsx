import { useState, useEffect } from 'react'
import { MENU_API } from "../utils/constants";

const useRestaurentMenu = (resId) => {
        const [resInfo, setResInfo] = useState(null)

        useEffect(() => {
                fetchMenu();
        }, []);


        const fetchMenu = async () => {

                const response = await fetch(MENU_API + resId);
                const json = await response.json();
                setResInfo(json.data);

        }



        return resInfo;



}

export default useRestaurentMenu;