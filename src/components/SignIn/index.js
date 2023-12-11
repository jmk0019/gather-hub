import { useState } from "react";
import Navbar from "../Navbar";
import { BsEyeSlashFill, BsEyeFill, BsQuestionCircleFill } from "react-icons/bs";
import "./index.css";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    const handleLogin = async () => {
        const userData = { userEmail: email, userPassword: password }
        console.log(userData)
        try {
            const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const responseData = await response.json();
            console.log('Login successful:', responseData);
            // You may want to store the authentication token or perform other actions upon successful login
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };



    const onClickShowPassword = () => {
        setShowPassword(!showPassword)

    }

    return (
        <>
            <Navbar />
            <div className="sign-in-container">

                <div className="image-container">
                    <img className="sign-in-img" alt="sign in" src="https://res.cloudinary.com/dss1xnwen/image/upload/v1692042145/ce2dza3eax4jfxr1eezp.png" />
                </div>
                <div className="sign-in-form-container">
                    <img className="gather-hub-logo" alt="gather hub" src="https://res.cloudinary.com/dss1xnwen/image/upload/v1701976068/xs7v4plcbyqrcscuexmm.jpg" />
                    <form>

                        <div className="input-container">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" className="input-email"/>
                        </div>


                        <div className="input-container password-container">
                            <input value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" />
                            <div>
                                <button className="eye-button" onClick={onClickShowPassword} type="button">

                                    {showPassword ?
                                        <BsEyeFill className="icon" />
                                        : <BsEyeSlashFill className="icon" />}
                                </button>
                            </div>

                        </div>
                        <div className="forget-password-container">
                            <a className="forget-text" href="google.com">Forget Password ?</a>
                            <div >
                                <div className="help-container">
                                    <a className="forget-text" href="google.com">Help</a>
                                    <BsQuestionCircleFill className="question-mark" />

                                </div>
                            </div>
                        </div>

                        <button className="sign-in-button" onClick={onSubmit} type="submit">Sign In</button>
                    </form>
                    <div className="line-container">
                        <hr className="line" />
                        <p className="sign-in-text">Or sign in with</p>
                        <hr className="line" />
                    </div>
                    <div className="sign-in-options">
                        <a href="google.com">
                            <img className="sign-in-image" alt="google" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7JN4M-Dzb_nJaC4ZvgetQ4-TwXDfkTHdQnmKSeMTWQ&s" />
                        </a>

                        <a href="facebook.com">
                            <img className="sign-in-image" alt="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
                        </a>

                    </div>
                </div>

            </div>
        </>
    )
}



export default SignIn