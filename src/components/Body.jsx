import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const restaurants =
        response?.data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurent(restaurants || []);
      setFilterRest(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (listOfRestaurent.length === 0) {
    return <h1>Loading...!!!</h1>;
  }

  const handleFilter = () => {
    const filteredResList = listOfRestaurent.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilterRest(filteredResList);
  };

  const handleSearch = () => {
    const searchRestaurent = listOfRestaurent.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterRest(searchRestaurent);
  };

  return (
    <div className="border bg-black">
      {/* Filter and Search */}
      <div className="flex filter-button self-start p-1">
        <button
          className="ml-4 px-4 py-1 bg-red-500 text-white rounded"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
        <div className="ml-5">
          <input
            className="p-2 rounded"
            placeholder="Search Restaurant"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="ml-2 bg-red-500 p-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap -mt-14">
        {filterRest.length > 0 ? (
          filterRest.map((restaurant) => (

            <Link
              key={restaurant.info.id}
              to={"/restaurents/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />

            </Link>
          ))
        ) : (
          <h2 className="text-center w-full mt-10">No Restaurants Found</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
