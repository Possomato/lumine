import { useState } from 'react'
import { Container, Form, Tags } from './styles.js'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea/index.jsx'
import { NoteItem } from '../../components/NoteItem/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Button } from '../../components/Button/index.jsx'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    if (!newLink.trim()) {
      alert('O link não pode estar vazio!')
      return
    }

    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    if (!newTag.trim()) {
      alert('A tag não pode estar vazia!')
      return
    }

    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })

    alert('Nota criada!')

    navigate('/')
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <h1>Criar nota</h1>

          <Input
            placeholder="Título"
            white={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Texto"
            white={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Referências" />
          {links.map((link, index) => (
            <NoteItem
              key={String(index)}
              value={link}
              onClick={() => handleRemoveLink(link)}
            />
          ))}
          <NoteItem
            placeholder="Novo Link"
            isNew={true}
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />

          <Section title="Tags" />

          <Tags>
            {tags.map((tag, index) => (
              <NoteItem
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                key={String(index)}
              />
            ))}
            <NoteItem
              placeholder="Nova Tag"
              isNew={true}
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Tags>

          <div className="buttons">
            <Button title="Excluir" excluir={true} />
            <Button title="Salvar" excluir={false} onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
