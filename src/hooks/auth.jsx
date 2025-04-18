import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@lumine:user', JSON.stringify(user))
      localStorage.setItem('@lumine:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível fazer o Login')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@lumine:user')
    localStorage.removeItem('@lumine:token')

    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put('/users', user)
      localStorage.setItem('@lumine:user', JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil Atualizado!')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o perfil')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@lumine:user')
    const token = localStorage.getItem('@lumine:token')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    setData({
      token,
      user: JSON.parse(user),
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
