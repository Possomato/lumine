import { Container } from './styles'

export function Button({ title, loading = false, excluir }) {
  return (
    <Container type="button" disabled={loading} $excluir={excluir}>
      {loading ? 'carregando...' : title}
    </Container>
  )
}
