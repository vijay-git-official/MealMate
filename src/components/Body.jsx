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
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <button
            className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 mb-4 md:mb-0"
            onClick={handleFilter}
          >
            Top Rated Restaurants
          </button>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center">
            <input
              className="w-full md:w-64 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4 md:mb-0 md:mr-4"
              placeholder="Search Restaurant"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filterRest.length > 0 ? (
            filterRest.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
                className="block"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          ) : (
            <h2 className="col-span-full text-center text-xl text-gray-600">No Restaurants Found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
