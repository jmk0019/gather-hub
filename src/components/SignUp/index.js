import { useState } from "react";
import Navbar from "../Navbar";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import "./index.css";

const SignUp = () => {

    const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
 
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
 
  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
  };
 
  // const Password = ()=> {
  //   if(password===confirmPassword){
 
  //   }else {
  //     alert("Password does not match")
  //   }
  // }
 
  const signUpUser = (event) => {
    event.preventDefault();
    if (
      fullName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      termsChecked &&
      password === confirmPassword
    ) {
      setPasswordMatch(true)
      // Your signup logic here
      // console.log('Signing up...', { fullName, email, password });
    } else if (password !== confirmPassword) {
      setPasswordMatch(false);
    }
  };

    return (
        <>
            <Navbar />
            <div className="signup-main-container">
      <div className="signup-container">
        <div className="logo-container">
          <img src= "https://res.cloudinary.com/dss1xnwen/image/upload/v1692042145/ce2dza3eax4jfxr1eezp.png"  alt="Frame" className="login-side-image" />
        </div>
        <div className="form-container">
          <img src= "https://res.cloudinary.com/dss1xnwen/image/upload/v1701976068/xs7v4plcbyqrcscuexmm.jpg" alt="Signup" className="signup-logo-image" />
          <form onSubmit={signUpUser} className="form-fields-container">
            {/* Other input containers... */}
            <div className="input-container">
              <div>
                <FaUser className="input-icon" />
              </div>
              <div>
                <input
                  required
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="input-box input-element"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
            </div>
            <div className="input-container">
              <div>
                <IoIosMail className="input-icon" />
              </div>
              <div>
                <input
                  required
                  type="email"
                  id="emailid"
                  placeholder="Email ID"
                  className="input-box input-element"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="input-container">
              <div>
                <IoMdLock className="input-icon" />
              </div>
              <div>
                <input
                  required
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="input-box input-element"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
 
            <div className="input-container">
              <div>
                <IoMdLock className="input-icon" />
              </div>
              <div>
                <input
                  required
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-box input-element"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
 
            {/* ... */}
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="termsCheckbox"
                className="i-box"
                checked={termsChecked}
                onChange={handleTermsChange}
              />
              <p>
                I agree to the
                <a className="terms-style">terms & conditions</a> and
                <a className="terms-style">Privacy Policy</a>
              </p>
            </div>
            <div className="button">
              <button className="sign-up-button" type="submit">
                Sign Up
              </button>
            </div>
            {passwordMatch ? (
              ""
            ) : (
              <p style={{ color: "red", textAlign: "center" }}>
                Passwords do not match
              </p>
            )}
            {/* <p className="signin-paragraph">
              Already registered ? <a  className="signin-style" href="#">SignIn</a>
            </p> */}
            <p className="signin-paragraph">
        Already registered?{' '}
        <Link to="/signin" className="signin-style">
          SignIn
        </Link>
      </p>
          </form>
          {/* <p>
            Already registered ? <a className="signin-style">Sign In</a>
          </p> */}
        </div>
      </div>
    </div>
        </>
    )
}

export default SignUp