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
```

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
    Resposta de Erro: 409 "name already registered". Se já existir um produto cadastrado com a mesmo nome que está sendo enviado
    Resposta de Erro: 400 "bad request". Retornar o status code 400 e um objeto com a propriedade errors contendo um array com suas respectivas mensagens de validação de acordo com cada campo:
    Resposta de Erro: 500 "an internal server error occurred". Caso aconteça algum outro erro que não foi mapeado neste projeto.

# GET /api/products

    Função: Retorna uma lista de todos os produtos registrados.

    Método: GET

    Resposta de Sucesso: 200 "OK" com um array de objetos de produtos.

    Resposta de Erro: 500 "an internal server error occurred". Caso aconteça algum outro erro que não foi mapeado neste projeto.


# GET /api/products/:id

    Função: Busca e retorna os detalhes de um produto específico pelo seu identificador (id).

    Método: GET

    Exemplo de URL: /api/products/123e4567-e89b-12d3-a456-426614174000 (substitua pelo ID real do produto)

    Resposta de Sucesso: 201 "Created" com o objeto do produto.

    Resposta de Erro: 404 "product not found" se o produto não existir.
    Resposta de Erro: 500 "an internal server error occurred". Caso aconteça algum outro erro que não foi mapeado neste projeto.


# PUT /api/products/:id

    Função: Atualiza as informações de um produto existente, identificado pelo seu id.

    Método: PUT

    Exemplo de URL: /api/products/1

    Corpo da Requisição (Exemplo JSON - envie apenas os campos a serem atualizados):
    JSON

    {
        "price": 49.90,
        "quantity": 25
    }

    Resposta de Sucesso: 204 OK sem nenhum conteúdo.

    Resposta de Erro: 404 "product not found". Se o produto não existir.
    Resposta de Erro: 409 "name already registered". Se já existir um produto cadastrado com a mesmo nome que está sendo enviado.
    Resposta de Erro: 400 "bad request". Retornar o status code 400 e um objeto com a propriedade errors contendo um array com suas respectivas mensagens de validação de acordo com cada campo.
    Resposta de Erro: 500 "an internal server error occurred". Caso aconteça algum outro erro que não foi mapeado neste projeto.


# DELETE /api/products/:id

    Função: Exclui um produto do sistema, utilizando seu id como referência.

    Método: DELETE

    Exemplo de URL: /api/products/1

    Resposta de Sucesso: 204 No Content (indica que a requisição foi bem-sucedida e não há conteúdo para retornar).

    Resposta de Erro: 404 "product not found" se o produto não existir.
    Resposta de Erro: 500 "an internal server error occurred". Caso aconteça algum outro erro que não foi mapeado neste projeto.
