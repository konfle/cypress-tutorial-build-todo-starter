# First attempt to learn Cypress testing framework.

At beging I decide to follow the official video tutorial from [Cypress docs](https://docs.cypress.io/examples/tutorials).

## Commands

Install project dependencies
```console
npm install
```

Run application under test
```console
npm run dev
```

Run Cypress test runner
```console
npm run cypress
```

## Tutorial content:

1. Project setup

    Initially, I cloned the startup repository. This repository already contains the compilation and configuration of the server. I looked at the project's npm dependencies and scripts, and then went straight to running Cypress.

2. Text inputs

    I have been working on creating the first real test and implementing the function under test. I saw how to find and interact with elements on a page and how to create assertions about their behaviour. I also looked at best practices such as using beforeEach and defining the baseUrl of the application to remove duplicate code.
