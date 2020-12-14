import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import './paymentPage.css';

export default function Payment() {

    return (
        <div className={'paymentLayout'}>
            <h1>Checkout</h1>
            <form noValidate className={'checkoutForm'}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    name="Full Name"
                    autoComplete="name"
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
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Shipping Address"
                    name="Address"
                    autoComplete="address"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="int"
                    id="phoneNumber"
                    autoComplete="Phone Number"
                />
                <FormControlLabel
                    className={'checkbox'}
                    control={<Checkbox value="remember" color="primary" />}
                    label="I agree to the Terms and Conditions.  I would like to be notified of promotions and other
                    Following the Travel Bug news"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={
                        {
                            backgroundColor: "#395159",
                            color: "#EFEFEF",
                            height: "50px",
                            width: "75%",
                        }
                    }
                >
                    Go to Paypal for Payment
                </Button>
            </form>
        </div>
    );
}
