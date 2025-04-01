import {Container} from './styles.js'

export function TextArea({value, ...rest}){
  return(
    <Container {...rest}>
      {value}
    </Container>
  )
}