import youDesignWeBuild from "../../img/youDesignWeBuild.JPG";
import weDesignYouBuild from "../../img/wedesignyoubuild.JPG";
import weDesignWeBuild from "../../img/weDesignweBuild.JPG";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function OurProcess() {
    const styling = useStyles();
    return (
        <div className={styling.layoutProcess}>
            <div className={styling.ourProcessSection}>
                <h1 className={styling.ourProcessArticle}>Our Process</h1>
                <section className={styling.youDesignWeBuild}>
                    <img src={youDesignWeBuild} alt={""} className={styling.ourProcessImage}/>
                    <h2>You Design,<br/> <b>We Build</b></h2>
                    <p className={styling.descriptionPara}>You give us your design and a van and we will make your dream a reality!</p>
                </section>
                <section className={styling.weDesignYouBuild}>
                    <img src={weDesignYouBuild} alt={""} className={styling.ourProcessImage}/>
                    <h2><b>We Design,</b> <br/> You Build</h2>
                    <p className={styling.descriptionPara}>Whether you want a per-designed layout or custom, we are here to help!</p>
                </section>
                <section className={styling.weDesignWeBuild}>
                    <img src={weDesignWeBuild} alt={""} className={styling.ourProcessImage}/>
                    <h2><b>We Design, <br/> We Build</b></h2>
                    <p className={styling.descriptionPara}>Give us an idea of what you like and need and leave the rest up to us!</p>
                </section>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    layoutProcess: {
        display:"grid",
        gridTemplateColumns: "600px 60px 600px ",
        margin: "45px",
    },
    ourProcessSection: {
        display: "grid",
        gridTemplateColumns: "90% 90% 90%",
        gridTemplateRows: "25% 75%",
        fontSize: ".6em",
        width: "400px",
        justifySelf: "center",
        alignSelf: "center",
    },
    ourProcessArticle: {
        gridColumnStart: "2",
        gridColumnEnd:"3",
        alignSelf: "center",
        justifySelf: "center",
        width: "400px",
        gridRowStart: "1",
    },
    ourProcessImage: {
        height: "75%",
        maxHeight: "350px",
        width: "75%",
        maxWidth: "350px"
    },
    youDesignWeBuild: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        alignSelf: "center",
        justifySelf: "center",
        gridRowStart: "2",
    },
    weDesignYouBuild: {
        gridColumnStart: "2",
        gridColumnEnd: "3",
        alignSelf: "center",
        justifySelf: "center",
    },
    weDesignWeBuild: {
        gridColumnStart: "3",
        gridColumnEnd: "4",
        alignSelf: "center",
        justifySelf: "center",
    },
    descriptionPara: {
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingTop: '2%',
    }
});
