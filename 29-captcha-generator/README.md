## Resumo do exercício

Este exercício apresenta uma implementação didática de um sistema de CAPTCHA gerado dinamicamente com JavaScript. O objetivo é trabalhar conceitos fundamentais de manipulação do DOM, geração de valores aleatórios e validação de inputs.

O utilizador deve introduzir corretamente os caracteres apresentados visualmente no CAPTCHA para que a validação seja considerada bem-sucedida.

---

**Funcionalidades Principais:**

1. **Geração Aleatória de Caracteres:**

- O CAPTCHA é composto por 6 caracteres aleatórios.
- Os caracteres são selecionados a partir de um array que inclui letras maiúsculas, minúsculas e números.
- A seleção é feita através da expressão: allCharacters[Math.floor(Math.random() * allCharacters.length)]

- Esta fórmula garante que o índice escolhido está dentro dos limites do array.

---

2. **Estilização Dinâmica dos Caracteres:**

- Cada caractere é inserido num elemento `<span>`.
- São aplicados estilos aleatórios para dificultar a leitura automática:
- Rotação entre -45° e 45°
- Tamanho de fonte entre 15px e 25px

- A rotação é calculada com: Math.floor(Math.random() * 91) - 45

- O tamanho da fonte é calculado com: Math.floor(Math.random() * 11) + 15

---

3. **Manipulação do DOM:**

- Utilização de `document.querySelector()` para selecionar elementos da página.
- Criação dinâmica de elementos com `document.createElement()`.
- Inserção dos elementos no DOM com `appendChild()`.
- Limpeza de conteúdo através de `innerHTML` e `innerText`.

---

4. **Validação do CAPTCHA:**

- O valor introduzido pelo utilizador é comparado com o texto presente no container do CAPTCHA.
- A comparação é feita com operador estrito `===` para evitar coerções implícitas.
- Caso o valor esteja correto:
- É apresentada mensagem de sucesso.
- Após 2 segundos, o CAPTCHA é regenerado.
- Caso esteja incorreto:
- É apresentada mensagem de erro.

---

5. **Gestão de Eventos:**

- `DOMContentLoaded` garante que o CAPTCHA é gerado apenas após o carregamento completo do DOM.
- `click` no botão de verificação executa a função de validação.
- `click` no botão de reload limpa o estado atual e gera um novo CAPTCHA.
- `preventDefault()` impede o comportamento padrão do botão (como submissão de formulário).

---

6. **Organização do Código:**

O script está organizado em três partes principais:

- Variáveis (seleção de elementos)
- Funções (lógica principal)
- Event Listeners (interação com o utilizador)

Esta separação melhora a legibilidade, manutenção e escalabilidade do código.

---

**Conceitos Trabalhados neste Exercício:**

- Arrays
- Loops `for`
- Math.random() e geração de intervalos
- Manipulação dinâmica do DOM
- Eventos
- Comparação estrita (`===`)
- Separação entre lógica e interface

---

**Observação Importante:**

Este CAPTCHA é uma implementação visual com fins didáticos.  
Não representa um sistema de segurança real, pois o valor pode ser inspecionado diretamente através do console.

O objetivo do exercício é reforçar:

- Pensamento lógico
- Manipulação de elementos dinâmicos
- Controlo de estado
- Interação utilizador-interface