<p align="center">
  <a href="" rel="noopener">
 <img width="92" height="92" src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Project Title</h3>

---

<p align="center"> This is a boilerplate project to quickly start a new Next.js front-end project within DIJ
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Deployment](./DEPLOYMENT.md)
- [Architecture](./ARCHITECTURE.md)
- [Contributing](./CONTRIBUTING.md)

## 🧐 About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

- [Node.js](https://nodejs.org/en/)

### Installing

A step by step series of examples that tell you how to get a development env running.

```sh
npx degit git@bitbucket.org:deinternetjongens/frontend-next-starter.git --mode=git <project-name>
cd <project-name>
npm install
```

Configure the `.env` file with the correct values, e.g. `NEXT_PUBLIC_API_ENDPOINT` needs to be set to the correct API endpoint.

The starter-kit is equipped with authentication and a example feature which can be used as a starting point for your project. To remove these run:

```sh

npm run gen cleanup

```

## 🎈 Usage <a name="usage"></a>

To start the development server run:

```sh

npm run dev

```

> This will start the dev server on [http://localhost:3000](http://localhost:3000)

```sh

npm run sb:dev

```

> This will start the storybook server on [http://localhost:6006](http://localhost:6006)

## 🍿 Generators

This project comes with a few generators to help you create a new component, page, hook or feature. You can run these generators by running:

```sh

npm run gen

```

The generator will ask you a few questions and then create the files for you.

## 🔧 Running the tests <a name = "tests"></a>

The tests can be run for the entire project using:

```sh
npm run cy:open
```

> This will open the Cypress Test Runner, where you can select which tests to run.

```sh
npm run cy:run

```

> This will run all tests in the terminal.

```sh
npm run cy:run:ct

```

> This will run all component tests in the terminal.

```sh
npm run cy:run:e2e

```

> This will run all end to end tests in the terminal.

## ☝️ Updates from starter-kit

To get updates from the starter-kit we make use of git remotes. To add the starter-kit as a remote run:

```sh

git remote add starter git@bitbucket.org:deinternetjongens/frontend-next-starter.git

```

To get the latest updates from the starter-kit run:

```sh

git pull starter main  --allow-unrelated-histories

```

## 🔑 SSL setup

To run the project with SSL, you need to generate a certificate for localhost. You can do this by running the following commands:

```sh

brew install mkcert
mkcert -install
mkcert localhost

```

This will create a certifcate in the current directory which will be used by the dev server. You can now run the dev server with SSL by running:

```sh

npm run dev:ssl

```

> This will start the dev server on [https://localhost:3000](https://localhost:3000).

You may only need this setup if the backend is runnin on a external domain over HTTPS and has CORS enabled with a secure cookie.

## ⛏️ Built Using <a name = "built_using"></a>

- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Radix UI](https://www.radix-ui.com/) - UI Component Library
- [Cypress](https://www.cypress.io/) - End to End Testing
- [Storybook](https://storybook.js.org/) - UI Component Library
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [NextJs](https://nextjs.org/) - Meta Framework
- [ReactJs](https://reactjs.org/) - UI Library
- [NodeJs](https://nodejs.org/en/) - Server Environment
