
# GOOday

Atividade de revisão desenvolvida para a aula de **Programação de Aplicativos Mobile**, com o objetivo de recriar as primeiras telas de um app usando React Native.

## Sobre o projeto

O app simula o fluxo inicial de acesso de um aplicativo (splash, boas-vindas, login e cadastro), com navegação entre as telas e uma lógica simples de autenticação, sem uso de banco de dados.

O protótipo das telas e as imagens utilizadas já foram fornecidos pelo professor. A missão da atividade era implementar a parte funcional do app, com foco principal na navegação entre as telas.

## Telas desenvolvidas

- **Splash** — tela de abertura com o logo do app.
- **Boas-vindas** — tela de apresentação com ilustração e botão de acesso.
- **Acesse** — tela de login com campos de e-mail e senha.
- **Cadastre-se** — tela de cadastro com e-mail, senha e confirmação de senha.

## Tecnologias utilizadas

- React Native
- Expo
- React Navigation (`@react-navigation/native-stack`)

## Funcionalidades

- Navegação entre as telas do app.
- Cadastro de usuário (armazenado em memória, em um array).
- Login validando e-mail e senha contra os usuários cadastrados.
- Componentes reutilizáveis para os campos de e-mail e senha.
