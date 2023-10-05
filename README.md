# Project Overview: Pemira 2023 Voting System

## Introduction

Welcome to the Pemira 2023 Voting System project! This document serves as a guide for our team's development workflow.

## Project Description

**Pemira 2023** is a local organization's voting system. The project involves creating a website with four main pages, including success and error pages. The system aims to provide a seamless and secure voting experience for our users.

## Development Workflow

### Trunk-Based Development (TBD)

We'll be using **Trunk-Based Development** with a single main branch. This approach promotes simplicity and encourages continuous integration.

### Workflow Steps

1. **Project Setup:**
   - Lead engineer sets up the project with Next.js and Firebase.
   - Configures CI/CD workflow using GitHub Actions.

2. **Initial Main Branch:**
   - Lead engineer pushes the initial main branch.

3. **Daily Development:**
   - Engineers pull the latest changes from the main branch daily.
   - Each engineer works on their assigned tasks, writing React code and corresponding tests.
   - Local testing is encouraged before pushing changes.

4. **Git Hooks (Husky and Prettier):**
   - **Husky:** Ensures that scripts in package.json are run as pre-commit and pre-push hooks.
   - **Prettier (AirBnB):** Maintains consistent code formatting across the project.
   - **Lint Staged:** Runs pre-commit hooks only on the files that are staged in Git.

5. **Pushing Changes:**
   - Engineers push changes directly to the main branch.
   - GitHub Actions automatically triggers tests on each push.

6. **Manual Deployment:**
   - For manual deployment, the lead engineer can decide when to trigger a deployment to the production environment.
   - Engineers coordinate to ensure that the main branch is stable before manual deployment.

7. **Error Handling:**
   - If tests fail, the engineer who pushed the changes is notified.
   - The main branch remains stable, preventing the spread of errors to other team members.

### Tools Used

- **ESLint:** A pluggable linting utility for JavaScript and JSX. It helps identify and fix common errors.
  
- **Prettier (AirBnB):** An opinionated code formatter that enforces a consistent code style.

- **Lint Staged:** A tool to run linters on pre-committed files. It helps catch issues before they are committed.

ESLint and Prettier will likely to throws some errors, and warnings when your code doesn't conform the guideline. Moreover, upon `git commit`, Husky will run several tests and try to fix any auto-fixable errors and warnings.

### Styling and Directory Structure

- **Tailwind CSS Styles:** We're using styles generated from Tailwind CSS to maintain a consistent and responsive design.

- **Directory Structure:**
  - `/src`: The main source code directory.
  - `/src/app`: Specific application-related files.
  - `/src/components`: Reusable React components.
  - `/src/hooks`: Custom React hooks.
  - `public/fonts`: Storing fonts.
  - `public/images`: Storing images, feel free to create sub-directories for organizing imagesgit.

## Conclusion

This workflow balances simplicity with continuous integration, allowing for a smooth development process. Feel free to adapt and iterate on this workflow as the project evolves.

Happy coding, team! 🚀
