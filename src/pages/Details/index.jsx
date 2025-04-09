import { useState, useEffect } from 'react'
import { Container, Content } from './styles.js'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { api } from '../../services/api.js'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  async function handleRemove() {
    const confirm = window.confirm('Confirma a deleção da nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return 'Sem data'
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', options)
  }

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <h1>{data.title}</h1>
            <span>{formatDate(data.updated_at)}</span>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Referências">
                <ul>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            {data.tags && (
              <Section title="Tags">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <div className="buttons">
              <Button title="Excluir" excluir={true} onClick={handleRemove} />
              {/* <Button title="Editar" excluir={false} /> */}
            </div>
          </Content>
        </main>
      )}
    </Container>
  )
}
