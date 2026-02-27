# Credit Simulator

Esta é uma calculadora de financiamento simples escrita em JavaScript para calcular a prestação mensal, a Taxa Anual Nominal (TAN), a Taxa Anual Efetiva Global (TAEG) e o Montante Total Imputado ao Consumidor (MTIC).

## Funções Principais

### `calcularPrestacaoMensal(principal, taxaAnual, numeroMeses)`

Calcula a prestação mensal com base no principal, taxa anual e número de meses.

### `calcularMTIC(prestacaoMensal, numeroMeses)`

Calcula o Montante Total Imputado ao Consumidor (MTIC) com base na prestação mensal e no número de meses.

### `calcularTAEG(numeroMeses)`

Calcula a Taxa Anual Efetiva Global (TAEG) com base no número de meses. A fórmula é ajustada linearmente.

### `calcularTAN(prazo)`

Calcula a Taxa Anual Nominal (TAN) com base no prazo. A fórmula é ajustada linearmente.

### `updateResults()`

Atualiza dinamicamente os resultados na interface com base nos valores dos controles deslizantes.

## Eventos

-   `DOMContentLoaded`: Atualiza os resultados quando a página é carregada.
-   `input`: Atualiza os resultados em tempo real conforme os controles deslizantes são movidos.