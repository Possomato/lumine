import { Tag } from '../Tag';
import { Container } from './styles';

export function Note({ data, ...rest }) {
    // Função para formatar a data
    const formatDate = (dateString) => {
        if (!dateString) return "Sem data";
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', options);
    };

    // Função para limitar o texto da descrição
    const truncateText = (text, maxLength = 100) => {
        if (!text) return "Sem conteúdo disponível";
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    return (
        <Container {...rest}>
            <h2>{data.title || "Sem título"}</h2>
            <span>{formatDate(data.updated_at)}</span>
            <p>{truncateText(data.description)}</p>
            {data.tags && data.tags.length > 0 && (
                <footer>
                    {data.tags.map((tag) => (
                        <Tag key={tag.id} title={tag.name} />
                    ))}
                </footer>
            )}
        </Container>
    );
}
