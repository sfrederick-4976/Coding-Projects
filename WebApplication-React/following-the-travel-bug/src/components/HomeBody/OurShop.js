import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShopProduct from "../ShopComponent/ShopProduct";
import { Link } from 'react-router-dom';

export default function OurShop() {
    const styling = useStyles();
    return (
        /*
        * Creates the Our Shop Section
        */
            <div className={styling.ourShop}>
                <h1>Our Shop</h1>
                <div className={styling.products}>
                    <ShopProduct/>
                    <ShopProduct/>
                    <ShopProduct/>
                    <ShopProduct/>
                    <ShopProduct/>
                    <ShopProduct/>
                </div>

                {/*Route to proper shop when finished!*/}
                <Link to='/'><p>Go to Shop...</p></Link>
            </div>
    )
}

const useStyles = makeStyles({
    ourShop: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: ".60em",
        width: "100%",
    },
    products: {
        display: "flex",
        width: "85%",
        margin: "2em",
        flexFlow: "row wrap",
        justifyContent: "space-evenly",

    },
});
