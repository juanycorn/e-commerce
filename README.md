# E-commerce Backend

## Description

This project is a backend implementation for an e-commerce site using Express.js, Sequelize, and MySQL. The application provides a RESTful API for managing products, categories, and tags, including their relationships. The project is structured to follow MVC principles and includes CRUD operations for the models.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Walkthrough Video](#walkthrough-video)

## Installation

1. **Clone the Repository:**
```bash
git clone git@github.com:juanycorn/e-commerce.git
cd e-commerce
```
2. Install Dependencies:

```bash
npm install
```
3. Set Up Environment Variables:
Create a .env file in the root directory and add the following:

```bash
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password'
```

4. Create the Database:
Use a MySQL client to run the schema file:

```bash
mysql -u your_mysql_username -p
source db/schema.sql;
```

5. Seed the Database:

```bash
npm run seed
```

6. Start the Server:

```bash
npm start
```

## Usage

To interact with the API, use Insomnia.

## API Endpoints

# Tags
    -Get All Tags

        -GET /api/tags
        -Response: List of all tags with associated products.

    -Get a Single Tag

        -GET /api/tags/:id
        -Response: A single tag with associated products.

    -Create a New Tag

        -POST /api/tags
        -Body:
```json
{
  "tag_name": "New Tag"
}
```
        -Response: The newly created tag.

    -Update a Tag

        -PUT /api/tags/:id
        -Body:
```json
Copy code
{
  "tag_name": "Updated Tag"
}
```
        -Response: The updated tag.

    -Delete a Tag

        -DELETE /api/tags/:id
        -Response: Confirmation message.

# Products
    -Get All Products

        -GET /api/products
        -Response: List of all products with associated categories and tags.

    -Get a Single Product

        -GET /api/products/:id
        -Response: A single product with associated categories and tags.

    -Create a New Product

        -POST /api/products
        -Body:
```json
{
  "product_name": "Basketball",
  "price": 200.00,
  "stock": 3,
  "tagIds": [1, 2, 3, 4]
}
```
        -Response: The newly created product and associated tags.
    -Update a Product

        -PUT /api/products/:id
        -Body:
```json
{
  "product_name": "Basketball",
  "price": 180.00,
  "stock": 5,
  "tagIds": [1, 3]
}
```
        -Response: The updated product and associated tags.

    -Delete a Product

        -DELETE /api/products/:id
        -Response: Confirmation message.

# Categories
    -Get All Categories

        -GET /api/categories
        -Response: List of all categories with associated products.

    -Get a Single Category

        -GET /api/categories/:id
        -Response: A single category with associated products.

    -Create a New Category

        -POST /api/categories
        -Body:
```json
{
  "category_name": "New Category"
}
```
        -Response: The newly created category.

    -Update a Category

        -PUT /api/categories/:id
        -Body:
```json
{
  "category_name": "Updated Category"
}
```
        -Response: The updated category.

    -Delete a Category

        -DELETE /api/categories/:id
        -Response: Confirmation message.

### Walkthrough Video
[Walkthrough Video](https://app.screencastify.com/v3/watch/Q15MENdIX9R7sMgjHNZC)