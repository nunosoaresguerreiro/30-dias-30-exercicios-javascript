## Guess the Number

A aplicação gera um número aleatório entre 1 e 10, e o utilizador precisa adivinhar o número correto. O jogo fornece feedback sobre se o palpite é muito alto, muito baixo ou correto.

### Recursos

- Utiliza JavaScript para atualizar dinamicamente o interface.
- Impede entradas inválidas no input e fornece alertas de orientação.
- O jogo acompanha o número de tentativas e exibe uma mensagem de sucesso ao vencer.

### Explicação do Código

#### Variáveis

- `output`: Representa a área de saída onde são exibidas as mensagens do jogo.
- `numberOfGuessesSpan`, `guessedNumsSpan`: Elementos para exibir o número de tentativas e os números adivinhados.
- `game`, `guessInput`: Elementos representando a área do jogo e o campo de entrada do utilizador.
- `restartButton`, `checkButton`: Elementos para reiniciar o jogo e verificar o palpite.
- `answer`: Mantém o número gerado aleatoriamente.
- `numberOfGuesses`: Acompanha o número de tentativas.
- `guessedNumsArr`: Armazena os números adivinhados.

#### Funções

- `validateInput(userGuess)`: Valida a entrada do utilizador, mostra um alerta para entrada inválida e retorna `true` se a entrada for válida.
- `play()`: Lógica principal do jogo, verifica se o palpite está correto, lida com as condições de vitória/derrota e atualiza a interface de acordo.
- `handleGameWin()`, `handleGameLose(input)`: Mostra mensagens apropriadas e atualiza a interface com base no resultado do jogo.
- `restart()`: Reinicia o jogo.

#### Event Listeners

- `checkButton`: Aciona a função `play` ao clicar.
- `restartButton`: Reinicia o jogo ao clicar.
