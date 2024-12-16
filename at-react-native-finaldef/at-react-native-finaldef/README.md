InfnetFood

Descrição do Projeto

O InfnetFood é um aplicativo de delivery desenvolvido com React Native, projetado para oferecer uma experiência prática e intuitiva na escolha e compra de refeições, bebidas, sobremesas, lanches e petiscos. O aplicativo também conecta os usuários aos restaurantes parceiros, permitindo explorar menus e realizar pedidos de forma eficiente.

O InfnetFood conta com funcionalidades como tema claro/escuro, carrinho de compras dinâmico, notificações personalizadas e gerenciamento de perfis de usuário.

Funcionalidades Principais

Tela de Login

O usuário deve inserir seu e-mail e senha para acessar o app.

Um sistema de validação verifica as credenciais e exibe mensagens de erro em caso de dados incorretos.

----------------------------------------------------------------------------------------------------------------

Tela Principal

Exibe opções de delivery organizadas em categorias:

Refeições

Lanches

Bebidas

Sobremesas

Petiscos

Mostra informações sobre os restaurantes parceiros.

Gerenciamento de Carrinho

Adicione itens de diferentes categorias ao carrinho.

Atualize quantidades ou remova itens do carrinho.

Veja o total dinâmico com base nos itens e quantidades selecionados.

Checkout

Insira o endereço de entrega e escolha o método de pagamento.

Receba uma notificação personalizada ao finalizar o pedido.

----------------------------------------------------------------------------------------------------------------

Tela de Configurações

Alterne entre os temas claro e escuro.

Ative ou desative notificações do aplicativo.

Tela de Perfil do Usuário

Gerencie informações pessoais, como nome e e-mail.

Acesse o histórico de pedidos realizados.

Tema Dinâmico

O aplicativo oferece suporte a temas claro e escuro, ajustando automaticamente os elementos visuais.

----------------------------------------------------------------------------------------------------------------
Estrutura do Projeto

Context API

ThemeContext:

Gerencia o estado do tema claro/escuro.

Provedor usado em todo o aplicativo para alternar entre temas.

Componentes

----------------------------------------------------------------------------------------------------------------

Telas Principais

HomeScreen: Apresenta a tela inicial com opção de login.

LoginScreen: Permite ao usuário acessar o app com e-mail e senha.

MainScreen: Exibe as categorias de delivery e restaurantes parceiros.

CartScreen: Gerencia o carrinho de compras.

CheckoutScreen: Finaliza o pedido com notificações.

ConfigScreen: Configurações de tema e notificações.

UserScreen: Gerencia informações do usuário e pedidos.

----------------------------------------------------------------------------------------------------------------

Categorias

MealsScreen: Lista de refeições disponíveis.

Snacks1Screen: Lanches como hambúrgueres e pizzas.

Snacks2Screen: Petiscos como batatas fritas e pastéis.

DrinksScreen: Lista de bebidas.

DessertsScreen: Sobremesas variadas.

Outros Componentes

Navbar: Barra de navegação superior com atalhos.

Footer: Barra de navegação inferior com links rápidos.

----------------------------------------------------------------------------------------------------------------

Fluxo de Navegação

Login > MainScreen

MainScreen > Categorias (Refeições, Lanches, etc.)

Categoria > Adicionar ao Carrinho > CartScreen

CartScreen > CheckoutScreen > Finalização do Pedido

MainScreen > Perfil (UserScreen)

UserScreen > Pedidos (OrdersScreen) 

----------------------------------------------------------------------------------------------------------------

Tecnologias Utilizadas

React Native: Desenvolvimento mobile.

Expo: Ambiente de desenvolvimento.

Context API: Gerenciamento de estado global.

React Navigation: Navegação entre telas.

Expo Notifications: Notificações personalizadas.

----------------------------------------------------------------------------------------------------------------

Contato

Desenvolvido por Guilherme Pirozi.