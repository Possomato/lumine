import { Container, Profile } from './styles'
import profileSVG from "../../assets/icons/profile.svg";

export function Header() {
  return (
    <Container>
      <h1>Lumine</h1>
      <Profile>
        <img src={profileSVG} />
      </Profile>
    </Container>
  )
}
