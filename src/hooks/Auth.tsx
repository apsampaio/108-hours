import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface ISignInCredentials {
    email: string;
    password: string;
}

interface IAuthContextData {
    user: object;
    signIn(data: ISignInCredentials): Promise<void>
}

interface IAuthState {
    token: string;
    user: object;
}

const AuthContext = createContext({} as IAuthContextData)


const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IAuthState>({} as IAuthState)

    const signIn = useCallback(async ({ email, password }) => {
        api.post('sessions', { email, password }).then(({ data }) => {
            console.log(data)
        }).catch(() => {
            console.log("Error when authenticating")
        })
    }, [])
    return (
        <AuthContext.Provider value={{ user: data.user, signIn }}>
            {children}
        </AuthContext.Provider>)
}

function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}

export { AuthProvider, useAuth }