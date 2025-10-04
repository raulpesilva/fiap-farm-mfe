# Farm FIAP - Micro Front-End (MFE)

## Contexto do projeto

O Farm FIAP é uma aplicação desenvolvida no contexto da pós-graduação em Front-end Engineering da FIAP, com o objetivo de aplicar conceitos modernos de arquitetura front-end, componentização, integração de micro front-end e boas práticas de desenvolvimento.

O sistema foi pensado para gestão agrícola e de fazendas, permitindo organizar vendas, estoques, metas e produtos de forma simples e escalável.

&nbsp;

## Composição do projeto

O sistema é composto por diferentes aplicações que se integram entre si:

[Projeto Back-End](https://github.com/raulpesilva/fiap-back): Responsável pela API e regras de negócio, fornecendo os dados para os aplicativos web e mobile.

[Aplicativo Mobile](https://github.com/raulpesilva/farm-app): Interface voltada para dispositivos móveis, consumindo os serviços do back-end.

[Aplicativo Web - Container](https://github.com/raulpesilva/fiap-farm-container): Projeto principal que centraliza o micro front-end, gerencia rotas e autenticação e consome os serviços do back-end.

[Aplicativo Web - Micro front-end](https://github.com/raulpesilva/fiap-farm-mfe): Funcionalidade específica dividida em um módulo independente, que é carregado dinamicamente no container.

&nbsp;

## Tecnologias utilizadas

### Front-end

React: Biblioteca JavaScript para construção de interfaces de usuário.

Vite: Ferramenta de build e dev server ultrarrápido, otimizada para projetos modernos.

TailwindCSS: Framework de CSS utilitário para criação de interfaces responsivas e consistentes.

shadcn/ui: Biblioteca de componentes acessíveis e personalizáveis construída sobre Radix UI e Tailwind.

Lucide-react: Conjunto de ícones em SVG otimizados para React.

React Router Dom: Biblioteca de roteamento declarativo para navegação em aplicações React.

Re-State: Biblioteca para gerenciamento de estado global de forma simples e reativa.

&nbsp;

### Back-end e segurança

Axios: Cliente HTTP baseado em Promises para consumo de APIs.

Jose: Biblioteca para manipulação de tokens JWT (JSON Web Tokens), que pode ser utilizada para autenticação e autorização.

&nbsp;

### Documentação e qualidade de código

ESLint: Ferramenta de linting para identificar e corrigir problemas no código.

Prettier: Formatador de código para manter a consistência e padronização.

&nbsp;

### Ferramentas de desenvolvimento

TypeScript: Superconjunto tipado do JavaScript, trazendo mais segurança ao código durante o desenvolvimento.

Module Federation: Técnica para compartilhamento de módulos e integração de micro front-ends.

&nbsp;

## Como Executar o Projeto

### Variáveis de ambiente

Para executar a aplicação, é preciso criar um arquivo `.env` seguindo o `.example.env` localizado na raiz do projeto

&nbsp;

### Para rodar o projeto localmente, siga os passos abaixo

1. Clone o repositório do container:

```shell
git clone https://github.com/raulpesilva/fiap-farm-container
```

2. Clone o repositório do micro front-end:

```shell
git clone https://github.com/raulpesilva/fiap-farm-mfe
```

3. Acesse o diretório do projeto do container:

```shell
cd fiap-farm-container
```

4. Instale as dependências do container:

```shell
pnpm install
```

5. Execute a aplicação do container:

```shell
pnpm dev
```

6. Acesse o diretório do projeto do micro front-end:

```shell
cd fiap-farm-mfe
```

7. Instale as dependências do micro front-end:

```shell
pnpm install
```

8. Execute a aplicação do micro front-end:

```shell
pnpm dev
```

9. Acesse a aplicação completa no navegador em http://localhost:5173/

10. Acesse a aplicação do micro front-end no navegador em http://localhost:4174/

&nbsp;

#### Nota:

É necessário rodar o container para acessar a aplicação completa: https://github.com/raulpesilva/fiap-farm-container

&nbsp;

## Projeto Publicado

É possível acessar o projeto publicado em: 