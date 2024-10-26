# Rule Engine using AST

## Overview

This application functions as a rule engine that assesses user eligibility based on various attributes, including age, department, salary, and experience. It employs an Abstract Syntax Tree (AST) for representing and managing conditional rules, facilitating the dynamic creation, combination, and evaluation of rules.

## Features

- **Rule Creation**: Users can define rules using a string format, which is then transformed into an AST.
- **Rule Combination:**: Allows the merging of multiple rules into a singular AST to enable more intricate evaluations.
- **Rule Evaluation**: Assesses whether the provided data aligns with the criteria set by the AST.
- **Tree Visualization:**: When defining or combining rules, a tree representation will be displayed for better understanding.

## Features
- Backend: Node.js, Express.js, joi, cors
- Frontend: React, Axios, Tailwind, react-tree-graph

## Libraries and Dependencies

Below are the major dependencies used in this project. Make sure to use React version 18.3.1 and React DOM 18.3.1, as some libraries may not support higher versions.

### Frontend Dependencies

| Library                      | Version    | Purpose                                                       |
|------------------------------|------------|---------------------------------------------------------------|
| `@testing-library/jest-dom`  | ^5.17.0    | Custom Jest matchers for asserting on DOM nodes.              |
| `@testing-library/react`     | ^13.4.0    | Helps to test React components.                               |
| `@testing-library/user-event`| ^13.5.0    | Simulates user interactions with UI elements.                 |
| `axios`                      | ^1.7.7     | HTTP client for making API requests.                          |
| `react`                      | ^18.3.1    | Core React library for building user interfaces.              |
| `react-dom`                  | ^18.3.1    | DOM-specific methods for React.                               |
| `react-scripts`              | 5.0.1      | Scripts and configuration used by Create React App.           |
| `react-tree-graph`           | ^8.0.2     | Tree graph component for visualizing hierarchical data.       |
| `web-vitals`                 | ^2.1.4     | Library for measuring web performance metrics.                |

### Backend Dependencies

| Library          | Version    | Purpose                                                       |
|------------------|------------|---------------------------------------------------------------|
| `body-parser`    | ^1.20.3    | Middleware for parsing incoming request bodies.              |
| `cors`           | ^2.8.5     | Middleware for enabling Cross-Origin Resource Sharing (CORS).|
| `express`        | ^4.21.1    | Fast, unopinionated, minimalist web framework for Node.js.   |
| `joi`            | ^17.13.3   | Object schema description language and validator for JavaScript. |

Feel free to adjust any descriptions or details according to your preferences!

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed (version >= 14.0.0).
- **npm : Package manager to install dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ROHITHCN/abstract-syntax-tree
   ```
2. Navigate to backend and install dependencies:
   ```bash
   cd AST-RULE-ENGINE
   npm install
   ```
3. Start backend server:
    ```bash
    node index.js
    ```
4. Navigate to frontend and install dependencies:
    ```bash
    cd UI
    npm install
    ```
5. start fronted:
   ```bash
   npm start
   ```

