# Projeto Front-End para Integração com APIs de Filmes

Este projeto front-end foi desenvolvido utilizando **Vue 3** com **TypeScript** e **Vuetify** para permitir que os usuários pesquisem, marquem e visualizem informações de filmes, integrando com a API desenvolvida em PHP/Laravel. O projeto segue boas práticas de organização e desenvolvimento, facilitando a manutenção e escalabilidade.

## Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript para construção de interfaces de usuário reativas.
- **TypeScript**: Superset de JavaScript para tipagem estática, garantindo maior segurança e qualidade no código.
- **Vuetify**: Biblioteca de componentes de interface de usuário baseada em Material Design.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Vite**: Ferramenta de build rápida e leve para desenvolvimento com Vue.
- **Node.js v20.x**: O projeto utiliza Node.js na versão 20, garantindo compatibilidade e melhorias de performance.

## Estrutura do Projeto

O projeto foi organizado seguindo uma estrutura clara e modular:

### Diretórios principais

- **src/components**: Componentes Vue reutilizáveis como `CardMovie`, `DialogMovie` e `Pagination`.
- **src/modules**: Módulos que gerenciam o estado e a lógica de cada parte do sistema, como um módulo para `movie`, outro para auth, que centraliza a busca e ações relacionadas ao módulo em questão.
- **src/services**: Serviços que fazem as requisições HTTP e manipulam o armazenamento local, como o `axios` e `storages`.
- **src/router**: Definição das rotas da aplicação, utilizando `vue-router` para navegação.

### Padrões Utilizados

- **Composição com script setup**: Todos os componentes utilizam o formato `script setup` para maior performance e simplicidade.
- **Reatividade com `ref` e `reactive`**: O estado da aplicação é gerenciado de forma reativa utilizando o sistema de reatividade do Vue.
- **Modularização com controladores**: A lógica de cada parte da aplicação está centralizada em controladores específicos (ex: `movieController`), facilitando a manutenção e testes.

## Funcionalidades Principais

1. **Pesquisa de Filmes**:
   - Os usuários podem pesquisar filmes utilizando a API do The Movie DB.
   - O resultado da pesquisa é exibido em forma de cards, com título e poster dos filmes.

2. **Marcação de Status**:
   - Os usuários podem marcar os filmes como **Assistido**, **Favorito** ou **Pretende Assistir** diretamente nos cards.

3. **Exibição de Detalhes**:
   - Ao clicar em um card de filme, um modal é aberto exibindo os detalhes do filme, como título, sinopse, diretor e ano de lançamento.

4. **Paginação**:
   - O sistema possui paginação para carregar mais filmes conforme a pesquisa avança.

5. **Gerenciamento de Sessão**:
   - Utilização de tokens JWT para autenticação de usuários e controle de sessão.

5. **Cache**:
   - Busca de cache do back-end para melhor desempenho.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js v20.x**
- **npm ou yarn** para gerenciamento de pacotes

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/julioolver/the-movie-db-test-app.git
```

```bash
cd the-movie-db-test-app
```

```bash
docker compose up --build 

OU 

npm install
npm run dev
```

```bash
http://localhost:3000
```

