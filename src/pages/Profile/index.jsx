import { Container } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function Profile() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Atualizar perfil</h1>
        <div className="inputs">
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="text" placeholder="e-mail" icon={FiMail} />
        </div>
        <div className="inputs">
          <Input type="password" placeholder="Senha atual" icon={FiLock} />
          <Input type="password" placeholder="Senha nova" icon={FiLock} />
        </div>
      </main>
    </Container>
  )
}
