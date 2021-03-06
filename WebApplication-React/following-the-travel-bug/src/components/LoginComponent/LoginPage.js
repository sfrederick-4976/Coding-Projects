import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SignUpImage from '../../img/SignUpImage.JPG'
import {FirebaseContext} from "../FirebaseSetup/fireFunctionality";
import {LoginForm} from "./LoginForm";

const useStyles = makeStyles((theme) => ({
    mainPage: {
        height: '125vh',
    },
    root: {
        height: '81vh',
        marginTop: '6%',
    },
    image: {
        width: "100%",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#CBA688',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#395159",
        color: "#EFEFEF"
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <div className={classes.mainPage}>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image}>
                    <img src={SignUpImage} alt={"Van on an adventure in the mountains"} className={classes.image}/>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <FirebaseContext.Consumer>
                            {firebase => <LoginForm firebase={firebase}/>}
                        </FirebaseContext.Consumer>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
