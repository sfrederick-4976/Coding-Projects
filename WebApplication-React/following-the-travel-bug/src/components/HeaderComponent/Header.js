import {Button, List, ListItem, ListItemText, Toolbar} from "@material-ui/core";
import React from 'react';
import './header.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import Logo from '../../img/logo.JPG';
import LogoutButton from "../Logout/LogoutButton";
import AuthenticationContext from "../Session/context";
import ProfileButton from "../Profile/ProfileButton";


const navLinksLoggedIn = [
    {   title: 'Who We Are',
        path: '/whoWeAre'},
    { title: '|'},
    {   title: 'What We Do',
        path: '/whatWeDo'},
    { title: '|'},
    {   title: 'How It Works',
        path: '/howItWorks'},
    { title: '|'},
    {   title: 'Shop',
        path: '/shop'},
    { title: '|'},
    { title: 'Community'},
]

const navLinksNotLoggedIn = [
    {   title: 'Who We Are',
        path: '/whoWeAre'},
    { title: '|'},
    {   title: 'What We Do',
        path: '/whatWeDo'},
    { title: '|'},
    {   title: 'How It Works',
        path: '/howItWorks'},
    { title: '|'},
    {   title: 'Shop',
        path: '/shop'},
]

// Displays header based on if user is signed in or not
const HeaderCheck = () => (
    <div>
        <AuthenticationContext.Consumer>
            {authUser => authUser ? <HeaderAuth authUser={authUser}/> : <HeaderNotAuth/>}
        </AuthenticationContext.Consumer>
    </div>
)

    //Displayed if authUser is null indicating no logged in user
    const HeaderNotAuth = () => (
            <Toolbar className={useStyles().header}>
                    <Link to="/"><img src={Logo} alt={"Following the Travel Bug"} className={useStyles().Logo}/></Link>
                    <List
                        component={"nav"}
                        aria-labelledby={"main navigation"}
                        className={useStyles().navDisplayFlex}
                    >
                        {navLinksNotLoggedIn.map(({title, path}) => (
                            <a href={path} key = {title}>
                                <ListItem button>
                                    <ListItemText primary={title}/>
                                </ListItem>

                            </a>
                        ))}

                    </List>

                    <div className={useStyles().buttonStyles}>
                        <Link to="/signUp"><Button className={useStyles().signUpButton} variant={"contained"} >Sign Up</Button></Link>
                        <Link to="/login"><Button className={useStyles().loginButton} variant={"outlined"}>Login</Button></Link>
                    </div>
            </Toolbar>
    )

    //Displayed if authUser is not null
    const HeaderAuth = ({authUser}) => (
        <Toolbar className={useStyles().header}>
            <Link to="/"><img src={Logo} alt={"Following the Travel Bug"} className={useStyles().Logo}/></Link>
            <List
                component={"nav"}
                aria-labelledby={"main navigation"}
                className={useStyles().navDisplayFlex}
            >
                {navLinksLoggedIn.map(({title, path}) => (
                    <a href={path} key = {title}>
                        <ListItem button>
                            <ListItemText primary={title}/>
                        </ListItem>
                    </a>
                ))}
            </List>

            <div className={useStyles().buttonStyles}>
                <Link to="/"><LogoutButton/></Link>
                <Link to="/"><ProfileButton/></Link>
            </div>
        </Toolbar>
    )

// Styling the navBar
const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: "#EFEFEF",
        color: "#23303D",
        border: "10px",
        borderColor: "#90A3A7",
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        zIndex: theme.zIndex.drawer + 1
    },
    Logo: {
        width: "150px",
    },
    navDisplayFlex: {
        display: 'flex',
        justifyContent: "space-between",
    },
    buttonStyles: {
        display: "block",
        position: "absolute",
        right: "10px"
    },
    signUpButton: {
        backgroundColor: "#395159",
        borderColor: "#90A3A7",
        color: "#EFEFEF",
    },
    loginButton: {
        backgroundColor: "#EFEFEF",
        color: "#395159",
        borderColor: "#90A3A7",
        fontWeight: "bolder",
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    }
    }));

export default HeaderCheck;

