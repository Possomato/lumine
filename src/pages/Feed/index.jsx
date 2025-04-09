import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Content } from './styles'
import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

export function Feed() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected((prevState) => [...prevState, tagName])
    }
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      console.log(response.data);
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])
  return (
    <Container>
      <Header searchState={(e) => setSearch(e.target.value)} />
      <div className="main">
        <div className="filters">
          <h2>Todas as notas</h2>
          <div className="tags">
            {tags &&
              tags.map((tag) => (
                <Tag
                  key={String(tag.id)}
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}
                />
              ))}
          </div>
        </div>
        <Content>
          {notes.map((note) => (
            <Note
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>
      </div>
    </Container>
  )
}
