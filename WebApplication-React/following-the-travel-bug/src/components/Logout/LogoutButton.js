import React from "react";
import { withFirebase } from "../FirebaseSetup/context";
import { Button } from "@material-ui/core";

const buttonStyle = {
    backgroundColor: "#90A3A7",
    borderColor: "#90A3A7",
    color: "#EFEFEF",
}

const LogoutButton = ({ firebase }) => (
    <Button variant="contained" onClick={firebase.doSignOut} style={buttonStyle}>
        Sign Out
    </Button>
);

export default withFirebase(LogoutButton);
