
import { useState } from "react"

import Navbar from "../Navbar"

import "./index.css"

const SignIn = () => {
    const [userName, setUserName] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
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
                            <input type="text" placeholder="Email Address" />
                        </div>


                        <div className="input-container password-container">
                            <input type="password" placeholder="Password" />
                            <div>
                                <svg className="eye-logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588M5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                                </svg>
                            </div>

                        </div>
                        <div className="forget-password-container">
                            <a className="forget-text" href="google.com">Forget Password ?</a>
                            <div >
                                <div className="help-container">
                                    <a className="forget-text" href="google.com">Help</a>
                                    <svg
                                        width="17"
                                        height="17"
                                        style={{ fill: '#0349fc', paddingLeft: '4px' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="bi bi-question-circle-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>

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