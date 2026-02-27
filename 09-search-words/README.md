## Resumo do exercício

1.  **Elementos-Chave:**
    -   O texto a ser explorado é representado por um elemento HTML com o ID `content` e tag `<p>`.
    -   Um botão de pesquisa (`#searchBtn`) e uma caixa de entrada (`#searchBox input`) dão vida à interatividade.

2.  **Variáveis Essenciais:**
    -   `originalContent`: Armazena o conteúdo original do texto para ser usado no processo de reset.

3.  **Busca usando RegExp:**
    -   `handleSearchRegex`: Ao clicar no botão de pesquisa, este método utiliza expressões regulares para destacar todas as ocorrências da palavra-chave inserida no texto. A busca é global e não diferencia maiúsculas de minúsculas.

4.  **Busca usando o Método `includes`:**
    -   `handleSearchInclude`: Este método fornece uma abordagem alternativa, realizando uma busca sem o uso de expressões regulares. Ele destaca a substring fornecida no texto, se presente, e exibe uma mensagem de alerta se a substring não for encontrada.
    
5.  **Reset da Pesquisa:**
    -   `handleReset`: Ao clicar no botão de reset, este método restaura o conteúdo original do texto e limpa o valor da caixa de pesquisa.