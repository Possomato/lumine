import { Container, Form } from './styles.js'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <h1>Criar nota</h1>

          <Input placeholder="Título" white={true}/>
        </Form>
      </main>
    </Container>
  )
}
