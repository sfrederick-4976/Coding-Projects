import React from "react";
import './whatWeDo.css';
import {Divider} from "@material-ui/core";
import NewsletterSignup from "./newsletterSignup";

export default function WhatWeDo() {
    return (
        <div className={'layout'}>
            <div className={'whatWeDo'}>
                <h1 className={'header1'}>What We Do</h1>
                <p className={'para'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Divider/>
            <div className={'ourWork'}>
                <h1 className={'header1'}>Our Work</h1>
                <p className={'para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={'wwdButtons'}>
                    <button className={'customBuilds'}><h2 className={'customBLabel'}>Custom Builds</h2></button>
                    <button className={'mercedesSprinter'}><h2 className={'mercedesLabel'}>Mercedes Sprinters</h2></button>
                    <button className={'customLayouts'}><h2 className={'customLLabel'}>Custom Layouts</h2></button>
                    <button className={'fordTransits'}><h2 className={'fordLabel'}>Ford Transits</h2></button>
                    <button className={'gallery'}><h2 className={'galleryLabel'}>Gallery</h2></button>
                    <button className={'schoolBuses'}><h2 className={'busesLabel'}>School Buses</h2></button>
                </div>
            </div>
            <NewsletterSignup/>
        </div>

    );
}
