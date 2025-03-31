import { Container } from "./styles";

export function Input({icon: Icon, white, ...rest}){
  return(
    <Container $white={white}>
      {Icon && <Icon/>}
      <input  {...rest}/>
    </Container>
  )
}

