## Resumo do exercício

Este script JavaScript oferece a funcionalidade de gerar senhas aleatórias com base em diferentes conjuntos de caracteres. Vamos explorar as principais características do código:

### Conjuntos de Caracteres

O objeto `charactersPassword` é fundamental para o funcionamento do script. Ele contém quatro conjuntos de caracteres:

- Letras maiúsculas: `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`
- Letras minúsculas: `'abcdefghijklmnopqrstuvwxyz'`
- Números: `'0123456789'`
- Símbolos: `'!@#$%^&*()_-+=<>?/'`

Cada conjunto é associado a uma chave específica, como `uppercase`, `lowercase`, `numbers`, e `symbols`.

### Elementos do DOM

O script interage com elementos do Document Object Model (DOM) para exibir e manipular as senhas. Os principais elementos são:

- `passwordOutput`: Representa o campo de texto onde as senhas geradas são exibidas.
- `generatePasswordBtn`: Botão responsável por acionar a geração de uma nova senha.
- `clearPasswordBtn`: Botão que permite limpar o campo de senha.

### Função `generatePassword`

Esta função é acionada ao clicar no botão "Gerar Senha". Ela realiza os seguintes passos:

1.  **Conversão dos Conjuntos de Caracteres em uma String Única:**

- Todos os conjuntos de caracteres são combinados em uma única string.
- A string resultante é convertida em um array de caracteres.

2.  **Iteração para Criar a Senha:**

- Um loop gera a senha caractere por caractere.
- A cada iteração, um índice aleatório é utilizado para selecionar um caractere do array de caracteres combinados.

3.  **Exibição da Senha:**

- A senha gerada é exibida no campo de texto.

### Função `clearPassword`

Esta função é associada ao botão "Limpar Senha". Seu propósito é simplesmente limpar o campo de texto, removendo a senha exibida.
