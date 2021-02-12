import React from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const PasswordStrength = (props) => {
    return (
        <PasswordStrengthBar {...props} scoreWordStyle={{ display: "none" }} />
    );
};

export default PasswordStrength;
