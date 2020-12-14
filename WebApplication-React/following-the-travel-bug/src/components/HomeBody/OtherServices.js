import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Installation from '../../img/insatllation.JPG';
import Plumbing from '../../img/plumbing.JPG';
import {Link} from 'react-router-dom';

export default function OtherServices() {
    const styling = useStyles();
    return (
        /*
         * Creates the Our Story Section with Image
         */
            <div className={styling.layout}>
                    <h1>Other Services</h1>
                    <div className={styling.install}>
                        <img src={Installation} alt={"Building a van and installing essential components"} className={styling.imageSizing}/>
                        <div className={styling.installSizing}>
                            <h2>Installations</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis erat at ante consequat luctus.
                                Duis nec ligula eget tortor pretium porttitor. Nam elementum consequat lorem nec fringilla.
                                Fusce in felis sit amet lorem ultricies consectetur eget vitae lorem.
                                In sed dolor vestibulum, vulputate tellus eget, lacinia nunc. Integer facilisis eros nibh, a
                                tincidunt velit dapibus id. Ut rutrum pellentesque urna, nec egestas diam sollicitudin ut.
                                <Link to="/">  <b>Click here to learn more!</b></Link>
                               </p>
                        </div>
                    </div>
                    <div className={styling.plumbElect}>
                        <div className={styling.plumbingSizing}>
                            <h2>Plumbing & Electrical</h2>
                            <p> Vivamus lorem enim, laoreet et sapien nec, molestie efficitur enim. Nullam maximus lacinia quam
                                nec malesuada. Ut vitae hendrerit mi. Aliquam et mi eu dui hendrerit porta nec ac velit. Proin
                                efficitur aliquet ultrices. Maecenas nisl orci, porttitor ut venenatis id, ultricies et arcu.
                                Nullam elementum nisl in dolor iaculis, et fringilla risus ornare. Nunc non magna quis sapien
                                venenatis maximus in at purus. Suspendisse eu massa ullamcorper, mattis libero vitae, porta
                                justo. Vestibulum maximus ut enim eu tincidunt. In tempor mi ac est.
                            </p>
                            <Link to="/">  <b>Click here to learn more!</b></Link>
                        </div>
                        <img src={Plumbing} alt={"Building a van and installing essential components"} className={styling.imageSizing}/>
                    </div>
            </div>
    )
}

const useStyles = makeStyles({
    layout: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontSize: ".6em",
    },
    install: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        padding: "20px",
    },
    plumbElect: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        padding: "20px",
    },
    imageSizing: {
        width: "15%",
    },
    installSizing: {
        margin: "1em",
        marginRight: "auto",
    },
    plumbingSizing: {
        margin: "1em",
    }

});
