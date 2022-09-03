import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from './../hooks/useAuthContext';
const NavBar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const handelClick = () => {
        logout();
    }
    return (
        <div style={{background:"gray"}}>
            <h2> NavBar</h2>
            <nav>
                <div>
                    {!user && (<div>
                        <Link to="/login" style={{margin:"20px"}}>Login</Link >
                        <Link to="/signup">Signup</Link>
                    </div>
                    )}
                    {user && (<div>
                        <span>{user._id}</span>
                        <button onClick={handelClick} > Log out</button>
                    </div>)}
                </div>
            </nav>

        </div>
    )
} 


export default NavBar;