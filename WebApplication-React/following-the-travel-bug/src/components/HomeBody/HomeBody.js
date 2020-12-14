import React from 'react';
import './homeBody.css';
import OurStory from "./OurStory";
import OurPassion from "./OurPassion";
import OurProcess from "./OurProcess";
import OurShop from "./OurShop";
import OtherServices from "./OtherServices";


export default function HomeBody() {
    return (
        <div>
            <OurStory/>
            <OurPassion/>
            <OurProcess/>
            <OurShop/>
            <OtherServices/>
        </div>

    );

}


