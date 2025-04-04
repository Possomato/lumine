import { useState } from 'react'
import { Container, Form, ButtonEnter } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      alert('Preencha todos os campos')
      return
    }

    api.post('/users', { name, email, password })
      .then(() => alert('Usuário cadastrado!'))
      .catch((error) => {
        if(error.response){
          alert(error.response.data.message)
        } else{
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>Lumine</h1>
        <p>Central para todas as suas notas e pensamentos</p>

        <div className="inputs">
          <Input
            type="text"
            placeholder="Nome"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
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
        <ButtonEnter onClick={handleSignUp}>Cadastrar</ButtonEnter>
        <Link to="/">
          <ButtonText title="Voltar para login" />
        </Link>
      </Form>
    </Container>
  )
}
