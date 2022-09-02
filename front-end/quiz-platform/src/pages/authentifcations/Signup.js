import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('learner');
    const [phone, setPhone] = useState('');
    const { Signup, error, isLoading } = useSignup();

    // à revoir 
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password, firstName, lastName, role, phone);
        await Signup(email, password, firstName, lastName, role, phone)
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
            <input type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            <label>Last Name :</label>
            <input type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <label> Password :</label>
            <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <label htmlFor="role">Choose a Role:</label>

            <select id="role" onChange={(e) => setRole(e.target.value)}>
                <option defaultValue="learner">Learner</option>
                <option value="trainer">Trainer</option>
            </select>
            {role === 'trainer' && (<div>
                <label> Phone: </label>
                <input type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
            </div>)}
            <button disabled={isLoading}>Sign up</button>
            {error && <div> {error}</div>}
        </form>
    )
}

export default Signup