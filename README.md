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

Visit your localhost at port 3001!
Append /?id= with any number between 1 and 10,000,000 to your url to see a wide array of images.

## Seeding DB
> Run this after ensuring you have PostgreSQL installed
```sh
npm run csv
npm run connectpg
npm run seedpg
```

## CRUD Operations
| HTTP Verb |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **POST**  |         /api/items/         |  CREATE a new item into DB   |
| **GET**   |       /api/items/:id        |  READ data and return        |
| **PATCH** |       /api/items/:id        |  UPDATE item with new image  |
| **DELETE**|       /api/items/:id        |  DELETE item based on ID     |
