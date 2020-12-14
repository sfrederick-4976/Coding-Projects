import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ourPassionImage from "../../img/ourPassion.JPG";

export default function OurPassion() {
    const styling = useStyles();
    return (
        <div className={styling.passionLayout}>
            <div className={styling.ourPassion}>
                <article className= {styling.ourPassionArticle}>
                    <h1>Our Passion</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis erat at ante consequat luctus.
                        Duis nec ligula eget tortor pretium porttitor. Nam elementum consequat lorem nec fringilla.
                        Fusce in felis sit amet lorem ultricies consectetur eget vitae lorem.
                        In sed dolor vestibulum, vulputate tellus eget, lacinia nunc. Integer facilisis eros nibh, a
                        tincidunt velit dapibus id. Ut rutrum pellentesque urna, nec egestas diam sollicitudin ut.
                        Vivamus lorem enim, laoreet et sapien nec, molestie efficitur enim. Nullam maximus lacinia quam
                        nec malesuada. Ut vitae hendrerit mi. Aliquam et mi eu dui hendrerit porta nec ac velit. Proin
                        efficitur aliquet ultrices. Maecenas nisl orci, porttitor ut venenatis id, ultricies et arcu.
                        Nullam elementum nisl in dolor iaculis, et fringilla risus ornare. Nunc non magna quis sapien
                        venenatis maximus in at purus. Suspendisse eu massa ullamcorper, mattis libero vitae, porta
                        justo. Vestibulum maximus ut enim eu tincidunt. In tempor mi ac est.</p>
                </article>
            </div>
            <img src={ourPassionImage} alt={"interior of Camper"} className={styling.passionImage}/>
        </div>
    )
}

const useStyles = makeStyles({
    passionLayout: {
        display:"grid",
        gridTemplateColumns: "600px 60px 600px ",
        margin: "40px",
        fontSize: '0.60em',
    },
    ourPassion: {
        gridColumnStart: "3",
        gridColumnEnd: "4",
        alignSelf: "center",
        justifySelf: "center",
        width: "400px",
        gridRowStart: "4",
    },
    ourPassionArticle: {
        gridColumnStart: "3",
        gridColumnEnd: "4",
        alignSelf: "center",
        justifySelf: "center",
        width: "450px",
        gridRowStart: "4",
    },
    passionImage: {
        height: "448px",
        width: "604px",
        paddingTop: "20px",
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "4",
    },
});
