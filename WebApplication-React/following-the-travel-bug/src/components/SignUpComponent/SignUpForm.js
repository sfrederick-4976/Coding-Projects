import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Links from '@material-ui/core/Link';
import {Link, withRouter} from "react-router-dom";
import {withFirebase} from "../FirebaseSetup/context";
import * as ROUTES from "../../constraints/routes";
import * as ROLES from "../../constraints/roles";

const INITIAL_STATE ={
    fullName: '',
    email: '',
    password: '',
    isAdmin: false,
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { fullName, email, password, isAdmin } = this.state;
        const roles = {};

        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                //Create user in database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        fullName,
                        email,
                        roles,
                    });
            })
            .then(() => {
                //Create user in authentication
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                //Display error if not completed
                this.setState({ error });
            })

        event.preventDefault();
    }

    //Sets the state when input in changed
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    //Sets the state of the changed checkbox
    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
        const {
            fullName,
            email,
            password,
            isAdmin,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '' ||
            fullName === '';

        return (
            <form noValidate onSubmit={this.onSubmit}>
                <FormControlLabel
                    control={
                        <Checkbox
                            value={isAdmin}
                            color="primary"
                            name="isAdmin"
                            checked={isAdmin}
                            onChange={this.onChangeCheckbox}/>}
                    label="Admin"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="fullName"
                    value={fullName}
                    label="Full Name"
                    type="text"
                    id="name"
                    onChange={this.onChange}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={password}
                    label="Password"
                    type="password"
                    id="password"
                    onChange={this.onChange}
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" disabled={isInvalid} style={
                    { backgroundColor: "#395159",
                        color: "#EFEFEF"}
                }>
                    Register
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Links href="#" variant="body2">
                            Forgot password?
                        </Links>
                    </Grid>
                    <Grid item>
                        <Links component={Link} to='/login' variant="body2">
                            {"Already have an account?  Login here."}
                        </Links>
                    </Grid>
                </Grid>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
};

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export { SignUpForm };
