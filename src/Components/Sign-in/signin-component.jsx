import React from "react";
import Forminput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";
import { auth, googleSignIn } from "../../firbase/firebase.utils";
import './signin.styles.scss'

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: '' })
            
        } catch (error) {
            console.error(error) 
        }
        
    }

    handleInput = event => {

        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h1>I already have an account</h1>
                <span>Signin with email and password</span>

                <form className="sign-in" onSubmit={this.handleSubmit}>
                    <Forminput handleChange={this.handleInput} label='email' name='email' type='email' value={this.state.email} required />

                    <Forminput handleChange={this.handleInput} label='password' name='password' type='password' value={this.state.password} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignIn} isGoogleSign>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn