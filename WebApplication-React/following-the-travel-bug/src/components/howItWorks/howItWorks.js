import React from "react";
import {Link} from "@material-ui/core";
import NewsletterSignup from "../whatWeDo/newsletterSignup";
import './howItWorks.css'

import Step1 from '../../img/step1.JPG';
import Step2 from '../../img/step2.JPG';
import Step3 from '../../img/step3.JPG';
import Complete from '../../img/complete.JPG';



export default function HowItWorks() {
    return (
        <div className={'HowItWorks'}>
            <h1 className={'header2'}>How it Works</h1>
            <p className={'paraHIW'} >Before we start, review our prices and options list <Link>HERE</Link>!</p>
            <div className={'step1'}>
                <h1 className={'headerHIW'}>Step 1</h1>
                <p className={'paraHIW'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src={Step1} alt={"Vans surrounding a fire with a group of vanlifers"}/>
            </div>
            <div className={'step2'}>
                <h1 className={'headerHIW'}>Step 2</h1>
                <p className={'paraHIW'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src={Step2} alt={"Van in the woods"}/>
            </div>
            <div className={'step3'}>
                <h1 className={'headerHIW'}>Step 3</h1>
                <p className={'paraHIW'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src={Step3} alt={"Van life couple celebrating on their van roof"} className={'imageSize'}/>
            </div>
            <div className={'complete'}>
                <h1 className={'headerHIW'}>Complete!</h1>
                <p className={'paraHIW'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src={Complete} alt={"Van lifer walking to her van in the desert"} className={'imageSize'}/>
            </div>
            <NewsletterSignup/>
        </div>

    );

}
