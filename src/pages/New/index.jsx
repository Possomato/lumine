import { Container, Form, Tags } from './styles.js'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea/index.jsx'
import { NoteItem } from '../../components/NoteItem/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <h1>Criar nota</h1>

          <Input placeholder="Título" white={true} />
          <TextArea placeholder="Texto" white={true} />

          <Section title="Referências" />
          <NoteItem value="treste" isNew={false} />
          <NoteItem placeholder="Novo Link" isNew={true} />

          <Section title="Tags" />

          <Tags>
            <NoteItem value="react" isNew={false} />
            <NoteItem placeholder="Novo Tag" isNew={true} />
            <NoteItem value="react" isNew={false} />
            <NoteItem placeholder="Novo Tag" isNew={true} />
          </Tags>

          <div className="buttons">
            <Button title="Excluir" excluir={true} />
            <Button title="Salvar" excluir={false} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
