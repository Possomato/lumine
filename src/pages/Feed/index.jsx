import { Container, Filters } from './styles'
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
            <Tag title="teste"/>
            <Tag title="teste"/>
            <Tag title="teste"/>
            <Tag title="teste"/>
            <Tag title="teste"/>
          </div>
        </div>
      </div>
    </Container>
  )
}
