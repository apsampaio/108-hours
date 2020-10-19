import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUserProps;
  updateUserInfo(): Promise<void>;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

export interface IAppointment {
  id: string;
  user_id: string;
  date: string;
}

interface IUserProps {
  id: string,
  name: string,
  email: string,
  phone: string,
  country: string,
  state: string,
  city: string,
  isAdmin: boolean,
  avatar: string,
  created_at: Date,
  updated_at: Date,
  appointments: IAppointment[]
}

interface IAuthState {
  token: string;
  user: IUserProps;
}

const AuthContext = createContext({} as IAuthContextData)


const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@108hours:token')
    const user = localStorage.getItem('@108hours:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      const parsedUser = JSON.parse(user)
      return { token, user: parsedUser }
    }

    return {} as IAuthState

  })

  const signIn = useCallback(async ({ email, password }) => {
    api.post('sessions', { email, password }).then((response) => {
      const { user, token } = response.data

      localStorage.setItem('@108hours:token', token)
      localStorage.setItem('@108hours:user', JSON.stringify(user))

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token })
    }).catch((response) => {

      console.log("Error when authenticating")
      console.log(response)
    })
    //TODO error handling
  }, [])

  const signOut = useCallback(async () => {
    localStorage.removeItem('@108hours:token')
    localStorage.removeItem('@108hours:user')

    setData({} as IAuthState)
  }, [])

  const updateUserInfo = useCallback(async () => {
    const response = await api.get('users')

    const { user, token } = response.data

    localStorage.setItem('@108hours:user', JSON.stringify(user))

    setData({ user, token })
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUserInfo }}>
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
