import { Container, Profile, Search, Button, Logo } from './styles'
import profileSVG from '../../assets/icons/profile.svg'

import { Input } from '../Input'
import {FiSearch} from 'react-icons/fi'

export function Header({searchState}) {
  return (
    <Container>
      <Logo to='/'>Lumine</Logo>
      <div className="funcionalidades">
      <Search onChange={searchState}>
          <Input icon={FiSearch} />
        </Search>
        <Button to='/new'>Nova nota</Button>
      </div>
      <Profile to='/profile'>
        <img src={profileSVG} />
      </Profile>
    </Container>
    
  )
}
