## Resumo do exercício

Este exercício apresenta uma interface dinâmica para seleção de **Distritos, Concelhos, Cidades e Freguesias** de Portugal.  
A interface atualiza automaticamente as opções disponíveis com base na escolha do utilizador.

## Funcionalidades Principais

1. **Seleção Dinâmica de Dados**
- O utilizador escolhe um **Distrito**, e o campo de **Concelho** é atualizado automaticamente.
- Após selecionar um **Concelho**, as **Cidades** disponíveis são carregadas.
- Ao escolher uma **Cidade**, as **Freguesias** correspondentes são exibidas.

2. **Carregamento de Dados via JSON**
- Os dados são armazenados num ficheiro JSON (`data.json`).
- São carregados assincronamente (`fetch`) e processados em JavaScript.

3. **Manipulação do DOM**
- `document.querySelector()` é utilizado para obter os elementos `<select>`.
- Os dados são inseridos dinamicamente com `document.createElement()` e `appendChild()`.

4. **Reutilização de Código com Funções**
- A função `updateSelect(id, options)` evita repetição de código.
- DRY (Don't Repeat Yourself) é aplicado para tornar o código mais modular e fácil de manter.

