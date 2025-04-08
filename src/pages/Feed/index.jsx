import { useState, useEffect } from 'react'
import { Container, Content } from './styles'
import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

export function Feed() {
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])
  return (
    <Container>
      <Header />
      <div className="main">
        <div className="filters">
          <h2>Todas as notas</h2>
          <div className="tags">
            {tags && tags.map((tag) => <Tag key={String(tag.id)} title={tag.name} />)}
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
