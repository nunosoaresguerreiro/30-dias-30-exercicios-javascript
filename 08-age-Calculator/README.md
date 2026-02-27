## Age Calculator

Esta é uma app simples de JavaScript que calcula a idade com base na data de nascimento inserida, exibindo a idade em anos, meses e dias.

### Função Principal (`ageCalculate`)

A função principal é invocada quando o botão "Calcular" é clicado. Ela obtém a data atual e a data de nascimento, calcula a diferença e exibe o resultado.

### Funções Auxiliares

1.  **`calculateAge`**: Calcula a idade em anos, meses e dias com base na data de nascimento e na data atual.
    
2.  **`getDaysInMonth`**: Retorna o número de dias em um determinado mês.
    
3.  **`displayResult`**: Exibe o resultado na página.
    
4.  **`isFutureDate`**: Verifica se a data de nascimento está no futuro.
    

### Event Listeners

O botão "Calcular" tem um event listener que invoca a função principal (`ageCalculate`) quando clicado.