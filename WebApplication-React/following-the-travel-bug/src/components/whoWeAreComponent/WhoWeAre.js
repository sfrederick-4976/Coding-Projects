import React from "react";
import whoWeAreHeader from '../../img/whoWeAreHeader.JPG';
import './whoWeAre.css';
import Carousel from "./CarouselComponent";
import {Divider} from "@material-ui/core";



export default function WhoWeAre() {
    return (
        <div className={'layout'}>
            <img src={whoWeAreHeader} alt={"Beautiful van with all doors open to a meadow"} className={'headImage'}/>
            <div className={'aboutUs'}>
                <h1 className={'header1'}>Who We Are</h1>
                <p className={'para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet et est a varius. Sed sagittis
                    lorem efficitur scelerisque rhoncus. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Nam eu ultrices elit. In faucibus lorem a tortor tempus iaculis.
                    Suspendisse pharetra sem a purus faucibus lobortis eget non tellus. Morbi in risus egestas nisl
                    dignissim fermentum. Duis pharetra sit amet arcu et pharetra. Vestibulum ac velit odio. Phasellus
                    non enim tempor, viverra mauris a, sodales neque. In eget mattis nulla, venenatis commodo ex.
                    Maecenas et lobortis neque, quis imperdiet libero. Pellentesque posuere fringilla urna, ac consequat
                    turpis suscipit in. Pellentesque eu odio bibendum, tristique velit in, semper sapien. Duis cursus
                    sed nisl sit amet volutpat. Duis ornare dictum porta.
                </p>
                <br/>
                <p className={'para'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Divider/>
            <div className={'ourAdventures'}>
                <h1 className={'header1'}>Our Adventures</h1>
                <Carousel/>
                <p className={'para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet et est a varius. Sed sagittis
                    lorem efficitur scelerisque rhoncus. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Nam eu ultrices elit. In faucibus lorem a tortor tempus iaculis.
                    Suspendisse pharetra sem a purus faucibus lobortis eget non tellus. Morbi in risus egestas nisl
                    dignissim fermentum. Duis pharetra sit amet arcu et pharetra. Vestibulum ac velit odio. Phasellus
                    non enim tempor, viverra mauris a, sodales neque. In eget mattis nulla, venenatis commodo ex.
                    Maecenas et lobortis neque, quis imperdiet libero. Pellentesque posuere fringilla urna, ac consequat
                    turpis suscipit in. Pellentesque eu odio bibendum, tristique velit in, semper sapien. Duis cursus
                    sed nisl sit amet volutpat. Duis ornare dictum porta.
                </p>
                <br/>
                <p className={'para'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

    );

}
