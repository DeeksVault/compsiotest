# Playwright Test Automation Project

This repository contains automated tests using Playwright for the web application at [Composio.dev](https://app.composio.dev/). The tests are written in JavaScript, and environment variables are used for secure handling of credentials.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests Locally](#running-tests-locally)
- [Environment Variables](#environment-variables)
- [Continuous Integration](#continuous-integration)
- [License](#license)

## Prerequisites

Before setting up and running the tests, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/DeeksVault/composiotest.git
    cd your-repository
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up Playwright browsers:

    ```bash
    npx playwright install --with-deps
    ```

## Running Tests Locally

To run the Playwright tests locally:

```bash
npx playwright test --browser=chromium --headed


USERNAME=your-github-username
PASSWORD=your-github-password

