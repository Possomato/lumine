import { Container, Content } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

export function Feed() {
  return (
    <Container>
      <Header />
      <div className="main">
        <div className="filters">
          <h2>Todas as notas</h2>
          <div className="tags">
            <Tag title="teste" />
            <Tag title="teste" />
            <Tag title="teste" />
            <Tag title="teste" />
            <Tag title="teste" />
          </div>
        </div>
        <Content>
          <Note
            data={{
              title: 'A Crítica da Razão Pura',
              date: '24/05/2025',
              text: 'Kant, questiona os limites do conhecimento humano e a relação entre experiência e razão…',
              tags: [
                { id: '1', title: 'Kant' },
                { id: '2', title: 'Filosofia' },
              ],
            }}
          />
        </Content>
      </div>
    </Container>
  )
}
