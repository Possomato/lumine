import { Container, Content } from './styles.js'

import { Button } from '../../components/Button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <h1>Crítica da razão pura</h1>
          <span>25/05/2025</span>
          <p>
            Kant questiona os limites do conhecimento humano e a relação entre
            experiência e razão, propondo que todo conhecimento começa com a
            experiência, mas não deriva inteiramente dela. Para ele, o sujeito
            cognoscente possui estruturas a priori — como espaço e tempo — que
            organizam os dados sensíveis e tornam o conhecimento possível. Essas
            formas de percepção e categorias do entendimento atuam como filtros
            que moldam a maneira como o ser humano apreende o mundo, permitindo
            que os fenômenos sejam conhecidos. No entanto, essas estruturas só
            permitem acessar os fenômenos, ou seja, as aparências das coisas,
            enquanto as “coisas em si”, a essência última dos objetos,
            permanecem inacessíveis à razão humana.{' '}
          </p>
          <Section title="Referências">
            <ul>
              <li>teste1</li>
              <li>teste2</li>
            </ul>
          </Section>
          <Section title="Tags">
            <Tag title="Kant" />
          </Section>
          <div className="buttons">
            <Button title="Excluir" excluir={true} />
            <Button title="Editar" excluir={false} />
          </div>
        </Content>
      </main>
    </Container>
  )
}
