# Architecture

This is a front-end project purely oriented around React with Next.js. React is a JavaScript library for building user interfaces and Next.js is a meta-framework for React that provides a lot of functionality out of the box. This project is built on top of Next.js and provides a lot of functionality out of the box.

- Formatting with [Prettier](https://prettier.io/)
- Linting with [ESLint](https://eslint.org/)
- Type checking with [TypeScript](https://www.typescriptlang.org/)
- Testing with [Cypress](https://www.cypress.io/)
- Mocking with [MSW](https://mswjs.io/)
- Documentation with [Storybook](https://storybook.js.org/)
- Internationalization with [react-i18next](https://react.i18next.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- CSS-in-JS with [CVA](https://cva.style)
- Behavioral Component library with [Radix UI](https://www.radix-ui.com/)
- Code generation with [Plop](https://plopjs.com/)
- Git hooks with [Husky](https://typicode.github.io/husky/#/)

## Folder Structure

```bash
├── .storybook - Storybook configuration
│   └── plugins - Custom Storybook plugins
├── .vscode - VSCode configuration
├── cypress
│   ├── e2e
│   │   └── features - E2E tests for features
│   └── support - Cypress commands
├── docs - Documentation
├── locales - Internationalization
├── public - Static files
├── src - Source code
│   ├── components - Reusable components
│   │   └── button - Example component
│   ├── features - Feature folders
│   │   └── example - Example feature
│   │       ├── components - Feature-specific components
│   │       ├── hooks - Feature-specific hooks
│   │       ├── lib - Feature-specific utility libraries
│   │       ├── layouts - Feature-specific layouts
│   │       ├── mocks - Feature-specific mocks
│   │       │   ├── factories - Mock factories
│   │       │   └── handlers - Mock handlers
│   │       ├── pages - Feature-specific pages
│   │       ├── providers - Feature-specific context providers
│   │       └── types - Feature-specific types
│   ├── lib - Utility libraries
│   ├── hooks - Reusable hooks
│   ├── mocks - Global mocks
│   ├── pages - Pages (Next.js) - file-based routing
│   ├── providers - Context providers
│   ├── styles - Global styles
│   ├── system - Design system (Storybook)
│   │   ├── components - Design system components
│   │   └── stories - Design system stories
│   └── types - Project types
├── templates - Plop templates
│   ├── component - Component template
│   └── hook - Hook template
└── types - Global types

```

### Feature-first

The project is structured around features. A feature is a set of related pages, components, hooks, etc. that are grouped together. So, for example, if you have a feature called `example`, you would have a folder called `example` in the `features` folder. This folder would contain all the related files for the feature. This makes it easy to find all the related files for a feature.

Previous projects use the Atomic Design approach to structure the project, but this makes it harder to look for related files and maintain. The developer needs to think in concepts of Atomic Design which is not always easy, because they are cluttered all over the place.

## User Interface

The user interface is built with the following technologies:

### React

React is a JavaScript library for building user interfaces. And has proven itself to be very flexible and powerful.

### Next.js

Next.js is a meta-framework for React that provides a lot of functionality out of the box. It is a very powerful tool that can be configured to fit your needs. This project uses the following features:

- TypeScript support
- Automatic code splitting
- Static Site Generation
- File-system based routing
- API routes
- Fast Refresh
- Server-side rendering

The project is to be used as either static site or server-side rendered site. This means that the project can be deployed to a static site hosting provider like Vercel or Netlify. But, it can also be deployed to a server-side rendered hosting provider like AWS.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It helps the developer to work with a consistent design system and to focus on the content of the application.

This project uses the following Tailwind CSS plugins:

**Typography**

The `@tailwindcss/typography` plugin adds a set of prose classes that can be used to quickly add sensible typographic styles to content blocks that come from sources like markdown or a CMS database.

[Read more about the plugin](https://tailwindcss.com/docs/plugins#typography)

**Forms**

The `@tailwindcss/forms` plugin adds an opinionated form reset layer that makes it easier to style form elements with utility classes.

[Read more about the plugin](https://tailwindcss.com/docs/plugins#forms)

The colors are defined in `src/styles/globals.css` and are used throughout the application. The colors are specified to be simply with less shades to make it easier to maintain (discussed with Design). When added colors to the application, please validate the `tailwind.config.js` file to make sure that the color is added to the Tailwind CSS configuration.

### Class Variance Authority

The [Class Variance Authority (CVA)](https://cva.style) is a tool that helps you to manage the variance of your Tailwind CSS classes. Complex styles with Tailwind CSS can quickly become hard to maintain and can clutter the markup. CVA also helps you to make sure that the conditional styling is type-safe.

### classnames

We provide a separate `classnames` function that can be used to conditionally add classes to an element. This function is type-safe and can be used to add classes to an element. This wil also automatically merge tailwind classes. You can import it from `@lib/classnames`.

### Fonts

We make use of Next.JS fonts to load the fonts, see the [documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts).

### Next-themes

We make use of [next-themes](https://github.com/pacocoursey/next-themes) to provide a theme switcher. This is a very simple and lightweight library that can be used to switch between themes. And, allows to include dark mode support in the application.

### Headless Components

For this project we advice to make use of headless components. Headless components are components that are not aware of the styling of the application. This means that they don't have any styling applied to them. This makes it very easy to reuse the components in different contexts. It also makes it very easy to change the styling of the components. This is very useful when you want to change the design of the application.

Some examples of headless components are:

- [Radix UI](https://www.radix-ui.com/) - A collection of accessible, primitive, fully-customizable UI components
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation
- [React Table](https://react-table.tanstack.com/) - Hooks for building fast and extendable tables and datagrids for React

## Data Validation

We use Zod for data validation. Zod is a TypeScript-first data validation library. It is very flexible and powerful. It allows you to define a schema that can be used to validate data. It also allows you to define a schema that can be used to type data. This means that you can use the same schema to validate and type data. This is very powerful and makes it easy to keep the validation and typing in sync.

## API Requests

We use Axios as a HTTP client. Axios is a very powerful and flexible HTTP client. It allows you to make API requests in a very flexible way.

We use React Query to manage API requests. React Query is a powerful tool that allows you to manage API requests in a very flexible way. It allows you to define queries that can be used to fetch data. It also allows you to define mutations that can be used to update data. React Query also provides a lot of functionality out of the box. It provides a lot of functionality that is very useful for managing API requests. It also provides a lot of functionality that is very useful for managing the state of the application. The HTTP Client (Axios) is used to make the actual API requests.

## I18N

We use React I18Next for internationalization. React I18Next is a powerful tool that allows you to manage translations in a very flexible way. It allows you to define translations in a JSON file. This means that you can use the same translations in the entire application. This is very powerful and makes it easy to keep the translations in sync.

The translations are located in `/locales/**/*.json`.

## Mocking

We make use of MSW (Mock Service Worker) to mock API requests. This is a great tool that allows us to mock API requests in a way that is very similar to how they are made in the application. This means that we can test the application as if it were making real API requests. The mocking is shared between Storybook, Cypress, and Jest. What's great about MSW is that the Service Worker can intercept requests made by the browser, but also by Node.js. This means that we can use the same mocking throughout the entire application.

To enable mocking on the development server set the environment variable `NEXT_PUBLIC_API_MOCKING` to `true`. This will enable the mocking in the browser.

### Handlers

MSW uses handlers to mock API requests. These handlers are defined in the `src/mocks/handlers` directory. Each handler is a function that takes a request and returns a response. The handlers are defined in the `src/mocks/browser.ts` file. This file exports an array of handlers. The handlers are executed in the order they are defined in the array. This means that the first handler that matches the request will be used to respond to the request. This is important to keep in mind when defining handlers. Also, the mocks define the happy flow of the application. This means that we do not mock error responses. If this is required the designated Storybook story or Cypress test needs to be updated to handle the error response.

### Factories

The responses of the mocked handlers are generated using factories. These factories are defined in the `src/**/mocks/factories` directory. We make use of `@mswjs/data` to make the mockdata as it were a database. Whicb makes it useful for doing CRUD operations and having the flexability to make custom filters. And the data is persisted in-memory while running a E2E test.

### Seeding

The mockdata is seeded in the `src/mocks/seed.ts` file. This file is executed before the service-worker is initiated in the `src/mocks/browser.ts` or the `.storybook/preview.jsx` file. This means that the mockdata is seeded before the application is started.

## Testing

### Unit Testing

For unit testing we don't make use of Jest. Because most of the custom logic comes from React Hooks. we've chosen to test these via Component test. This makes it easier to test the custom logic in the same way as it is used in the application, but it will cause the tests to be slower. Debugging tests is easier because you can interact with a real browser, instead of virtual browser with Jest. For newcomers it is easier to write tests in Cypress than in Jest.

### Component Testing

For component testing we make use of Cypress Component Testing. Cypress is a very powerful tool that allows you to test components in a real browser environment. This means that you can test the components in the same way as they are used in the application. This is very powerful and makes it easy to test the components in a real browser environment.

### E2E Testing

For E2E testing we make use of Cypress. We will test user flows in Cypress which means that we will test the application as a whole. This means that we will test the application in the same way as a user would use it.

### Visual Regression Testing

For visual regression testing we make use of Chromatic. Chromatic renders the Storybook stories and compares the screenshots with the previous version. The project token needs to be configured in the `.env` file. This token can be found in the Chromatic dashboard.

### Mocks

For Cypress we have a custom command located in `cypress/support/mock/mock.ts`, which makes it possible to use `msw` inside Cypress. It will register to start the service-worker and seed the mockdata before the test starts. This works for both E2E testing and component testing.

### Extensions

We make use of Testing Library to write tests. Testing Library provides testing utilities to make the tests more readable and easier to write. For e.g. you can write `cy.findByTestId` instead of `cy.get('[data-testid="..."]')`. This makes the tests more readable and easier to write.

## Documentation

For documentation we make use of Storybook. Storybook is a very powerful tool that allows you to document components in a very flexible way. It allows you to document components in isolation. This means that you can document components in a way that is very similar to how they are used in the application.

### Addons

We make use of the following addons:

- `@storybook/addon-a11y` to make sure that the components are accessible.
- `@storybook/addon-essentials` to make sure that the components are documented in a way that is very similar to how they are used in the application.
- `@storybook/addon-viewport` to make sure that the components are responsive.
- `@storybook/addon-docs` to make the documentation more readable.
- A custom plugin to generate the Tailwind CSS theme to JSON, so we can we can write stories which display the Tailwind CSS theme.

### Decorators

For Storybook we make use of the `msw-storybook-addon` which makes it possible to use `msw` inside Storybook. Previously, we used `storybook-addon-mock` but this addon makes it inpossible to share the mockdata between Storybook and Cypress. Implementation details can be found in `src/.storybook/preview.jsx`.

We will wrap the application in the QueryClientProvider and the I18NextProvider in the `src/.storybook/preview.jsx` file.

## Tooling

This project uses a lot of tooling to make development easier and more consistent.

### Linting

This project uses ESLint to lint the code. ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It is a very powerful tool that can be configured to fit your needs. This project uses the TypeScript, React and A11y plugins to identify and report on patterns found in the code.

### Formatting

This project uses Prettier to format the code. Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. It will also format the Tailwind CSS classes in logical order. And, make sure that the imports are sorted in a logical order.

### Committing

Before each commit we will make sure the code formatting is applied with Prettier. This is done with the `husky` and `lint-staged` packages.

### Scaffolding

This project uses Plop to scaffold new components. Plop is a micro-generator framework that makes it easy to create files that contain boilerplate code. It is a very powerful tool that can be configured to fit your needs. This project uses the Plopfile.js to scaffold new components.

You can run the following command to scaffold a new component, feature, or hook:

```bash
npm run gen
```

### Bundling

This project uses Webpack to bundle the code. Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

### Type Checking

This project uses TypeScript to type check the code. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

We use the `./tsconfig.json` file to configure the TypeScript compiler for Next.js.
We use the `./cypress/tsconfig.json` file to configure the TypeScript compiler for Cypress.

For this project make use of aliasing to make imports more readable and easier to refactor. The `@` alias is used to point to the `./src` directory.

### Post CSS

This project uses Post CSS to process the CSS. PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

We use this tool to clean up the unused Tailwind CSS classes and automatically add vendor prefixes to the CSS.

## CI/CD

We use Bitbucket Pipelines to build and deploy the application. Bitbucket Pipelines is a continuous integration and continuous delivery service that is built into Bitbucket. It allows you to build, test, and deploy your code every time you push a commit to Bitbucket.
