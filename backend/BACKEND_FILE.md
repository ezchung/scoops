## Server.js (Entry Point)
- Responsible for creating an HTTP server and telling it to use the Express app from app.js to handle requests

## app.js (Express app setup)
- Main express app logic lives here
- Imports: neccessary modules (Express, path, cookie-parser, logger, etc)
- Middleware: sets up middleware using app.use()
- View Engine
- Routes: .use(/, indexRouter) and use(/users, usesRouter) is telling Express to use the router files defined in the routes directory for specific paths
- Error Handling

## routes/ directory
- index.js: handles routes for the rooth path or general pages
- users.js: handle routes related to users (eg. /users, /users/:id)

## models/ directory
- Schemas or models live here

## views/ directory
- for server side rendering of HTML (but we are not doing this)

## public/ directory
- static asses that the browser can diret request

