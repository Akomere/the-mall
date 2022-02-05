import React from "react";
import './signup.styles.scss'
import Forminput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDoc } from "../../firbase/firebase.utils";

class Signup extends React.Component {

    constructor() {
        super()

        this.state = ({
            displayName: '',
            email: "",
            password: "",
            confrimPassword: ""
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confrimPassword } = this.state

        if (password !== confrimPassword) {
            alert('passwords do not match')
            return
        } else {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(
                    email,
                    password
                )
                await createUserProfileDoc(user, { displayName })

                this.setState({
                    displayName: '',
                    email: "",
                    password: "",
                    confrimPassword: ""
                })

            } catch (error) {
                console.error(error)
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confrimPassword } = this.state
        return (
            <div className="sign-up">

                <h1>I do not have an acount</h1>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Forminput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required>
                    </Forminput>

                    <Forminput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required>
                    </Forminput>

                    <Forminput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required>
                    </Forminput>

                    <Forminput
                        type='password'
                        name='confrimPassword'
                        value={confrimPassword}
                        onChange={this.handleChange}
                        label='Confirm password'
                        required>
                    </Forminput>
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>

            </div>
        )
    }
}

export default Signup