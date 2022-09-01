import {useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useSLogin = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const Login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        const _id = email;
        const response = await fetch('/api/learners/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ _id, password})
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
    return {Login, isLoading, error}
}
