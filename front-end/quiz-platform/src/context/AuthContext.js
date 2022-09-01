import { createContext, useEffect, useReducer } from 'react';

export const AuthConext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': return { learner: action.payload }
        case 'LOGOUT': return { learner: null }
        default: return state;
    }
}

export const AuthConextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        learner: null
    })
    useEffect(() => {
        const learner = JSON.parse(localStorage.getItem('learner'));

        if (learner){
            dispatch({type :'LOGIN', payload :learner})
        }
    }, [])
    console.log("AuthContext state", state);

    return (
        <AuthConext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthConext.Provider>
    )
}