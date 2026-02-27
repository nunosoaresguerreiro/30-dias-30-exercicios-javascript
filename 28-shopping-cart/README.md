# Shopping Cart

Este é um aplicativo simples de carrinho de compras em que os utilizadores podem adicionar produtos ao carrinho, visualizar o total da compra e limpar o carrinho com um clique.

## Funcionalidades

- **Adicionar produtos ao carrinho**: Cada produto tem um botão que adiciona o item ao carrinho.
- **Atualização automática**: O carrinho exibe os produtos adicionados e calcula o total dinamicamente.
- **Remover todos os itens**: Um botão permite esvaziar o carrinho rapidamente.

## Como funciona?

### Lógica principal:

- **`addToCart(nome, preço)`**  
  - Adiciona um produto ao carrinho ou aumenta a quantidade se ele já existir.  
- **`updateCart()`**  
  - Atualiza a interface do usuário, mostrando a lista de produtos e o total da compra.  
- **`resetCart()`**  
  - Limpa o carrinho e redefine o total para **0€**.  

### Event Listeners

- **Clique no botão "Adicionar ao Carrinho"** → Chama `addToCart()`
- **Clique no botão "Esvaziar Carrinho"** → Chama `resetCart()`
