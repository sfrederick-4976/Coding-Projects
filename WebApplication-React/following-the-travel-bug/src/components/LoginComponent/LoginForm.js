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

const INITIAL_STATE ={
    email: '',
    password: '',
    error: null,
};

class LoginFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            })

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form noValidate onSubmit={this.onSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={this.onChange}
                    autoFocus
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={
                        {
                            backgroundColor: "#395159",
                            color: "#EFEFEF"
                        }
                    }
                    disabled={isInvalid}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Links href="#" variant="body2">
                            Forgot password?
                        </Links>
                    </Grid>
                    <Grid item>
                        <Links component={Link} to='/signUp' variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Links>
                    </Grid>
                </Grid>
                {error && <p>{error.message}</p>}
            </form>

        )
    }
};

const LoginForm = withRouter(withFirebase(LoginFormBase))

export { LoginForm };
