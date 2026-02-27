# Customer Feedback

Este é um aplicativo simples de feedback interativo construído com HTML, CSS e JavaScript. Os utilizadores podem expressar seu feedback selecionando emojis que representam diferentes classificações. Ao enviar, uma mensagem correspondente é exibida junto com o emoji escolhido.

## Funções

-   `handleRatingClick(evento)`: Lida com cliques nos botões de emoji e atualiza a avaliação selecionada.
-   `handleFeedbackSubmission()`: Exibe a mensagem de feedback ao enviar.
-   `updateRatingStyles()`: Atualiza o estilo visual para destacar o emoji selecionado.
-   `findButtonByRating(avaliação)`: Encontra o botão de emoji com base na avaliação selecionada.

## Event Listeners

-   `click` nos botões de emoji: Chama `handleRatingClick` para lidar com seleções de avaliação.
-   `click` no botão "Enviar Feedback": Chama `handleFeedbackSubmission` para exibir feedback.
-   `click` no botão "Voltar ao Início": Recarrega a página.

### Observações

-   O aplicativo utiliza mensagens dinâmicas para um toque personalizado com base no emoji escolhido.
-   O feedback visual é fornecido através do destaque do emoji selecionado.
-   A página pode ser facilmente recarregada para uma nova sessão de feedback.