## Resumo do exercício

1.  **Palavras a Exibir:**
 -   O script inicia com uma lista de palavras emocionantes: 'Awesome', 'Fun', 'Cool', 'Weird', 'Famous'.
    
2.  **Elemento de Texto Digitado:**
   -   O elemento HTML com a classe `.typed-text` é selecionado, e este é o local onde as palavras serão exibidas.
   
3.  **Variáveis de Controle:**
   -   `index` controla a palavra atual na lista.
   -    `charIndex` controla o índice do caractere atual na palavra.
   
4.  **Funções Principais:**
   -   `handleTypeWords`: Digita a palavra atual, caractere por caractere, no elemento `.typed-text`. Em seguida, configura um temporizador para chamar recursivamente a função após 200 milissegundos.
   
   -   `handleEraseWords`: Apaga a palavra atual, caractere por caractere, no elemento `.typed-text`. Novamente, configura um temporizador para chamar recursivamente a função após 200 milissegundos.

5.  **Evento DOMContentLoaded:**
-   Quando o conteúdo do documento é totalmente carregado, o script inicia a digitação após um atraso inicial de 2 segundos.