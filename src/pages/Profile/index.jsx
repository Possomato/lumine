import { useState } from 'react'
import { Container, Button, ButtonSignOut } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function Profile() {
  const { user, updateProfile, signOut } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }

    await updateProfile({ user })
  }

  return (
    <Container>
      <Header />
      <main>
        <h1>Perfil</h1>
        <div className="inputs">
          <Input
            type="text"
            placeholder="Nome"
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="e-mail"
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs">
          <Input
            type="password"
            placeholder="Senha atual"
            icon={FiLock}
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha nova"
            icon={FiLock}
            onChange={(e) => setPasswordNew(e.target.value)}
          />
        </div>
        <Button onClick={handleUpdate}>Atualizar</Button>
        <Link to='/'>
          <ButtonSignOut onClick={signOut} to="/">
            Sair
          </ButtonSignOut>
        </Link>
      </main>
    </Container>
  )
}
