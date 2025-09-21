# base-node-typescript-project
Base repo for Node.js TypeScript project with modern tooling and best practices.

## Features
- **TypeScript** with ES modules support
- **Vitest** for testing with coverage
- **ESLint** with TypeScript, security, and Vitest plugins
- **Prettier** for code formatting
- **Husky** for Git hooks (pre-commit/pre-push)
- **tsx** for fast TypeScript execution
- **Nodemon** for development with hot reload

## Requirements
- Node.js 22.15 (use `nvm use` to switch to the correct version)

## Installation
```bash
nvm use
npm install
```

## Development Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
```

### Testing
```bash
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Code Quality
```bash
npm run lint         # Check for linting errors
npm run lint:fix     # Fix auto-fixable linting errors
npm run format       # Format code with Prettier
npm run format:check # Check if code is properly formatted
npm run check        # Run both lint and format checks
```

### Build
```bash
npm run build        # Compile TypeScript to JavaScript
```

## Project Structure
```
src/
├── index.ts         # Main entry point
├── utils.ts         # Utility functions
└── utils.test.ts    # Test files
```

## Git Hooks
Husky is configured to run quality checks automatically:
- **Pre-commit**: Runs linting, formatting, and tests
- **Pre-push**: Runs linting, formatting, and tests

## VS Code Setup
For the best development experience:
1. Install the **Vitest** extension for test running
2. Install **ESLint** and **Prettier** extensions
3. The project includes VS Code settings for auto-formatting

## Coverage Reports
Test coverage reports are generated in the `coverage/` directory:
- Open `coverage/index.html` in your browser for detailed coverage report
