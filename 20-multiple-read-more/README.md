## "Read More" Functionality
Este script JavaScript permite criar um efeito "Read More" em textos longos, ocultando parte do conteúdo inicialmente e revelando-o quando um botão é clicado.

1.  **Configuração Inicial:**
   -   A constante `limitChars` define o número máximo de caracteres a serem exibidos inicialmente.
   -   `contents` seleciona todos os elementos com a classe `.content`, que contêm o texto a ser manipulado.
   -   `readMoreButtons` seleciona todos os botões que acionarão a leitura de mais conteúdo.
    
2.  **Modificação do Conteúdo:**
   -   O método `slice` do JavaScript é usado para dividir o texto em duas partes: `displayText` (texto inicial) e `moreText` (texto oculto).
   -   O conteúdo é modificado usando `innerHTML`. O texto inicial é exibido normalmente, enquanto o texto oculto é envolto em elementos `<span>` com classes específicas (`dots` e `more`) para manipulação posterior.
    
3.  **Toggle do Conteúdo:**
   -   Quando um botão "Read More" é clicado, a função `readMore` é acionada.
   -   A função identifica o contêiner pai do botão através do `parentElement`.
   -   O método `classList.toggle` é usado para alternar a classe `hide` nos elementos `.dots` e `.more`, revelando ou ocultando o conteúdo adicional.
   -   O texto do botão é alternado entre "Read More" e "Read Less" conforme a visibilidade do conteúdo adicional.
    
4.  **Aplicação a Todos os Botões:**
   -   Um loop `forEach` é usado para adicionar um ouvinte de evento (`click`) a todos os botões identificados anteriormente.