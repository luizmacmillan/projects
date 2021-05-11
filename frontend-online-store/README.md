# O que foi desenvolvido

Neste projeto foi criada uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvendo, em grupo, suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho. A partir dessas demandas, temos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

## Requisitos do projeto

#### 1. IMPLEMENTAR MÓDULO DE ACESSO À API DO MERCADO LIVRE

Implemente um módulo que acessa a API do Mercado Livre

#### 2. CRIAR PÁGINA DE LISTAGEM DE PRODUTOS VAZIA

Criar o campo de busca da tela principal, a listagem de produtos, inicialmente vazia. A listagem vazia deve conter a mensagem "Digite algum termo de pesquisa ou escolha uma categoria" (veja os detalhes do card).

#### 3. CRIAR PÁGINA DO CARRINHO DE COMPRAS

Criar o botão de carrinho de compras na tela principal, de listagem de produtos, e criar uma tela para o carrinho de compras, inicialmente vazio (veja os detalhes do card).

#### 4. LISTAR AS CATEGORIAS DE PRODUTOS DISPONÍVEIS VIA API NA PÁGINA PRINCIPAL

Listar filtros de categoria obtidos da API na tela principal, de listagem do produto. A requisição da API para recuperar as categorias deve ser feita uma única vez após o carregamento da tela (veja os detalhes do card).

#### 5. BUSCAR POR TERMOS E RECEBER UMA LISTAGEM DE PRODUTOS, COM DADOS RESUMIDOS, ASSOCIADOS A ESSES TERMOS

Criar a listagem de produtos. Fazer a exibição resumida do produto (o "card" que aparece na listagem). A exibição deve ter título, foto e preço. Fazer requisição à API do Mercado Livre enviando os termos buscados por quem usa e usar o retorno para fazer a listagem dos produtos. Se a busca não retornar resultados, gerar a tela correspondente com o texto "Nenhum produto foi encontrado" (veja os detalhes no card).

#### 6. SELECIONAR UMA CATEGORIA E VER SOMENTE PRODUTOS DAQUELA CATEGORIA

Como pessoa usuária, eu quero clicar em uma categoria e ver a listagem de produtos ser filtrada de  acordo com os produtos daquela categoria (veja os detalhes no card).

#### 7. CLICAR NA EXIBIÇÃO RESUMIDA DE UM PRODUTO E IR PARA UMA TELA COM SUA EXIBIÇÃO DETALHADA

Como pessoa usuária, eu quero clicar no card do produto e visualizar a exibição detalhada do produto com nome do produto, imagem, preço e especificação técnica. A tela também deve possuir um botão que leve ao carrinho de compras (veja os detalhes no card).

#### 8. ADICIONAR PRODUTOS A PARTIR DA TELA DE LISTAGEM DE PRODUTOS

Na tela de listagem de produtos, permitir adicionar o produto ao carrinho (veja os detalhes no card).

#### 9. ADICIONAR UM PRODUTO AO CARRINHO A PARTIR DE SUA TELA DE EXIBIÇÃO DETALHADA

Na tela de listagem de produtos, permitir adicionar o produto ao carrinho (veja os detalhes no card).

#### 10. VISUALIZAR A LISTA DE PRODUTOS ADICIONADOS AO CARRINHO EM SUA PÁGINA E MANIPULAR SUA QUANTIDADE

Adicionar lista de produtos ao carrinho, com valor total ao final. Criar botões (-) e (+) para cada produto do carrinho, permitindo alterar a quantidade desejada de cada produto. A quantidade não pode ser negativa. Criar também botão (X) para remover produtos do carrinho e botão para finalizar a compra (veja os detalhes no card).

#### 11. AVALIAR E COMENTAR ACERCA DE UM PRODUTO EM SUA TELA DE EXIBIÇÃO DETALHADA

Adicionar formulário ao produto, em sua exibição detalhada, para permitir adicionar avaliações com nota de 1 a 5 estrelas e comentários (o comentário deve ser opcional, sendo possível enviar apenas a nota). Exibir a lista de avaliações já feitas. Se quem usa sai e volta da tela, a nota e as avaliações não devem ser apagadas (veja os detalhes no card).

#### 12. FINALIZAR COMPRA, VENDO UM RESUMO DELA, PREENCHENDO OS MEUS DADOS E ESCOLHENDO A FORMA DE PAGAMENTO

Implementar tela para a finalização da compra. A tela deve conter uma seção para revisão dos produtos com o valor total da compra, um formulário para ter as informações do comprador e um a seção para escolher o método de pagamento. Ao se clicar em "Comprar", deve-se validar que o formulário está preenchido e que a forma de pagamento foi escolhida e, em caso positivo, deve-se zerar o estado, redirecionar para a tela inicial (listagem de produtos). Caso algo não tenha sido preenchido, mantém-se na mesma tela com o dados sem apagar e destaca-se os campos não preenchidos em vermelho (veja os detalhes no card).

---

### Sobre repositório utilizado para realizar o projeto

[Repositório do projeto Trybe](https://github.com/tryber/sd-06-project-frontend-online-store)
