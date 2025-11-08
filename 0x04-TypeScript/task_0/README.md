# TypeScript and Webpack Project

This project demonstrates a basic setup for a web application using TypeScript and Webpack. The main functionality of the application is to render a table of students dynamically on a webpage.

## Project Overview

The core of the project lies in the `js/main.ts` file, which defines a `student` interface and then creates a list of students. It then dynamically generates an HTML table to display the first name and location of each student and appends this table to the body of the HTML document.

## Key Features

- **TypeScript**: The project is written in TypeScript, providing static typing for better code quality and maintainability.
- **Webpack**: Webpack is used to bundle the TypeScript files into a single JavaScript file (`bundle.js`) that can be included in the HTML.
- **Development Server**: A Webpack development server is configured for a smooth development experience with live reloading.
- **Linting**: ESLint is set up with rules for TypeScript to ensure code consistency and catch potential errors.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) must be installed on your machine.

### Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory:
    ```bash
    cd 0x04-TypeScript/task_0
    ```
3.  Install the project dependencies:
    ```bash
    npm install
    ```

### Available Scripts

-   **`npm run start-dev`**: Starts the Webpack development server and opens the application in your default browser. The server will automatically reload the page when you make changes to the source code.
-   **`npm run build`**: Bundles the application for production. The output will be placed in the `dist` directory.

## Technical Details

### TypeScript (`js/main.ts`)

The main TypeScript file defines the `student` interface:

```typescript
interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```

It then creates an array of `student` objects and uses the DOM API to create and append a table to the `index.html` page.

### Webpack (`webpack.config.js`)

The Webpack configuration is set up to:

-   Use `ts-loader` to transpile TypeScript files.
-   Use `HtmlWebpackPlugin` to generate an `index.html` file with the bundled JavaScript injected.
-   Use `CleanWebpackPlugin` to clean the `dist` directory before each build.
-   Use `ForkTsCheckerWebpackPlugin` for faster type checking.

### TypeScript Configuration (`tsconfig.json`)

The `tsconfig.json` file configures the TypeScript compiler with options such as the output directory, source map generation, and module system.

### ESLint (`.eslintrc.js`)

The ESLint configuration extends the recommended rules for TypeScript, helping to maintain a high standard of code quality.