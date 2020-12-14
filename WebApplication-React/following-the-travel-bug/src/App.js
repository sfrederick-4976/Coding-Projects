import './App.css';
import React, {Component} from 'react';
import reportWebVitals from "./reportWebVitals";
import Header from './components/HeaderComponent/Header';
import Footer from "./components/FooterComponent/Footer";
import HomeBody from "./components/HomeBody/HomeBody";
import LoginPage from "./components/LoginComponent/LoginPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import SignUp from "./components/SignUpComponent/SignUp";
import * as ROUTES from "./constraints/routes";
import {withFirebase} from "./components/FirebaseSetup/context";
import AuthenticationContext from "./components/Session/context";
import Dashboard from './components/AdminDash/AdminDash';
import AdminPage from "./components/AdminDash/adminTest";
import WhoWeAre from "./components/whoWeAreComponent/WhoWeAre";
import WhatWeDo from "./components/whatWeDo/whatWeDo";
import HowItWorks from "./components/howItWorks/howItWorks";
import Shop from "./components/ShopComponent/shopPage";
import Product from "./components/ShopComponent/productDetail";
import Cart from "./components/Cart/cart";
import Payment from "./components/Payment/paymentPage";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged( authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        })
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <AuthenticationContext.Provider value={this.state.authUser}>
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <Header authUser={this.state.authUser}/>
                        </header>

                        <Route exact path={ROUTES.HOME}>
                            <body className={"App-body"}>
                            <HomeBody/>
                            </body>
                        </Route>
                        <Route path={ROUTES.WHOWEARE}>
                            <body className={"App-body"}>
                            <WhoWeAre/>
                            </body>
                        </Route>
                        <Route path={ROUTES.WHATWEDO}>
                            <body className={"App-body"}>
                            <WhatWeDo/>
                            </body>
                        </Route>
                        <Route path={ROUTES.HOWITWORKS}>
                            <body className={"App-body"}>
                            <HowItWorks/>
                            </body>
                        </Route>
                        <Route path={ROUTES.SHOP}>
                            <body className={"App-body"}>
                            <Shop/>
                            </body>
                        </Route>
                        <Route path={ROUTES.PRODUCT}>
                            <body className={"App-body"}>
                            <Product/>
                            </body>
                        </Route>
                        <Route path={ROUTES.CART}>
                            <body className={"App-body"}>
                            <Cart/>
                            </body>
                        </Route>
                        <Route path={ROUTES.PAYMENT}>
                            <body className={"App-body"}>
                            <Payment/>
                            </body>
                        </Route>
                        <Route path={ROUTES.LOGIN}>
                            <body className={"App-body"}>
                            <LoginPage/>
                            </body>
                        </Route>
                        <Route path={ROUTES.SIGNUP}>
                            <body className={"App-body"}>
                            <SignUp/>
                            </body>
                        </Route>
                        <Route path={ROUTES.ADMIN}>
                            <body className={"App-body"}>
                            <Dashboard/>
                            </body>
                        </Route>
                        <Route path={ROUTES.TEST}>
                            <body className={"App-body"}>
                            <AdminPage/>
                            </body>
                        </Route>


                        <footer className={"App-footer"}>
                            <Footer/>
                        </footer>
                    </div>
                </Router>
            </AuthenticationContext.Provider>
        );
    }
}

reportWebVitals();
export default withFirebase(App);
