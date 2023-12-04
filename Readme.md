# Hacker News GraphQL Service

### Node Version
```bash
# v18.18.0
nvm use 
```
### Install Dependencies:
```bash
npm install
```

### How to Run
To start the GraphQL server, run:

```bash
npm start
```
The server will start running on http://localhost:4000/graphql (or any other specified port).

### API Endpoints
- /graphql (POST): The GraphQL endpoint where you can make queries and mutations.

### Queries:
- recent: Returns the 10 most recent top stories.
- popular: Returns the 10 highest rated stories.
- highlight: Returns a new, random story every hour.
### Mutations:
- refresh: Refetches data from the Hacker News API.

### Testing
To run the tests:

```bash
npm test
```
The tests cover various functionalities of the service, including data fetching and response formatting.