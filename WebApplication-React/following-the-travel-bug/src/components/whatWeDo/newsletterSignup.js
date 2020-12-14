import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function NewsletterSignup() {
    const styles = useStyles();
    return (
        <div className={styles.newsletter}>
            <h3>Want to hear from us more?</h3>
            <h2>Sign up for our Newsletter</h2>
            <form className={styles.newsletterForm}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="newsletterSignup"
                    type="text"
                    label="Enter your email"
                    id="newsLetterSignup"
                    autoComplete="current-email"
                    className={'emailField'}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={
                        {
                            backgroundColor: "#395159",
                            color: "#EFEFEF",
                            lineHeight: "3",
                        }
                    }
                >
                    Send me the Newsletter!
                </Button>
            </form>
            <p className={styles.finePrint}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

const useStyles = makeStyles({
    newsletter: {
        margin: "30px",
        padding: "20px",
        borderRadius: "10px",
        border: "1px outset #90A3A7",

    },

    newsletterForm: {
        display: "flex",
        flexDirection: "row",
        width: "75%",
        margin: "15px auto auto auto",
    },

    finePrint: {
        fontSize: "xx-small",
        width: "75%",
        margin: "10px auto auto auto",
    },
});
