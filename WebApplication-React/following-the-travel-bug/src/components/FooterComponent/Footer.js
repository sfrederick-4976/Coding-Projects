import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import makeStyles from "@material-ui/core/styles/makeStyles";
import './footer.css';

import {SvgIcon} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

/*
 * Footer code framework taken from webpage below
 * https://mdbootstrap.com/docs/react/navigation/footer/#docsTabsOverview
 */

const FooterPage = () => {
    const styling = useStyles();
    return (
        <MDBFooter className= {styling.footer}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol className={styling.icons}>
                        <SvgIcon component={FacebookIcon}/>
                        <SvgIcon component={InstagramIcon}/>
                        <SvgIcon component={PinterestIcon}/>
                        <SvgIcon component={TwitterIcon}/>
                        <SvgIcon component={YouTubeIcon}/>
                    </MDBCol>
                    <MDBCol>
                        <ul className={styling.linksPosition}>
                            <li className={styling.links}>
                                <a href="#!">Careers</a>
                            </li>
                            <li className={styling.links}>|</li>
                            <li className={styling.links}>
                                <a href="#!">Partners</a>
                            </li>
                            <li className={styling.links}>|</li>
                            <li className={styling.links}>
                                <a href="#!">Contact Us</a>
                            </li>
                            <li className={styling.links}>|</li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid className={styling.copyright}>
                    &copy; {new Date().getFullYear()} Copyright Following the Travel Bug
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

// Styling the navBar
const useStyles = makeStyles(theme => ({
    footer: {
        bottom: '0',
        backgroundColor: "#EFEFEF",
        color: "#23303D",
        border: "10px",
        borderColor: "#90A3A7",
        height: "75px",
        boxShadow: "inset 0 12px 5px -14px #111",
        zIndex: theme.zIndex.drawer + 1,
    },
    links: {
        display: "inline",
        textDecoration: "none",
        color: "#393D3F",
        paddingLeft: "20px"
    },
    linksPosition: {
        position: "absolute",
        right: "30px",
    },
    copyright: {
        position:"absolute",
        left: "30px",
    },
    icons: {
        position:"relative",
        top: "25px",
    }

}));

export default FooterPage;
