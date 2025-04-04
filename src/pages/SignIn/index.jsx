import { useState } from 'react'
import { Container, Form, ButtonEnter } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth.jsx'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(e) {
    e.preventDefault()
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>Lumine</h1>
        <p>Central para todas as suas notas e pensamentos</p>

        <div className="inputs">
          <Input
            type="text"
            placeholder="E-mail"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ButtonEnter onClick={handleSignIn}>Entrar</ButtonEnter>
        <Link to="/register">
          <ButtonText title="Criar Conta" />
        </Link>
      </Form>
    </Container>
  )
}
