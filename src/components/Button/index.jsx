import { Container } from './styles'

export function Button({ title, loading = false, excluir, ...rest }) {
  return (
    <Container type="button" disabled={loading} $excluir={excluir} {...rest}>
      {loading ? 'carregando...' : title}
    </Container>
  )
}
