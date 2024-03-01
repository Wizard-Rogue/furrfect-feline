# FURRFECT FELINE

Your one-stop-shop in looking for the furrect feline for you. <3

This is a 3-part project created using Docker, an ExpressJS + NodeJS backend, and a ReactJS frontend bootstrapped by the Create React App!

### Prerequisites

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)
- Create a `.env` file in the backend folder similar to the [__.env.defaults__](backend/.env.defaults). You will need to get an API key from [The Cat API](https://thecatapi.com/) to get started.

## Docker

In the main project directory, run:

### `docker compose up -d`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

That's it! Docker does all the heavy lifting of installing dependencies, configuring the network, running scripts/servers, and etc. with this one simple command!

### `docker compose down`

Stops the application and removes all containers of the application.

### Project structure:
```
.
├── backend
│   ├── Dockerfile
│   ...
├── compose.yaml
├── frontend
│   ├── ...
│   └── Dockerfile
└── README.md
```
[_compose.yaml_](compose.yaml)
```
services:
  frontend:
    build:
      context: frontend
    ...
    ports:
      - 3000:3000
    ...
  backend:
    ...
    build:
      context: backend
    ...
    expose: 
      - 3000
    ...

```
The compose file defines an application with two services `frontend`, and `backend`.
Docker compose maps port 3000 of the frontend service container to port 3000 of the host as specified in the file.
Make sure port 3000 on the host is not in use!