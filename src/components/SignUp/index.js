import { useState } from "react"
import Navbar from "../Navbar"

const SignUp = () => {
    const { newEmail, setNewEmail } = useState("")

    return (
        <div>
            <Navbar />
            <h1>Hello Signup</h1>
        </div>
    )
}

export default SignUp