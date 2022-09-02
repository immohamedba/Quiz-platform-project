import React from 'react'
import { useState } from 'react'
import { useSLogin } from '../../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { Login, isLoading, error } = useSLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const _id = email;
        //  console.log(_id,password );
        await Login(_id, password);
    }

    return (

        <form onSubmit={handleSubmit}>
            <h3> Login </h3>
            <label> Email :</label>
            <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label> Password :</label>
            <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button disabled={isLoading}>Log in</button>
            {error && <div>{error}</div>}
        </form>
    )
};
export default Login;