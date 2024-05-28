# Assignment-2

## Description

<P>This is a Typescript-based simple project</p>

## Introductory material

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine. You can download it from [here](https://nodejs.org/).
- MongoDB installed and Running on your local machine. You can download it from [here](https://www.mongodb.com/try/download/community).
- Git installed on your local machine. You can download it from [here](https://git-scm.com/).

## Installations

- Clone the Repository following this command in command line:

```
   git clone <repository url>
```

- Navigate to the project directory:

```
   cd  Assignment-2
```

- Install Dependencies

```
npm install
```

## Running the applications

- To start the application development mode with automatic restart on file changes, run:

```
npm run start:dev
```

- To build the application in production mode, run:

```
npm run start:prod
```

## Environment Variable Setup:

Create a `.env` file in the root directory and add the following environment variables:

```
PORT:5000
DATABASE_URL=<Your mongoDB_connection_url_string>
```

Replace `<your_mongoDB_connections_url>` with the connecting string for your database.

## Linting and Formatting

- To lint the code. run: <br>
  ```
  npm run lint
  ```
- To Automatically fixed the lint issues. run, <br>
  ```
  npm run lint:fix
  ```
- To format the code using Prettier. run: <br>
  ```
  npm run prettier
  ```
- To Automatically fixed formatting issues. run: <br>
  ```
  npm run prettier
  ```

If you following the instruction you will successfully run the project in your local machine
