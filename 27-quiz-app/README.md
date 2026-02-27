## Resumo do exercício

Este exercício apresenta uma aplicação interativa de Quiz desenvolvida em JavaScript puro. O utilizador responde a um conjunto de perguntas de escolha múltipla e, no final, recebe o resultado com a pontuação obtida.

O objetivo principal é trabalhar manipulação dinâmica do DOM, controlo de estado, eventos e lógica condicional.

---

**Funcionalidades Principais:**

1. **Estrutura de Dados do Quiz:**

- As perguntas são armazenadas num array de objetos.
- Cada objeto contém:
  - `question` → texto da pergunta
  - `options` → array com as opções de resposta
  - `answer` → índice da resposta correta

Exemplo de estrutura: 
question: 'Pergunta...',
options: ['Opção A', 'Opção B', 'Opção C'],
answer: 1
}

Esta abordagem facilita a escalabilidade e manutenção do código.

---

2. **Renderização Dinâmica das Perguntas:**

- A função `loadQuestion()`:
  - Obtém a pergunta atual com base no índice.
  - Cria elementos dinamicamente com `createElement()`.
  - Atualiza o progresso (ex: "1/5").
  - Gera botões para cada opção.
  - Limpa o conteúdo anterior antes de renderizar a nova pergunta.

- Cada botão recebe um `data-index` para identificar a opção selecionada.

---

3. **Controlo de Estado:**

O quiz é controlado por duas variáveis principais:

- `currentQuestionIndex` → controla qual pergunta está ativa.
- `score` → armazena a pontuação do utilizador.

Estas variáveis representam o estado da aplicação.

---

4. **Validação da Resposta:**

- Quando o utilizador clica numa opção, o índice selecionado é comparado com a resposta correta.
- A comparação é feita com `===` (comparação estrita).
- Se estiver correta, a pontuação é incrementada.
- O quiz avança automaticamente para a próxima pergunta.

Se todas as perguntas forem respondidas:
- É exibido o resultado final.

---

5. **Event Delegation:**

O script utiliza Event Delegation: quizContainer.addEventListener('click', event => { ... });

Em vez de adicionar um event listener a cada botão individualmente, o evento é escutado no container principal.

Vantagens:
- Melhor performance.
- Código mais limpo.
- Funciona mesmo com elementos criados dinamicamente.

---

6. **Reinício do Quiz:**

Após a exibição do resultado final:
- É criado dinamicamente um botão "Reiniciar Quiz".
- Ao clicar, o estado é reiniciado:
  - `currentQuestionIndex = 0`
  - `score = 0`
- O quiz é carregado novamente.

---

7. **DOMContentLoaded:**

O evento: document.addEventListener('DOMContentLoaded', loadQuestion);

Garante que o quiz só é carregado após o DOM estar completamente disponível.

---

**Conceitos Trabalhados neste Exercício:**

- Arrays de objetos
- Manipulação dinâmica do DOM
- Event Delegation
- data-attributes
- Comparação estrita (`===`)
- Controlo de estado
- Fluxo condicional
- Template alternativo com `innerHTML`

---

**Boas Práticas Demonstradas:**

- Separação entre dados e interface
- Estrutura modular de funções
- Uso de `createElement()` para maior segurança e flexibilidade
- Código preparado para expansão (adicionar novas perguntas é simples)

---

**Possíveis Melhorias Futuras:**

- Adicionar temporizador por pergunta
- Mostrar feedback visual imediato (correto/incorreto)
- Impedir múltiplos cliques na mesma pergunta
- Armazenar pontuação no localStorage
- Adicionar animações de transição

---

Este exercício é excelente para consolidar:

- Lógica de aplicações interativas
- Estruturação de dados
- Controlo de fluxo
- Pensamento modular em JavaScript