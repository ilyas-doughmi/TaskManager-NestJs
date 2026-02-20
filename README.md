# Task Manager API (NestJS)

A simple Task Manager REST API built with [NestJS](https://nestjs.com/). This project demonstrates a modular, testable, and maintainable backend application using TypeScript.

## Features

- Create, read, update, and delete (CRUD) tasks
- Task status management (e.g., OPEN, IN_PROGRESS, DONE)
- Modular architecture with controllers, services, and models
- Unit and e2e testing with Jest
- Linting and code quality tools

## Project Structure

```
task-manager/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── tasks/
│       ├── task.model.ts
│       ├── tasks.controller.ts
│       ├── tasks.module.ts
│       └── tasks.service.ts
├── test/
│   └── app.e2e-spec.ts
├── package.json
├── tsconfig.json
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ilyas-doughmi/TaskManager-NestJs.git
   cd task-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

- Start the development server:
  ```bash
  npm run start:dev
  ```
- The API will be available at `http://localhost:3000/`

### Running Tests

- Unit tests:
  ```bash
  npm run test
  ```
- End-to-end (e2e) tests:
  ```bash
  npm run test:e2e
  ```
- Linting:
  ```bash
  npm run lint
  ```

## API Endpoints

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a task by ID
- `POST /tasks` - Create a new task
- `DELETE /tasks/:id` - Delete a task
- `PATCH /tasks/:id/status` - Update task status