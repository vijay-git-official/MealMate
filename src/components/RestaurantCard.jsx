import PropTypes from 'prop-types';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {

    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info || {} // error 

    return (
        <div className="p-5 mt-10">
            <div className="border p-7  mt-5 w-52 h-96 rounded-lg text-white">
                <img 
                    src={ CDN_URL + cloudinaryImageId}
                    alt="img"
                    className="w-full rounded-lg "
                />
                <h3 className="text font-bold">{name}</h3>
                <h4>Cuisines: {cuisines.join(', ')}</h4>
                <h4>Rating  : {avgRating}</h4>
            </div>
        </div>
    );
};

// Prop validation => why ?
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
