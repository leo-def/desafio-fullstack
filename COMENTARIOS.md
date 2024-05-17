# Growdev Mentor Management System

This project is a Mentor Management System developed for Growdev, an educational institution that offers various training programs. The system allows administrative users to manage mentor registrations, facilitating the allocation of mentors to training programs.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Building](#building)
  - [Testing](#testing)
  - [Starting Locally](#starting-locally)
  - [Starting with Docker Compose](#starting-with-docker-compose)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [User Stories](#user-stories)
- [Tasks](#tasks)
- [Dependencies](#dependencies)

## Technologies Used

The project is built using the following technologies:
- **Frontend**:
  - React
  - Next.js
- **Backend**:
  - NestJS
  - Prisma
  - PostgreSQL
- **DevOps**:
  - Docker
  - Docker Compose
  - GitHub Actions

## Setup

### Building

To build the frontend and backend projects, run the following commands:

```bash
# Frontend
cd webapp
npm install
npm run build

# Backend
cd ../api
npm install
npm run build
```

### Testing

Both frontend and backend projects are configured with Jest for testing. To run tests, use the following commands:

```bash
# Frontend
cd webapp
npx prisma generate
npm test

# Backend
cd ../api
npx prisma generate
npm test
```
### Starting Locally

To start the applications locally manually, you need to start both the frontend and backend projects separately.

#### Frontend

1. **Navigate to directory**:
    ```bash
    cd webapp
    ```

2. **Setup the environment file**: You can copy the `env.bkp` values, or modify them if necessary:
    ```bash
    # Windows example
    copy env.bkp .env
    
    # Linux example
    cp env.bkp .env
    ```

3. **Run the application**:
    ```bash
    npm run local
    ```

#### Backend


1. **Install PostgreSQL**: If you don't have PostgreSQL installed, download and install it from [here](https://www.postgresql.org/download/).

2. **Start PostgreSQL**: After installation, start the PostgreSQL service. The steps to start the service may vary based on your operating system. Typically, you can start it via your system's service manager or directly from the command line.

3. **Create Database**: Create a new database for the application. You can do this via the PostgreSQL command line interface (`psql`) or a database management tool like pgAdmin. By default, we use a database named 'mentors'.

4. **Navigate to directory**:
    ```bash
    cd ../api
    ```

5. **Setup the environment file**: You can copy the `env.bkp` values, or modify them if necessary:
    ```bash
    # Windows example
    copy env.bkp .env
    
    # Linux example
    cp env.bkp .env
    ```

6. **Generate database schemas**:
    ```bash
    npx prisma generate
    ```

7. **Synchronize generated schemas with the database**:
    ```bash
    npx prisma db push
    ```

8. **Run the application**:
    ```bash
    npm run start:dev
    ```

### Starting with Docker Compose

To start the applications locally using Docker Compose, make sure you have Docker installed. Then, run the following command:

```bash
docker-compose up
```

## Deployment

The application can be deployed to Heroku by pushing changes to the `master` branch. GitHub Actions pipeline is configured to automatically run tests on the `dev` branch and deploy to Heroku on the `master` branch.

## API Documentation

The API documentation is automatically generated and can be accessed by navigating to the `/api` path. For example, if the application is running locally, you can access the API documentation at `http://localhost:3000/api`.

## User Stories

### User Story 1: Manage Mentors
As an administrative user of Growdev, I want to manage mentor registrations so that I can allocate mentors to training programs.

**Acceptance Criteria:**
#### Scenario: List Registered Mentors
Given that I am within the Growdev management system,
When I access the mentors menu,
Then I should be able to view the list of registered mentors in a table format
And it displays the option to Add Mentor at the top
And it displays the option to Edit for each mentor
And it displays the option to Delete for each mentor
And it displays the option to go back/forward pages
And it displays the option to change the number of rows
Given that I am on the mentors listing page,
When I use the available filters,
Then I should be able to filter the list of mentors based on criteria such as name, cpf, and email.
Given that I am on the mentors listing page,
When I view the list of registered mentors,
Then I should be able to navigate through the different pages of the list, with the option to choose how many table rows I want to view per page.

#### Scenario: Add New Mentor
Given that I am on the mentors listing page,
When I click on Add Mentor
Then it opens the mentor registration page
And it displays the empty mandatory fields
Given that I enter valid data in the fields
When I click Save
Then it creates the new mentor in the database
And returns a success message
Given that I enter invalid data in the fields
When I click Save
Then nothing happens
And the button should be disabled
Given that I enter valid data in the fields
When I click Save
And there is an error on the server
Then it does not create the mentor
And returns a failure message
And does not persist the data recording in the database
Given that I enter valid data in the fields
When I click Cancel
Then it returns to the mentors listing page
And does not persist the data recording in the database

#### Scenario: Edit Mentor Registration
Given that I am on the mentors listing page
When I click Edit
Then it opens the mentor registration page
And displays the filled registration fields
And enables editing of the editable fields
And changes the page title from New Mentor to Edit Mentor
Given that I am on the Mentor Registration page
When I click Save
Then it saves the editable data in the database
Given that I am on the Mentor Registration page
When I click Cancel
Then it returns to the mentors listing page
And does not persist the data recording

#### Scenario: Delete Mentor Registration
Given that I am on the mentors listing page
When I click Delete
Then it displays a delete confirmation modal
Given that I am on the delete confirmation modal
When I click Confirm
Then it deletes the mentor record
Given that I am on the delete confirmation modal


## Tasks

Below is the comprehensive list of tasks for the project, categorized by their respective branches. All tasks are marked as done and assigned to Leonardo.

### T29-env-vars-bkp
- **Branch Name:** T29-env-vars-bkp
- **Name:** T29 - Environment Variables Backup
- **Description:** Create a backup script for environment variables.
- **Status:** Done
- **Assigned to:** Leonardo

### T28-documentation
- **Branch Name:** T28-documentation
- **Name:** T28 - Project Documentation
- **Description:** Complete the project documentation.
- **Status:** Done
- **Assigned to:** Leonardo

### T27-setup-app-containers
- **Branch Name:** T27-setup-app-containers
- **Name:** T27 - Setup Application Containers
- **Description:** Set up Docker containers for both frontend and backend applications.
- **Status:** Done
- **Assigned to:** Leonardo

### T26-frontend-mentor-page
- **Branch Name:** T26-frontend-mentor-page
- **Name:** T26 - Frontend Mentor Page
- **Description:** Create the mentor page on the frontend.
- **Status:** Done
- **Assigned to:** Leonardo

### T25-frontend-mentor-manage-feat
- **Branch Name:** T25-frontend-mentor-manage-feat
- **Name:** T25 - Frontend Mentor Management Feature
- **Description:** Implement features for managing mentors on the frontend.
- **Status:** Done
- **Assigned to:** Leonardo

### T24-frontend-homepage
- **Branch Name:** T24-frontend-homepage
- **Name:** T24 - Frontend Homepage
- **Description:** Develop the homepage for the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T23-frontend-layout
- **Branch Name:** T23-frontend-layout
- **Name:** T23 - Frontend Layout
- **Description:** Create the main layout for the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T22-add-frontend-pagination-feat
- **Branch Name:** T22-add-frontend-pagination-feat
- **Name:** T22 - Add Frontend Pagination Feature
- **Description:** Implement pagination feature in the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T21-add-frontend-entity-manage-feat
- **Branch Name:** T21-add-frontend-entity-manage-feat
- **Name:** T21 - Add Frontend Entity Management Feature
- **Description:** Add features to manage entities on the frontend.
- **Status:** Done
- **Assigned to:** Leonardo

### T20-add-frontend-api-feat
- **Branch Name:** T20-add-frontend-api-feat
- **Name:** T20 - Add Frontend API Feature
- **Description:** Integrate API features into the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T19-add-frontend-navbar-feat
- **Branch Name:** T19-add-frontend-navbar-feat
- **Name:** T19 - Add Frontend Navbar Feature
- **Description:** Implement the navigation bar in the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T18-add-frontend-sidebar-feat
- **Branch Name:** T18-add-frontend-sidebar-feat
- **Name:** T18 - Add Frontend Sidebar Feature
- **Description:** Add a sidebar to the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T17-add-frontend-message-feat
- **Branch Name:** T17-add-frontend-message-feat
- **Name:** T17 - Add Frontend Message Feature
- **Description:** Implement messaging features in the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T16-add-frontend-theme-feat
- **Branch Name:** T16-add-frontend-theme-feat
- **Name:** T16 - Add Frontend Theme Feature
- **Description:** Add theme customization features to the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T15-add-frontend-loading-feat
- **Branch Name:** T15-add-frontend-loading-feat
- **Name:** T15 - Add Frontend Loading Feature
- **Description:** Implement loading indicators in the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T14-frontend-setup-app-commons
- **Branch Name:** T14-frontend-setup-app-commons
- **Name:** T14 - Frontend Setup App Commons
- **Description:** Set up common components and utilities for the frontend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T13-backend-find-mentor
- **Branch Name:** T13-backend-find-mentor
- **Name:** T13 - Backend Find Mentor
- **Description:** Implement the functionality to find a mentor in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T12-backend-fetch-mentor
- **Branch Name:** T12-backend-fetch-mentor
- **Name:** T12 - Backend Fetch Mentor
- **Description:** Implement the functionality to fetch mentor details in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T11-backend-delete-mentor
- **Branch Name:** T11-backend-delete-mentor
- **Name:** T11 - Backend Delete Mentor
- **Description:** Implement the functionality to delete a mentor in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T10-backend-update-mentor
- **Branch Name:** T10-backend-update-mentor
- **Name:** T10 - Backend Update Mentor
- **Description:** Implement the functionality to update mentor details in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T9-backend-create-mentor
- **Branch Name:** T9-backend-create-mentor
- **Name:** T9 - Backend Create Mentor
- **Description:** Implement the functionality to create a new mentor in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T8-setup-mentor-module
- **Branch Name:** T8-setup-mentor-module
- **Name:** T8 - Setup Mentor Module
- **Description:** Set up the mentor module in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T7-backend-pagination
- **Branch Name:** T7-backend-pagination
- **Name:** T7 - Backend Pagination
- **Description:** Implement pagination in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T6-db-connection
- **Branch Name:** T6-db-connection
- **Name:** T6 - Database Connection
- **Description:** Establish the database connection in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T5-backend-dto-patterns
- **Branch Name:** T5-backend-dto-patterns
- **Name:** T5 - Backend DTO Patterns
- **Description:** Implement DTO patterns in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T4-setup-backend-swagger
- **Branch Name:** T4-setup-backend-swagger
- **Name:** T4 - Setup Backend Swagger
- **Description:** Set up Swagger documentation for the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T3-setup-backend-cors
- **Branch Name:** T3-setup-backend-cors
- **Name:** T3 - Setup Backend CORS
- **Description:** Configure CORS in the backend application.
- **Status:** Done
- **Assigned to:** Leonardo

### T2-init-backend-app
- **Branch Name:** T2-init-backend-app
- **Name:** T2 - Initialize Backend Application
- **Description:** Initialize the backend application with NestJS.
- **Status:** Done
- **Assigned to:** Leonardo

### T1-init-frontend-app
- **Branch Name:** T1-init-frontend-app
- **Name:** T1 - Initialize Frontend Application
- **Description:** Initialize the frontend application with Next.js.
- **Status:** Done
- **Assigned to:** Leonardo

## Dependencies

### Backend Dependencies Justification:

1. **NestJS (with CLI, Schematics, and Testing)**:
   - NestJS provides a robust framework for building scalable and maintainable Node.js applications with TypeScript.
   - The CLI and Schematics offer convenient tools for generating boilerplate code and scaffolding application components.
   - Testing utilities simplify the process of writing and executing unit and integration tests, ensuring code quality and reliability.

2. **Express Type Definitions**:
   - Type definitions for Express ensure type safety and enable better development experience with TypeScript.

3. **Jest**:
   - Jest is a popular testing framework for JavaScript and TypeScript projects.
   - It offers a simple and powerful API for writing unit and integration tests, with built-in support for features like mocking and assertion.

4. **ESLint with Prettier Integration**:
   - ESLint enforces coding standards and detects potential issues in the codebase, promoting consistency and readability.
   - Prettier automatically formats code to maintain a consistent style, reducing the need for manual formatting and enhancing code maintainability.

5. **Supertest**:
   - Supertest provides a high-level abstraction for testing HTTP servers, making it easy to send requests and assert responses in integration tests.

6. **ts-jest, ts-loader, ts-node, Typescript, tsconfig-paths**:
   - These tools enable TypeScript support in the testing environment and ensure seamless integration with Jest and other testing utilities.
   - TypeScript offers static typing and modern ECMAScript features, enhancing code quality and developer productivity.
   - tsconfig-paths facilitates path resolution for TypeScript modules, especially useful for maintaining clean and organized project structure.

### Frontend Dependencies Justification:

1. **Next.js**:
   - Next.js is a popular React framework that simplifies the development of server-side-rendered (SSR) and statically generated React applications.
   - It offers features like automatic code splitting, hot module replacement, and optimized performance out of the box.

2. **Material-UI (with Icons)**:
   - Material-UI provides a comprehensive set of React components and styles based on Google's Material Design.
   - It offers ready-to-use UI components, theming support, and accessibility features, enabling rapid development of visually appealing and responsive user interfaces.

3. **React Hook Form**:
   - React Hook Form is a performant and flexible form validation library for React applications.
   - It offers simple API, built-in support for schema-based validation with Yup, and excellent TypeScript integration, improving form development experience and reducing boilerplate code.

4. **Yup**:
   - Yup is a schema validation library that works well with React Hook Form and other form libraries.
   - It provides a declarative and composable API for defining validation rules, ensuring data integrity and user input correctness.

5. **Emotion (with Styled)**:
   - Emotion is a popular CSS-in-JS library that offers powerful styling capabilities for React applications.
   - It provides a convenient API for defining styles with JavaScript and supports features like theming, nested selectors, and global styles.

6. **Date-fns**:
   - Date-fns is a lightweight and modular JavaScript library for date manipulation and formatting.
   - It offers a comprehensive set of functions for common date-related tasks, with a focus on simplicity, performance, and browser compatibility.

7. **UUID**:
   - UUID is a library for generating universally unique identifiers (UUIDs) in JavaScript applications.
   - It provides functions for creating deterministic and random UUIDs, useful for generating unique keys and identifiers in the frontend application.
