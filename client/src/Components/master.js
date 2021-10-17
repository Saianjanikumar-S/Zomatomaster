import React from "react";
import { useParams } from "react-router-dom";

//Components
import Delivery from "./Delivery";
import Dining from "./Dining/DiningCarousal";
const Master = () => {
    const { type } = useParams();

    return (
        <>
        <div className="m-4">
        { type === "delivery" && <Delivery /> }
        { type === "dinning" && <Dining /> }
        </div>
        
        </>
    );
};

export default Master;