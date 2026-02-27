## Resumo do exercício

1.  **Campo de Entrada e Saída:**
   -   `inputField`: Onde você insere suas palavras mágicas.
   -   `outputField`: O local onde a magia textual acontece, exibindo o resultado transformado.
   
2.  **Botões Mágicos:**
   -   `buttons`: Uma coleção de botões encantados, cada um com um propósito único.
   -   `deleteBtn`: Um botão especial para apagar toda a magia e começar de novo.
   
3.  **Ações dos Botões:**
   -   Cada botão tem uma ação específica quando pressionado, desde transformar o texto para maiúsculas ou minúsculas até adicionar efeitos de negrito, itálico ou sublinhado.
   -   A função `resetStyles` é a chave mestra que restaura os estilos padrão e remove qualquer formatação anterior.
   
4.  **Lógica e Flexibilidade:**
   -   A abordagem de usar `querySelectorAll` para selecionar e iterar sobre os botões oferece flexibilidade e escalabilidade, tornando o código fácil de manter mesmo com a adição de novos botões mágicos.
   
5.  **Validação de Entrada:**
   -   Antes de realizar qualquer magia, o script verifica se há texto no campo de entrada. Caso contrário, ele alerta o utilizador para inserir algum texto antes de prosseguir.
   
6.  **Evento de Entrada e Exclusão:**
   -   O evento de entrada (`input`) está ativo para atualizar o texto de saída sempre que algo novo for digitado.
   -   O botão de exclusão (`deleteBtn`) limpa não apenas o texto, mas também reinicia todos os estilos mágicos.
   
7.  **Funções Auxiliares:**
   -   `capitalizeText`: Uma função auxiliar que capitaliza a primeira letra de cada palavra, adicionando um toque elegante.