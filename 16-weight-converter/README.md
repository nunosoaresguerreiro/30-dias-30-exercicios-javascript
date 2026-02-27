## Weight Converter

Este é um simples script em JavaScript que permite converter entre diferentes unidades de peso (quilogramas, libras e onças). O script é projetado para ser usado numa página web que tenha campos de entrada para cada unidade, permitindo  inserir um valor numa unidade e ver instantaneamente os equivalentes nas outras unidades.

### Utilização

1.  **Preenchimento Inicial:** Quando a página é carregada, o script calcula automaticamente os equivalentes em libras (lb) e onças (oz) com base no valor inicial em quilogramas (kg).
    
2.  **Entrada Dinâmica:** Conforme digitamos valores nos campos de entrada, as outras unidades são atualizadas automaticamente para refletir as conversões correspondentes.
    

#### Coerção de Tipo

Os valores dos campos de entrada são convertidos de strings para números usando `parseFloat()` para garantir coerência nas operações matemáticas.

#### Limitação de Casas Decimais

Os resultados das conversões são limitados a duas casas decimais usando `toFixed(2)`, garantindo uma apresentação mais limpa dos valores.

### Refatoração

Uma refatoração do código foi proposta, organizando as funções de conversão como métodos de um objeto chamado `conversion`, tornando o código mais estruturado e fácil de entender.