# O que foi desenvolvido

Foi desenvolvido um jogo de perguntas e respostas baseado no jogo **Trivia** _(tipo um show do milhão americano rs)_ utilizando _React e Redux_, desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro _Kanban_. A partir dessas demandas, temos uma aplicação onde a pessoa usuária pode:

  - Logar no jogo e, se o email tiver cadastro no site [Gravatar](https://pt.gravatar.com/), ter sua foto associada ao perfil de pessoa usuária.
  - Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
  - Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
  - Visualizar a página de ranking, se quiser, ao final de cada jogo.
  - Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.

## REQUISITOS DO PROJETO

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking. Lembrem-se de utilizar os conhecimentos adquiridos ao longo dos últimos projetos nas ferramentas do React como o Router, Link, Redux e testes para ajudá-los a completar os requisitos.

### Tela de início/login

#### 1. CRIE A TELA DE LOGIN, ONDE A PESSOA QUE JOGA DEVE PREENCHER AS INFORMAÇÕES PARA INICIAR UM JOGO

  Criar a tela de login contendo as informações de nome e email, onde a pessoa que joga deve conseguir escrever seu nome e email nos inputs e o botão de jogar deve estar desabilitado caso não tenha alguma dessas informações.


#### 2. CRIE O BOTÃO DE INICIAR O JOGO

  O botão "Jogar" deve fazer requisição para a API para obter o token e redirecionar a pessoa para tela de jogo

#### 3. CRIE UM BOTÃO QUE LEVA A PESSOA PARA TELA DE CONFIGURAÇÃO

  A tela inicial deve conter um botão que leve para a configuração do jogo

### Tela de jogo

#### 4. CRIE UM _HEADER_ QUE DEVE CONTER AS INFORMAÇÕES DA PESSOA JOGADORA

  O header deve conter as informações sobre a pessoa jogadora, como a imagem do Gravatar, o nome e o placar

#### 5. CRIE A PÁGINA DE JOGO QUE DEVE CONTER AS INFORMAÇÕES RELACIONADAS À PERGUNTA

  Deve ser feita a requisição para a API para popular o jogo com as perguntas, categoria e alternativas

#### 6. DESENVOLVA O JOGO ONDE SÓ DEVE SER POSSÍVEL ESCOLHER UMA RESPOSTA CORRETA POR PERGUNTA

  A pergunta deve ter apenas uma alternativa correta

#### 7. DESENVOLVA O ESTILO QUE, AO CLICAR EM UMA RESPOSTA, A CORRETA DEVE FICAR VERDE E AS INCORRETAS, VERMELHAS

  Ao responder a pergunta, se a alternativa for correta, deve ficar verde, caso contrário, vermelha

#### 8. DESENVOLVA UM TIMER ONDE A PESSOA QUE JOGA TEM 30 SEGUNDOS PARA RESPONDER

  A página deve conter um timer que com o tempo máximo de 30 segundos para responder, caso ultrapasse o tempo, a pergunta é considerada errada

##### 9. CRIE O PLACAR COM AS SEGUINTES CARACTERÍSTICAS:

  Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando

#### 10. CRIE UM BOTÃO DE "PRÓXIMA" QUE APAREÇA APÓS A RESPOSTA SER DADA

  Deve aparecer um botão de "Próxima" (pergunta) após a resposta ser dada

#### 11. DESENVOLVA O JOGO DE FORMA QUE A PESSOA QUE JOGA DEVE RESPONDER 5 PERGUNTAS NO TOTAL

  O jogo deve ser composto por 5 perguntas, onde, a cada nova pergunta, o timer é reiniciado e após respondê-las, a pessoa que joga deve ser redirecionada para a tela de feedback

### Tela de feedback

#### 12. DESENVOLVA O HEADER DE _FEEDBACK_ QUE DEVE CONTER AS INFORMAÇÕES DA PESSOA JOGADORA

  A tela de feedback deve conter as informações da pessoa que joga, incluindo o placar com o valor referente ao desempenho no jogo

#### 13. CRIE A MENSAGEM DE _FEEDBACK_ PARA SER EXIBIDA A PESSOA USUÁRIA

  A tela de feedback deve exibir uma mensagem relacionada ao desempenho da pessoa que jogou

#### 14. EXIBA AS INFORMAÇÕES RELACIONADAS AOS RESULTADOS OBTIDOS PARA A PESSOA USUÁRIA

  A tela de feedback deve exibir informações sobre o desempenho da pessoa, como o placar final e o número de perguntas que acertou

#### 15. CRIE A OPÇÃO PARA A PESSOA JOGADORA PODER JOGAR NOVAMENTE

  A pessoa terá a opção "Jogar novamente", que ao ser clicada, levará para a tela de inicial

#### 16. CRIE A OPÇÃO PARA A PESSOA JOGADORA PODER VISUALIZAR A TELA DE _RANKING_

  Deve existir um botão que redirecione a pessoa para a tela de ranking

### Tela de ranking

#### 17. CRIE A TELA DE _RANKING_

  A tela de ranking deve possuir uma lista com a imagem, nome e pontuação das pessoas que jogaram e deve ficar armazenado no localStorage

#### 18. CRIE UM BOTÃO PARA IR AO INÍCIO

  O botão deve redirecionar a pessoa para a tela de inicial (login)

---

### Sobre repositório utilizado para realizar o projeto

[Repositório do projeto Trybe](https://github.com/tryber/sd-06-project-trivia-react-redux)
