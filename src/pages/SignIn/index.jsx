import { Container, Form, ButtonEnter } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Lumine</h1>
        <p>Central para todas as suas notas e pensamentos</p>

        <div className="inputs">
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />
        </div>
        <ButtonEnter>Entrar</ButtonEnter>
        <Link to="/register">
          <ButtonText title="Criar Conta" />
        </Link>
      </Form>
    </Container>
  )
}
