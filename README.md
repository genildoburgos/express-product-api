# 📦 ANJUN25_D01_COMPASSPRODUCT

API Node.js com TypeScript para gerenciamento de produtos.  
Utiliza Express, Sequelize e PostgreSQL, totalmente configurada para rodar com Docker.

---

## 🐳 Como executar usando Docker

Este projeto já vem com tudo configurado para subir os containers da aplicação e do banco de dados.

---

### ✅ 1. Pré-requisitos

- [Docker](https://www.docker.com/) instalado
- [Docker Compose](https://docs.docker.com/compose/) instalado

---

### ⚙️ 2. Configuração de Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e preencha as variáveis necessárias para a conexão com o banco de dados e outras configurações.


### ▶️ 3. Build da imagem da aplicação

No terminal, execute:

```bash
docker compose up --build


### ✅ 4. Verificação

Após a execução, a API estará disponível em `http://localhost:3000`. Você pode verificar o status dos containers com `docker compose ps`.


## Endpoints da API

A API de gerenciamento de produtos está disponível sob o prefixo /api/products e oferece os seguintes endpoints principais:

# POST /api/products

        Função: Cria um novo produto no sistema.

        Método: POST

        Corpo da Requisição (Exemplo JSON):
        JSON

    {
        "name": "Nome do Produto Exemplo",
        "description": "Uma breve descrição do produto.",
        "price": 29.99,
        "stock": 150
    }

    Resposta de Sucesso: 201 Created com os detalhes do produto criado.

# GET /api/products

    Função: Retorna uma lista de todos os produtos registrados.

    Método: GET

    Resposta de Sucesso: 200 OK com um array de objetos de produtos.

# GET /api/products/:id

    Função: Busca e retorna os detalhes de um produto específico pelo seu identificador (id).

    Método: GET

    Exemplo de URL: /api/products/123e4567-e89b-12d3-a456-426614174000 (substitua pelo ID real do produto)

    Resposta de Sucesso: 200 OK com o objeto do produto.

    Resposta de Erro: 404 Not Found se o produto não existir.

# PUT /api/products/:id

    Função: Atualiza as informações de um produto existente, identificado pelo seu id.

    Método: PUT

    Exemplo de URL: /api/products/123e4567-e89b-12d3-a456-426614174000

    Corpo da Requisição (Exemplo JSON - envie apenas os campos a serem atualizados):
    JSON

    {
        "price": 34.99,
        "stock": 140
    }

    Resposta de Sucesso: 200 OK com os detalhes atualizados do produto.

    Resposta de Erro: 404 Not Found se o produto não existir.

# DELETE /api/products/:id

    Função: Exclui um produto do sistema, utilizando seu id como referência.

    Método: DELETE

    Exemplo de URL: /api/products/123e4567-e89b-12d3-a456-426614174000

    Resposta de Sucesso: 204 No Content (indica que a requisição foi bem-sucedida e não há conteúdo para retornar).

    Resposta de Erro: 404 Not Found se o produto não existir.