import PropTypes from 'prop-types';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info || {};

    return (
        <div className="w-64 h-80 p-4 m-2 rounded-lg shadow-lg bg-white flex flex-col">
            <img 
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-32 object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col justify-between p-4">
                <h3 className="font-bold text-lg mb-1 text-gray-800 truncate">{name}</h3>
                <p className="text-gray-600 text-sm mb-2">{cuisines?.join(', ')}</p>
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-700">{avgRating}</span>
                </div>
            </div>
        </div>
    );
};

RestaurantCard.propTypes = {
    resData: PropTypes.shape({
        info: PropTypes.shape({
            name: PropTypes.string.isRequired, 
            avgRating: PropTypes.number.isRequired,
            cuisines: PropTypes.arrayOf(PropTypes.string).isRequired, 
            cloudinaryImageId: PropTypes.string.isRequired, 
        }).isRequired,
    }).isRequired,
};

export default RestaurantCard;
