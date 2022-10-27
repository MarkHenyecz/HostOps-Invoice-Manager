import React from "react"
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../../styles/scss/login.scss'

function Login() {
    return(
        <div className={"login"+(isMobile ? ' mobile' : '')}>
            <div className="icon">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
                <input type="text" required />
                <label>Username</label>
            </div>
            <div>
                <input type="password" required />
                <label>Password</label>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                <button className="register">Register</button>
            </div>
        </div>
    )
}

export default Login;