import { Link } from "react-router-dom"

import "./index.css"

const Navbar = () => {



    return (
        <nav>
            <h1 className="gather-hub">Gather Hub</h1>
            <ul>
                <li><Link className="link" to="/signup">Sign up</Link></li>
                <li>Support</li>


            </ul>
        </nav>
    )


}



export default Navbar