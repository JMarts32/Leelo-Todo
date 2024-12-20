# Diagram Update Description
The base diagram was updated to accomodate addicional functionalities. Below the key differences

## Original Diagram
![Original Diagram](./diagrams/old-relational-diagram.jpg)
1. **Entities**:
   - **Books**: Represents the details of books, including `id`, `name`, and `basePrice`.
   - **Categories**: Represents book categories with attributes `id` and `name`.
   - **Authors**: Represents authors with attributes `id` and `name`.
   - **BooksCategories**: A many-to-many relationship between `Books` and `Categories`.

2. **Attributes**:
   - Used `float(3,2)` for `basePrice`, which is restrictive in real-world applications.

3. **Relationships**:
   - Many-to-many relationships between `Books` and `Categories` were handled via `BooksCategories`.

---

## Updated Diagram
![Updated Diagram](./diagrams/relational-diagram.jpg)
1. **New Entities**:
   - **Sale**: Represents a sale with attributes `id`, `dateOfSale`, and `TotalPrice`.
   - **SaleBook**: Represents a many-to-many relationship between `Sale` and `Books`, allowing tracking of quantities and total price per book in a sale.
   - **BookAuthor**: Represents a many-to-many relationship between `Books` and `Authors`.

2. **new Attributes**:
   - `stock` in the `Books` table to track inventory.
   - Replaced the restrictive `float(3,2)` with potentially more practical floating-point precision.

3. **Relationships**:
   - Added relationships:
     - Between `Sale` and `SaleBook` for tracking book sales.
     - Between `Books` and `Authors` through `BookAuthor`.
     - Between `Books` and `Categories` remains but now renamed tables for clarity (`BooksCategories` → `BookCategory`).

4. **Structural Changes**:
   - Improved table naming conventions for clarity and consistency (e.g., `BooksCategories` → `BookCategory`).


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
