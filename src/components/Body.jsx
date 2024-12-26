import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const restaurants =
        response?.data?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurant(restaurants);
      setFilterRest(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch restaurants. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    const filteredResList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilterRest(filteredResList);
  };

 

  const handleSearch = () => {
    const searchRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterRest(searchRestaurant);
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;




  return (
    <div className="border bg-black">
      <div className="flex filter-button self-start p-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
        <div className="ml-5 flex">
          <input
            className="p-2 rounded border"
            placeholder="Search Restaurant"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filterRest.length > 0 ? (
          filterRest.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
              className="m-4"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <h2 className="text-center w-full mt-10 text-xl">No Restaurants Found</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
