import { Tag } from '../Tag'
import { Container } from './styles'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <span>{data.date}</span>
      <p>{data.text}</p>
      {data.tags && (
        <footer className='tags'>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </footer>
      )}
    </Container>
  )
}
