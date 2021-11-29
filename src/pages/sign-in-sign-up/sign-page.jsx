import React from "react";
import './sign-page.styles.scss'
import SignIn from "../../Components/Sign-in/signin-component";
import Signup from "../../Components/sign-up/signup.component";

const SignPage = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <Signup />
        </div>
    )
}

export default SignPage