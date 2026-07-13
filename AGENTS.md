# AGENTS.md

Course learning repository for databases (JSD13 week 02). No build system, no tests, no CI.

## Structure

- `01_mongodb/` — MongoDB learning queries (`learning/`) and burger restaurant seed scripts (`chrome-burger-db/`)
- `02_postgresql/` — PostgreSQL burger restaurant schema and seed data
- `03_my-ecommerce-project/` — Sleep Routine Service project: business docs, ER/excalidraw diagrams, MongoDB JSON schemas, and MongoDB seed scripts (`chrome-sleep-db/`)
- `dbs-comparision.md` — MongoDB vs PostgreSQL query concept mapping

## How files are run

- MongoDB `.mongodb.js` files: run inside **MongoDB Compass** (Playground) or `mongosh`. Each script calls `use("db-name")` at the top.
- PostgreSQL `.sql` files: run in a SQL client (e.g., pgAdmin, psql). Execute `create_tables.sql` first, then individual table scripts in order (foreign key dependencies: Suppliers → Ingredients → MenuItems → RecipeItems; Staff → Orders → OrderItems).
- Excalidraw files (`.excalidraw`): visual diagrams, not executable.

## Conventions

- MongoDB scripts clear existing data with `deleteMany({})` before inserting — re-running is safe.
- PostgreSQL uses `SERIAL` primary keys and explicit foreign key constraints.
- The ecommerce project (`03_my-ecommerce-project/`) is the main project deliverable; other folders are learning exercises.
