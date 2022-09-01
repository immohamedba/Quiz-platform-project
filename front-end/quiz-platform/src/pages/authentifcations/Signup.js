import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const { Signup, error, isLoading } = useSignup();


    const handleSubmit = async (e) => {
        e.preventDefault()
        await Signup(email, password, firstName, lastName)

    }
    return (

        <form onSubmit={handleSubmit}>
            <h3> Signup </h3>
            <label> Email :</label>
            <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>First Name :</label>
            <input type="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            <label>Last Name :</label>
            <input type="lastname"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <label> Password :</label>
            <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button disabled ={isLoading}>Sign up</button>
            {error && <div> {error}</div>}
        </form>
    )
}

export default Signup