import React,{ useState, useEffect } from "react";

import { useSelector } from "react-redux";
//Components
import DeliveryCarousal from "./DeliveryCarousal";

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
    );

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);

    return (
        <>
        <DeliveryCarousal />
        </>
    );
};

export default Delivery;

