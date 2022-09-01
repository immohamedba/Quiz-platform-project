import React from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('learner')


        //dispatch logout
        dispatch({ type: 'LOGOUT' })
    }
    return {logout};
}
