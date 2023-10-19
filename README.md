# Project Overview: Pemira 2023 Voting System

## Introduction

Welcome to the Pemira 2023 Voting System project! This document serves as a guide for our team's development workflow.

## Project Description

**Pemira 2023** is a local organization's voting system. The project involves creating a website with four main pages, including success and error pages. The system aims to provide a seamless and secure voting experience for our users.

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
