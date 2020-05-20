# Single Item Service
This component renders the images for the products with zoom functionality

## Getting Started
```sh
npm install -g webpack
npm install
```

## Running the tests

```sh
npm run test
```

## Running server and client locally

```sh
npm start
npm run build
```

## CRUD Operations
| HTTP Verb |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **POST**  |         /api/items/         |  CREATE a new item into DB   |
| **GET**   |       /api/items/:id        |  READ data and return data   |
| **PATCH** |       /api/items/:id        |  UPDATE item with new image  |
| **DELETE**|       /api/items/:id        |  DELETE item based on ID     |
