# Chat Application Backend

This repository contains the backend code for a chat application built with Nest.js.

## Setup

1. Clone this repository to your local machine:

```bash
git clone https://github.com/7Rafo7/pogos-task-backend.git
```

## Installation 

```bash
# then navigate to the backend directory & install dependencies for project
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Additional Notes
Backend runs on http://localhost:5000.

WebSocket support for real-time communication is implemented using Nest.js WebSockets.

Messages are stored in-memory, and no database is required for this implementation.

TypeScript is used for type safety in the server code.

CORS is enabled to allow requests from the frontend application running on http://localhost:3000.
