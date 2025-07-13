# 📦 ANJUN25_D01_COMPASSPRODUCT

Node.js API with TypeScript for product management.
It uses Express, Sequelize, and PostgreSQL, fully configured to run with Docker.


## 🐳 How to Run Using Docker

This project comes fully set up to launch the application and database containers.


### ✅ 1. Prerequisites

- [Docker](https://www.docker.com/) installed
- [Docker Compose](https://docs.docker.com/compose/) installed


### ⚙️ 2. Environment Variable Configuration

Create a .env file in the project root and fill in the required variables for database connection and other settings.

### ▶️ 3. Build the Application Image

In the terminal, run:

```bash
docker compose up --build
```

### ✅ 4. Verification

After execution, the API will be available at http://localhost:3000.
You can check the status of the containers with docker ps.

### 💼 5. Postman Collection

To help you test and explore the API endpoints easily, this project includes a Postman collection file:

- **File:** `Compass.postman_collection.json`

#### How to Use

1. Open Postman.
2. In the top menu, click **Import**.
3. Select the `Compass.postman_collection.json` file from the project root.
4. After importing, you will see all the predefined requests organized by endpoint.

You can then run requests against `http://localhost:3000` and verify the expected responses.

### API Endpoints

The product management API is available under the /api/products prefix and offers the following main endpoints:

#### POST /api/products

        FPurpose: Creates a new product in the system.

        Method: POST

        Request Body (Example JSON):
    {
        "name": "Example Product Name",
        "description": "A brief description of the product.",
        "price": 29.99,
        "quantity": 150
    }


    Success Response: 201 Created with the details of the created product.
    Error Response: 409 "name already registered" if a product with the same name already exists.
    Error Response: 400 "bad request" returns status code 400 and an object with the errors property containing an array with validation messages for each field.
    Error Response: 500 "an internal server error occurred" if any other unhandled error occurs.

#### GET /api/products

    Função: Retorna uma lista de todos os produtos registrados.

    Método: GET

    Resposta de Sucesso: 200 "OK" com um array de objetos de produtos.

    Resposta de Erro: 500 "an internal server error occurred". Caso aconteça algum outro erro que não foi mapeado neste projeto.

#### GET /api/products/:id

    Purpose: Returns a list of all registered products.

    Method: GET

    Success Response: 200 OK with an array of product objects.

    Error Response: 404 "product not found" if the product does not exist.
    Error Response: 500 "an internal server error occurred" if any other unhandled error occurs.

#### PUT /api/products/:id

    Purpose: Updates information of an existing product identified by its id.

    Method: PUT

    Example URL: /api/products/1

    Request Body (Example JSON – send only the fields you want to update):

    {
        "price": 49.90,
        "quantity": 25
    }

    Success Response: 204 OK with no content.

    Error Response: 404 "product not found" if the product does not exist.
    Error Response: 409 "name already registered" if a product with the same name already exists.
    Error Response: 400 "bad request" returns status code 400 and an object with the errors property containing an array with validation messages for each field.
    Error Response: 500 "an internal server error occurred" if any other unhandled error occurs.

#### DELETE /api/products/:id

    Purpose: Deletes a product from the system using its id as reference.

    Method: DELETE

    Example URL: /api/products/1

    Success Response: 204 No Content (indicates the request was successful and there is no content to return).
    Error Response: 404 "product not found" if the product does not exist.
    Error Response: 500 "an internal server error occurred" if any other unhandled error occurs.
