import { Container, Form, ButtonEnter } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Lumine</h1>
        <p>Central para todas as suas notas e pensamentos</p>

        <div className="inputs">
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />
        </div>
        <ButtonEnter>Cadastrar</ButtonEnter>
        <ButtonText title="Voltar para login" />
      </Form>
    </Container>
  )
}
