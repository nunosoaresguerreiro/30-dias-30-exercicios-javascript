## Resumo do exercício

Esta aplicação JavaScript cria uma animação de contagem para elementos HTML. O código usa um intervalo para incrementar os valores de 0 até um valor final especificado no atributo 'data-val' de cada elemento. Cada contagem é ajustada para ocorrer em um intervalo de tempo específico, proporcionando uma animação controlada e visualmente atraente.

**Principais Pontos:**

1.  **Seleção de Elementos:**

- Utiliza `querySelectorAll` para selecionar todos os elementos com a classe 'number' no documento.

2.  **Configuração do Intervalo de Atualização:**

- Define a variável `interval` para determinar o tempo total da animação.

3.  **Iteração sobre Elementos Selecionados:**

- Utiliza `forEach` para iterar sobre cada elemento com a classe 'number'.

4.  **Inicialização do Contador:**

- Inicializa um contador para cada elemento, começando de 0 e indo até o valor final especificado no atributo 'data-val'.

5.  **Controle de Duração da Animação:**

- Calcula a duração de cada incremento do contador para garantir uma animação uniforme.

6.  **Intervalo de Atualização:**

- Utiliza `setInterval` para executar uma função que atualiza o valor do contador em intervalos regulares.

7.  **Atualização do Conteúdo HTML:**

- Atualiza o conteúdo HTML dos elementos para refletir o valor atual do contador durante a animação.

8.  **Verificação e Parada do Intervalo:**

- Verifica se o valor inicial atingiu o valor final e, se sim, interrompe o intervalo de atualização usando `clearInterval`.
