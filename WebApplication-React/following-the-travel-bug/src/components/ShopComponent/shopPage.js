import React from "react";
import ResponsiveDrawer from "./responsiveDrawer";
import ShopProduct from "./ShopProduct";

export default function Shop() {

    return (
        <div className={'shopLayout'}>
            <h1 className={'heading'}>Shop</h1>

            <div className={'products'}>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
                <ShopProduct/>
            </div>
           <ResponsiveDrawer/>
        </div>

    );
}
