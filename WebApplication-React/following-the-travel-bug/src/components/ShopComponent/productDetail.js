import React from "react";
import ProductImage from '../../img/shopProduct.JPG';
import './productDetail.css';
import Link from "@material-ui/core/Link";
import {Button} from "@material-ui/core";


 const Product = () => {
    return (
        <div className={'productLayout'}>
            <h1 className={'headerProduct'}>Roof Tent Tepuis HyBox</h1>
            <div className={'productDescription'}>
                <img src={ProductImage} alt={'Roof Tent Tupuis HyBox'}/>
                <div className={'description'}>
                    <h3 className={'titleDesc'}>Description: </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h2 className={'price'}>$3,999.00</h2>
                    <Button
                        className={'addToCart'}
                        variant={"contained"}
                        style={
                            {
                                backgroundColor: "#395159",
                                color: "#EFEFEF",
                            }
                        }
                    >
                        Add to Cart
                    </Button>
                    <p className={'financing'}><Link>Click here </Link> too look at financing options</p>
                </div>
            </div>
            <div className={'productDetails'}>
                <h3>Details and Specs:</h3>
                <h5>Fit:</h5>
                <p className={'detailsPara'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tincidunt felis. Nunc lacinia
                    elit a rhoncus porta. Phasellus lobortis, ante sit amet porttitor vulputate, justo magna dapibus
                    turpis, pharetra mollis diam mi sed tellus. Aliquam tristique tellus sit amet sapien malesuada
                    convallis eu at eros. Nunc vel ultricies velit. Vestibulum posuere augue enim, quis vestibulum nisi
                    condimentum eu. Fusce vulputate vel mi ut condimentum. Phasellus erat sem, dignissim eu augue ac,
                    bibendum volutpat lectus.
                </p>
                <h5>Weight:</h5>
                <p className={'detailsPara'}>
                    Mauris vitae viverra dolor, sit amet ultricies nisl. Fusce tincidunt volutpat lacinia. Mauris
                    ultricies, nibh eget sagittis congue, turpis elit mattis lectus, eu auctor urna quam ac mi. Integer
                    ante elit, aliquam sit amet tempus at, bibendum eget ante. Cras sit amet dignissim enim. Morbi non
                    elementum odio. Curabitur pulvinar, turpis et malesuada convallis, orci justo maximus lacus, sed
                    placerat dui nisi quis sem. Vivamus porta mi ac mi tempus, sed congue dolor lobortis. Aliquam vitae
                    ipsum at neque tempus lacinia ac vel justo.
                </p>
                <h5>Dimensions:</h5>
                <p className={'detailsPara'}>
                    In ut hendrerit augue. Nulla massa lorem, mollis nec sodales blandit, tristique ut lorem. Aliquam
                    erat volutpat. Ut maximus porttitor ante non finibus. Vivamus ut enim sed ex consequat dictum. Morbi
                    nisl metus, luctus vitae pellentesque nec, euismod ut nunc. Vestibulum aliquet libero accumsan,
                    semper lectus at, tristique odio. Nullam accumsan arcu metus, eget porttitor massa laoreet a.
                </p>
            </div>
        </div>
    );
}

export default Product;
