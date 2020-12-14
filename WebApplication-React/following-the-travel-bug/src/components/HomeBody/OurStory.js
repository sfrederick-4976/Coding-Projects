import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ourStoryImage from "../../img/ourStoryJPG.JPG";

export default function OurStory() {
    const styling = useStyles();
    return (
        /*
         * Creates the Our Story Section with Image
         */
        <div className={styling.layout}>
            <div className={styling.ourStory}>
                <article className= {styling.ourStoryArticle}>
                    <h1>Our Story</h1>
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
            <img src={ourStoryImage} alt={"Camper"} className={styling.storyImage}/>
        </div>
    )
}

const useStyles = makeStyles({
    layout: {
        display:"grid",
        gridTemplateColumns: "600px 60px 600px ",
        margin: "20px",
        paddingTop: "20px",
        fontSize: '0.60em',
    },
    ourStory: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        alignSelf: "center",
        justifySelf: "center",
        width: "400px",
        gridRowStart: "2",
    },
    ourStoryArticle: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        alignSelf: "center",
        justifySelf: "center",
        width: "450px",
        gridRowStart: "2",
    },
    storyImage: {
        height: "448px",
        width: "604px",
        gridColumnStart: "3",
        gridColumnEnd: "4",
        gridRowStart: "2",

    },
});
