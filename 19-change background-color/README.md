## Resumo do exercício

Este script cria uma aplicação simples para mudar a cor de fundo de um elemento HTML, neste caso, o elemento `main`. A aplicação oferece quatro maneiras diferentes de mudar a cor:

1.  **Aleatória (`btnRandom`):** Gera uma cor aleatória em formato hexadecimal e atualiza o fundo do elemento `main` com essa cor.
    
2.  **Sequencial (`btnArray`):** Utiliza um array predefinido de cores e, a cada clique, passa para a próxima cor no array, atualizando o fundo do elemento `main`.
    
3.  **A partir de um arquivo JSON (`btnFetch`):** Faz uma requisição assíncrona a um arquivo local (`colors.json`), que contém um array de cores. Ao clicar, a aplicação busca a próxima cor no array e atualiza o fundo do elemento `main`.

4.  **Através de um seletor de cores (`colorPicker`)**  escolher uma cor diretamente através de um seletor de cores (`colorPicker`), e ao alterar a cor no seletor, atualizar instantaneamente o fundo do elemento `main`.
    
O código utiliza funções assíncronas (`fetchColors`) para lidar com a requisição do arquivo JSON e manipulação da resposta. As funções são associadas a diferentes botões e eventos para proporcionar diferentes maneiras de interagir e mudar as cores na aplicação.