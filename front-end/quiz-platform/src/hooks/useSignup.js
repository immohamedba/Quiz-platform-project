import {useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const Signup = async (email, password, firstName, lastName) => {
        setIsLoading(true)
        setError(null)
        const _id = email;
        const response = await fetch('/api/learners/signup', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ _id, password, firstName, lastName })
        })

        const json = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('learner', JSON.stringify(json))
            // update the Auth context
            dispatch({type:'LOGIN', payload :json})

            setIsLoading(false);
        }
    }
    return {Signup, isLoading, error}
}
