import { Container, Profile, Search, Button } from './styles'
import profileSVG from '../../assets/icons/profile.svg'
import { Input } from '../Input'
import {FiSearch} from 'react-icons/fi'

export function Header() {
  return (
    <Container>
      <h1>Lumine</h1>
      <div className="funcionalidades">
      <Search>
          <Input icon={FiSearch} />
        </Search>
        <Button>Nova nota</Button>
      </div>
      <Profile>
        <img src={profileSVG} />
      </Profile>
    </Container>
    
  )
}
