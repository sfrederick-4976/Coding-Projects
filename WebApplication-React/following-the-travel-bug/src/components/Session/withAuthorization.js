import React, { Component } from "react";
import {withFirebase} from "../FirebaseSetup/context";
import {withRouter} from "react-router";
import * as ROUTES from "../../constraints/routes";
import AuthenticationContext from "./context";

const withAuthorization = condition => Component => {
    class WithAuthorization extends Component {
        componentDidMount() {
            this.listener = this.props.firebase.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.HOME);
                    }
                },
                () => this.props.history.push(ROUTES.HOME),
                );
        }


        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthenticationContext.Consumer>
                {authUser =>
                    condition(authUser) ? <Component {...this.props} /> : null
                }
                </AuthenticationContext.Consumer>
            )

        }
    }
    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;
