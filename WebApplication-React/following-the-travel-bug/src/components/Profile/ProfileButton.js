import React from "react";
import { withFirebase } from "../FirebaseSetup/context";
import { Button } from "@material-ui/core";

const buttonStyle = {
    backgroundColor: "#EFEFEF",
    color: "#90A3A7",
    borderColor: "#90A3A7",
    fontWeight: "bolder",
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}

const ProfileButton = () => (
    <Button variant="contained" style={buttonStyle}>
        Profile
    </Button>
);

export default withFirebase(ProfileButton);
