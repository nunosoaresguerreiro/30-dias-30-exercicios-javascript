# **Resumo do Exercício**

Este exercício apresenta uma aplicação para **rastrear receitas e despesas**, permitindo ao utilizador adicionar transações financeiras e visualizar um balanço atualizado em tempo real. A interface exibe o total das **receitas**, **despesas** e o **balanço final** entre eles, proporcionando uma visão clara da gestão financeira pessoal.

## **Funcionalidades Principais**

1. **Gestão de Transações**
   - O utilizador pode adicionar transações de **receitas** e **despesas**.
   - Cada transação possui uma **descrição**, **valor** e **tipo** (receita ou despesa).
   - O botão de **adicionar** permite que o utilizador envie uma nova transação.

2. **Cálculo Automático de Totais**
   - **Receitas**: O total das receitas é calculado com base nas transações de tipo `income`.
   - **Despesas**: O total das despesas é calculado com base nas transações de tipo `expense`.
   - **Balanço Final**: O balanço é calculado subtraindo as **despesas** das **receitas**. A aplicação atualiza automaticamente o valor do balanço sempre que uma nova transação é adicionada ou removida.

3. **Interação com o DOM**
   - O DOM é manipulado para atualizar dinamicamente os totais de receitas, despesas e balanço.
   - As transações são exibidas numa lista, com a opção de **remover** qualquer transação.

4. **Reutilização de Código com Funções**
   - Funções como `addTransaction()`, `updateTotals()` e `removeTransaction()` são usadas para manter o código modular e reutilizável.
   - A função `updateList()` é responsável por atualizar a lista de transações no DOM.
