# First attempt to learn Cypress testing framework

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

    Following tutorial I have been working on creating the first real test and implementing the function under test. I saw how to find and interact with elements on a page and how to create assertions about their behaviour. I also looked at best practices such as using beforeEach and defining the baseUrl of the application to remove duplicate code.

3. Form submission and XHRs

    Following tutorial I implemented form submission for the todo app, using cy.server() and cy.route() to call our API. Focusing first on the 'happy path' of the application. Once the form worked, I used another stubbed XHR call to set up a failure scenario and implemented the code to properly display the error message.

4. Loading data with fixtures

    Following tutorial I have implemented initial data loading for the todo app, using cy.server() and cy.route() to override the API call to load the data. I used fixation data to initialise the application state. As the test and application code iterated, I created and used custom commands to avoid unnecessary code duplication and keep our tests clean and readable.

5. Todo item behavior

    Following the tutorial, I updated the app to correctly display todo elements based on their isComplete property, adding tests to verify the correct behaviour. I then tested and implemented the functionality to remove elements. This section discusses interacting with an element that is hidden unless it is hovered over, and looks at different ways to handle this situation. I also looked at the appropriate way to store references to previously searched DOM elements using .as() to create aliases.

6. Toggling and debugging

    Following the tutorial, I created a todo element switching test. While implementing the toggle function, I encountered a problem with our code and looked at how Cypress could help debug the code. I used the Cypress Command Log to narrow down the problem. I was then able to use the developer tools directly in Cypress to walk through the code and dig deeper into the problem. I saw how to update the state of the application while debugging and let testing confirm the theory on the cause of the error. After debugging, the code was refactoured to make it less error-prone, relying on tests to help fix it.

7. Filters and data-driven tests

    Following the tutorial I tested the footer behaviour of the application. First, I made sure that the footer correctly displays text in singular or plural, depending on the number of other tasks. Then I tested and implemented the list filtering function. I created a test for one of the filters and figured out how to connect React Router to make the filter links work. I then learnt how standard JavaScript data structures can be used to handle multiple assertions in a test, allowing multiple variations of filter behaviour to be tested in a single test.

8. Full end-to-end tests part 1

    I connected the back-end API to the front-end I was building. After connecting the back-end API, I created the first real end-to-end test. Using the back-end API, a consistent initial state is ensured, removing any existing data from the database. I then tested that the application can create and save new todos without a back end stubbed. I also saw how to listen using cy.wait() for XHR responses in tests to avoid errors caused by unpredictable response times.