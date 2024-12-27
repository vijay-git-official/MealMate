import PropTypes from 'prop-types';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info || {};

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img 
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800 truncate">{name}</h3>
                <p className="text-gray-600 text-sm mb-2 h-12 overflow-hidden">{cuisines?.join(', ')}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded">
                        <span className="mr-1">★</span>
                        <span>{avgRating}</span>
                    </div>
                    <span className="text-sm text-gray-500">30-40 min</span>
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

