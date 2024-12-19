
import PropTypes from 'prop-types';

const RestaurantCard = ({resName , cuisine}) => {
    return (

        <div className="p-4 mt-10">
            <div className="border p-4 mt-5 w-52 rounded-lg">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/c5d8f076-7aea-43ee-902a-06df0f1eb852_752535.JPG"
                    alt="KFC"
                    className="w-full rounded-lg"
                />
                <h3 className="text-2xl font-bold"> Name : {resName}</h3>
                <h4> Cuisine : {cuisine}</h4>
             
            </div>
        </div>

    );
};

RestaurantCard.propTypes = {
    resName: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
};

export default RestaurantCard;
