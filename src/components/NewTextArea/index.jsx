import { DisplayContainer, InputContainer } from './styles';
import { useState } from 'react';

export function NewTextArea() {
  const [text, setText] = useState('');

  // Função para destacar palavras específicas em negrito
  const formatText = (input) => {
    return input
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') // Destaca palavras entre "**"
      .replace(/\n/g, '<br>') // Substitui "\n" por quebra de linha
      .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Substitui tabulações por espaços visuais
  };

  return (
    <div>
      {/* Campo de entrada */}
      <InputContainer
        placeholder="Digite seu texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Exibição do texto formatado */}
      <DisplayContainer dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    </div>
  );
}
