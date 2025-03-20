import { Container } from './styles.js'

import { Button } from '../../components/Button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Referências">
        <ul>
          <li>teste1</li>
          <li>teste2</li>
        </ul>
      </Section>
      <Section title="Tags">
        <Tag title="Kant" />
      </Section>
      <Button title="entrar" loading />
      <Button title="cadastrar" />
    </Container>
  )
}
