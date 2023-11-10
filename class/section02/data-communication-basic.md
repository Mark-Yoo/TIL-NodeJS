# Data Communication Basic
## Ways to transfer data between computers
1. FTP - File Transfer Protocol
2. SMTP - Simple Mail Transfer Protocol
3. HTTP - Hyper Text Transfer Protocol
4. Way more...

## How Communication works
- Send 'Request' to get 'Response'
  - 'Request' header contains sender and sending data type
  - 'Request' body contains data in string format
  - 'Response' header contains sender and sending data type
  - 'Response' body contains result if they successfully deal with request or not
  - 'Response' also contains state code (ex. 200, 400)
    > JSON - Javascript Object Notation
    > - Objects inside 'Request' and 'Response' are written in JSON format

## REST vs GraphQL
1. REST : Common and traditional way
   - REST method gets everything(even unnecessary data) form database
     - Manual Example
       - https://example.com/board/1
2. Graphql : Created by Facebook to replace REST method
   - Graphql method cna pick only necessary data from database
     - Manual Example
       - board(1)

## CRUD
- 'Create', 'Update', 'Delete' need to be used carefully since they actually affect database itself
- 'Read' doesn't change or mutate database (safe)
- REST
  - POST : Create
  - PUT : Update
  - DELETE : Delete
  - GET : Read
- Graphql
  - Mutation : Create, Update, Delete
  - Query : Read