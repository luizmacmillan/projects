# O que foi desenvolvido

Esse projeto é uma continuação do projeto `Trybeer`! Ou seja, o _commit_ inicial nesse repositório será todo o projeto que foi desenvolvido anteriormente.

Nesse projeto foram desenvolvidas novas funcionalidades a partir dos conhecimentos adquiridos nos últimos blocos da Trybe.

No projeto `Trybeer` foi utilizado apenas o banco de dados _MySQL_. Já nesse projeto além do _MySQL_, foi utilizado o _MongoDB_.

Em resumo, o que foi feito:

* Refatorar a camada de modelo para usar Sequelize;
* Possibilitar que um administrador possa mudar o status atual de um pedido para um terceiro tipo `Preparando` e exibir essa informação nas partes que são determinadas;
* Desenvolver um chat onde um cliente possa conversar diretamente com o administrador;

Vale a pena ressaltar que este projeto segue de um projeto Trybeer legado de outro grupo, portanto, eu não participei do desenvolvimento realizado nas implementações feitas que fogem dos requisitos descritos neste README.

---

# Requisitos do projeto

### 1 - Desenvolver os status para o pedido da tela de `Detalhe pedido` do Administrador

- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;.

- O usuário admin deve ter o controle de alterar o status do pedido. Lembre-se de seguir princípio `Open/Closed` de _SOLID_ para está implementação de forma que possam ser acrescentados novos comportamentos e `status` sem impactar os status já existentes.

- Qualquer atualização feita no pedido pelo usuário admin deve se refletir em tempo real para o cliente.

#### Tela de `Detalhe pedido` do Administrador

- O botão 'Preparar pedido' deverá conter a tag `data-testid="mark-as-prepared-btn"`

![Tela de detalhes pedidos Administrador](./public/detalhepedidoadmin.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Detalhes do pedido` do admin

- Será validado que o administrador ao acessar um determinado pedido ele deve visualizar o botão `Preparar Pedido`

- Será validado que o administrador ao acessar um determinado pedido ele deve visualizar o botão `Marcar como entregue`

- Quando clicar no botão `Preparar pedido` deve alterar o status do detalhe do pedido para `Preparando`

- Quando clicar no botão `Marcar como entregue` deve alterar o status do detalhe do pedido para `Entregue`

- Quando clicar no botão `Marcar como entregue` os botões `Preparar pedido` e `Marcar como entregue` devem sumir da tela
```

### 2 - Desenvolver os status para o pedido da tela `Pedidos` do Administrador
- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;

#### Tela de `Pedido` do Administrador

![Tela de pedido Administrador](./public/pedidosadmin.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Pedidos` do admin

- Dado que o pedido foi marcado como entregue será validado que na tela de `Pedidos` do admin, o status estará como `Entregue`

- Dado que o pedido foi marcado como preparando será validado que na tela de `Pedidos` do admin, o status estará como `Preparando`
```

### 3 - Desenvolver os status para o pedido da tela `Pedidos do Cliente`

- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;.

#### Tela de `Pedidos` do Cliente

![Tela pedidos de cliente](./public/pedidoscliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Meus pedidos` do cliente

- Dado que o admin marcou o pedido como `Preparando` é verificado que na tela de `Pedidos` do cliente o status mudou para `Preparando`

- Dado que o admin marcou o pedido como `Entregue` é verificado que na tela de `Pedidos` do cliente o status mudou para `Entregue`
```

### 4 - Desenvolver os status para o pedido da tela `Detalhes de Pedido` do Cliente

- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;.

#### Tela de `Detalhes de Pedido` do Cliente

![Detalhe pedido Administrador](./public/detalhespedidocliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Detalhes do pedido` do cliente

- Dado que o admin marcou o pedido como `Preparando` é verificado que na tela de `detalhe do pedido` do cliente o status mudou para `Preparando`

- Dado que o admin marcou o pedido como `Entregue` é verificado que na tela de `detalhe do pedido` do cliente o status mudou para `Entregue`
```

### 5 - Criar um botão no sidebar para acessar o chat do cliente

- Essa funcionalidade só deve existir na **visão de cliente**

- Adicionar ao menu lateral, uma botão de chat denominada `Conversar com a loja`.

    - Um clique no item descrito como `Conversar com a loja` deve levar para uma página de chat.

    - A rota da tela deve ser `/chat`;

#### Sidebar do Cliente

- O botão 'Conversar com a loja' deverá conter a tag `data-testid="side-menu-chat"`

![Detalhe pedido Administrador](./public/sidebarCliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que o botão `Conversar com a loja` existe no sidebar do cliente

- Será validado que ao clicar no menu `Conversar com a loja` será redirecionado para página na url `/chat`
```

### 6 - Desenvolver funcionalidade de chat na visão de cliente

- Essa funcionalidade só deve existir na **visão de cliente**

- Na página de chat, as mensagens devem aparecer ordenadas com as mais recentes embaixo.

    - A página deve mostrar as mensagens enviadas e recebidas, com as mensagens mais recentes mais embaixo.

    - A página deve ter um input para digitar o texto e um botão para envio de nova mensagem ao chat.

- O nickname do cliente deve ser o email cadastrado.

- O chat deve conter tambem a hora que a mensagem foi enviada.

- A hora deve ter o formato `15:30`.

- O histórico da conversa deve ser salvo no banco de dados `MondoDB` e aparecer quando a pessoa abre a página.

#### Tela do Detalhe de chat do cliente

- O elemento com o nickname do cliente deverá conter a tag `data-testid="nickname"`

- O elemento com a data da mensagem deverá conter a tag `data-testid="message-time"`

- O elemento com a mensagem do cliente deverá conter a tag `data-testid="text-message"`

- O input de escrever a mensagem deverá conter a tag `data-testid="message-input"`

- O botão para enviar a mensagem deverá conter a tag `data-testid="send-message"`

![Chat do cliente](./public/telachatcliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que existe o campo input e o botão de enviar mensagem

- Será validado que ao enviar mensagem o `nickname` do cliente é o seu email

- Será validado que ao enviar mensagem a data fica visível na tela

- Será validado que ao enviar mensagem a mensagem fica visível na tela

- Será validado que ê possivel enviar várias mensagens
```

### 7 - Criar botão no sidebar para acessar a lista de chats do administrador

- Essa funcionalidade só deve existir na **visão de admin**

- A plataforma deve ter acessível, no menu lateral, uma funcionalidade de chats denominada `Conversas`.

    - Um clique no item descrito como `Conversas` deve levar para uma página de listas de chats.

    - A rota da tela deve ser `/admin/chats`;

#### Sidebar Administrador

- O botão 'Conversas' deverá conter a tag `data-testid="side-menu-item-chat"`

![Chat do cliente](./public/sidebarAdmin.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que no meu sidebar contém o botão `Conversas`

- Será validado que ao clicar no menu `Conversas` será redirecionado para página na url `/admin/chats`
```

### 8 - Criar funcionalidade de lista de conversas de chat na visão de administrador

- Essa funcionalidade só deve existir na **visão de admin**

- A paginá deverá conter uma lista de conversas lista com todas as conversas da loja.

    - As conversas devem aparecer numa lista. Cada conversa deve ser identificada pelo email da pessoa cliente em questão.

        - Um clique no email do cliente deve redirecioanar para a janela com o chat daquela conversa.

    - A lista de conversas deve ser ordenada pela data da última mensagem.

    - Caso não tenham conversas, deve ser exibido o texto "Nenhuma conversa por aqui".

#### Tela de listas de conversas

  - O texto `Nenhuma conversa por aqui` deverá conter o data-testid="text-for-no-conversation"

  - O texto com email do cliente deverá conter o `data-testid="profile-name"`

  - O texto com a última mensagem deverá conter o `data-testid="last-message"`

  - Os cards do chat devem conter o `data-testid="containerChat"`

  ![Chat do cliente](./public/listadeconversas.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que ao entrar na tela de `admin/chats` e não houver conversas e validado se contém o texto `Nenhuma conversa por aqui`

- Será validado que ao entrar na tela de `admin/chats` e existir uma conversa verifico se contém o card

- Será validado que ao entrar na tela de `admin/chats` e existir uma conversa verifico se dentro do card contem o email do cliente

- Será validado que ao entrar na tela de `admin/chats` e existir uma conversa verifico se dentro do card contem data da ultima mensagem

- Será validado que ao clicar no card da conversa e redirecionado pra conversa
```

### 9 - Desenvolver funcionalidade de chat na visão de administrador

- Um clique num item da lista de conversas deve exibir na tela o respectivo chat.

    - Um clique em um item da lista deve exibir na tela a janela com o chat daquela conversa.

    - O _nickname_ da loja na conversa deve ser "Loja".

    - A página da conversa deve mostrar, no topo da tela, o email do usuário que a Loja está conversando.

    - A página da conversa deve ter um botão de voltar que ao ser clicado redireciona a pessoa a página de listagem de conversas novamente.

- O histórico de cada conversa deve ser salvo no banco de dados e aparecer quando a pessoa abre a página.

- A lista de conversas deve ser ordenada pela data da última mensagem.

    - A lista de conversas deve ser ordenada pela data da última mensagem (recebida ou enviada), as mais recentes no topo da lista.

#### Tela de chat do admin

![Chat do admin](./public/chatAdmin.png)

  - O campo input de mensagem deverá conter a tag `data-testid="message-input"`

  - O botão de enviar mensagem deverá conter a tag `data-testid="send-message"`

- O email da mensagem deverá conter a tag `data-testid="nickname"`

- A hora da mensagem deverá conter a tag `data-testid="message-time"`

- O texto da mensagem deverá conter a tag `data-testid="text-message"`

- O botão voltar deverá conter a tag `data-testid="back-button"`

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que ao clicar no card da conversa poderá ser visualizado as mensagem do cliente

- Será validado que é possivel enviar mensagem

- Será validado que ao enviar mensagem o nickname do admin e `Loja`

- Será validado que ao enviar mensagem e listado a hora do envio da mensagem

- Será validado que é possivel voltar pra tela de `admin/chat` através do botão voltar

- Será validado que é possivel enviar mensagem para o cliente e a mensagem poderá ser visualizada pelo cliente
```

---

### Sobre repositório utilizado para realizar o projeto

[Repositório do projeto Trybe](https://github.com/tryber/sd-06-project-trybeer-v2)
