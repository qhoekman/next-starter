/* eslint-disable no-undef */
import fs from 'fs';
import glob from 'glob';
import inquirerPrompt from 'inquirer-autocomplete-prompt';

const featureDirs = ['global', ...fs.readdirSync('src/features')];
const featureSubDirs = [
  'components',
  'pages',
  'layouts',
  'hooks',
  'types',
  'providers',
  'lib',
  'mocks',
];

const findPages = (feature) => {
  let pages = glob.sync(`src/components/pages/**/`);

  if (feature !== 'global') {
    pages = glob.sync(`src/features/${feature}/pages/**/`);
  }

  return pages.map((dir) =>
    dir
      .replace('src/components/pages/', '')
      .replace(`src/features/${feature}/pages/`, '')
      .replace('/', '')
  );
};

const findComponents = (feature) => {
  let components = glob.sync(`src/components/**/`);

  if (feature !== 'global') {
    components = glob.sync(`src/features/${feature}/components/**/`);
  }

  return components.map((dir) =>
    dir
      .replace('src/components/', '')
      .replace(`src/features/${feature}/components/`, '')
      .replace('/', '')
  );
};

export default function (plop) {
  plop.setPrompt('autocomplete', inquirerPrompt);
  plop.setGenerator('feature', {
    description: 'Create a new feature',
    prompts: [
      {
        type: 'autocomplete',
        name: 'name',
        suggestOnly: true,
        message: 'What is your feature name?',
        emptyText: 'Create a new feature',
        source: (answersSoFar, input) => {
          if (!input) {
            return featureDirs;
          }

          return featureDirs.filter((dir) => dir.includes(input));
        },
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return featureDirs.includes(value) ? 'This feature already exists' : true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'checkbox',
        name: 'folders',
        message: 'What do you want to add?',
        choices: featureSubDirs.map((id) => ({
          name: id,
          value: id,
          checked: true,
        })),
      },
      {
        type: 'expand',
        name: 'mocking',
        message: 'Create API mocking files?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
    ],
    actions: (data) => {
      const actions = [];

      if (!data) {
        return actions;
      }

      data.folders.forEach((subDir) => {
        if (subDir === 'mocks') {
          return;
        }
        actions.push({
          type: 'add',
          path: `src/features/{{kebabCase name}}/${subDir}/.gitkeep`,
        });
      });

      if (data.mocking === 'yes') {
        actions.push({
          type: 'add',
          path: `src/features/{{kebabCase name}}/mocks/data/{{kebabCase name}}.data.ts`,
          templateFile: 'templates/mocks/data.ts.hbs',
          skipIfExists: true,
        });

        actions.push({
          type: 'add',
          path: `src/features/{{kebabCase name}}/mocks/handlers/{{kebabCase name}}.handlers.ts`,
          data: {
            ...data,
            feature: data.name,
          },
          templateFile: 'templates/mocks/handler.ts.hbs',
          skipIfExists: true,
        });
        console.log('Make sure to add the mocking handlers to the root src/mocks/browser.ts file');

        actions.push({
          type: 'add',
          path: `src/features/{{kebabCase name}}/mocks/factories/{{kebabCase name}}.factory.ts`,
          templateFile: 'templates/mocks/factory.ts.hbs',
          skipIfExists: true,
        });

        actions.push({
          type: 'add',
          path: `src/features/{{kebabCase name}}/mocks/seed.ts`,
          templateFile: 'templates/mocks/seed.ts.hbs',
          skipIfExists: true,
        });
        console.log('Make sure to add the mocking seeder to the root src/mocks/seed.ts file');
      }

      return actions;
    },
  });

  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'list',
        name: 'feature',
        message: 'Which feature does this page belong to?',
        choices: featureDirs,
        default: 'global',
      },
      {
        type: 'autocomplete',
        name: 'name',
        suggestOnly: true,
        message: 'What is your page name?',
        emptyText: 'Create a new page',
        source: (answersSoFar, input) => {
          if (!input) {
            return findPages(answersSoFar.feature);
          }

          return findPages(answersSoFar.feature).filter((dir) => dir.includes(input));
        },
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'expand',
        name: 'storybook',
        message: 'Create a storybook story?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
      {
        type: 'expand',
        name: 'test',
        message: 'Create a test?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
    ],
    actions: (data) => {
      const actions = [];
      const templateFiles = {
        component: 'templates/page/page.tsx.hbs',
        stories: 'templates/page/page.stories.tsx.hbs',
        test: 'templates/page/page.cy.tsx.hbs',
      };
      if (!data) {
        return actions;
      }
      let path = `src/components/pages`;

      if (data.feature === 'global') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: templateFiles.component,
        });
      } else {
        path = `src/features/{{kebabCase feature}}/pages`;
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: templateFiles.component,
        });
      }

      if (data.storybook === 'yes') {
        let prefix = `Pages`;
        // feature name with first letter uppercase
        const featureName = data.feature.charAt(0).toUpperCase() + data.feature.slice(1);

        if (data.feature !== 'global') {
          prefix = `Features/${featureName}/Pages`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx`,
          skipIfExists: true,
          data: {
            prefix,
          },
          templateFile: templateFiles.stories,
        });
      }
      if (data.test === 'yes') {
        let prefix = `pages`;

        if (data.feature !== 'global') {
          prefix = `pages/${data.feature}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.cy.tsx`,
          data: {
            prefix,
          },
          skipIfExists: true,
          templateFile: templateFiles.test,
        });
      }

      return actions;
    },
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'feature',
        message: 'Which feature does this component belong to?',
        choices: featureDirs,
        default: 'global',
      },
      {
        type: 'autocomplete',
        name: 'name',
        suggestOnly: true,
        message: 'What is your component name?',
        emptyText: 'Create a new component',
        source: (answersSoFar, input) => {
          if (!input) {
            return findComponents(answersSoFar.feature);
          }

          return findComponents(answersSoFar.feature).filter((dir) => dir.includes(input));
        },
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'expand',
        name: 'styled',
        message: 'Does the component has multiple variants in Figma?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'no',
      },
      {
        type: 'expand',
        name: 'storybook',
        message: 'Create a storybook story?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
      {
        type: 'expand',
        name: 'test',
        message: 'Create a test?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
    ],
    actions: (data) => {
      const actions = [];
      const templateFiles = {
        component: 'templates/component/component.tsx.hbs',
        stories: 'templates/component/component.stories.tsx.hbs',
        test: 'templates/component/component.cy.tsx.hbs',
      };
      if (!data) {
        return actions;
      }

      if (data.styled === 'yes') {
        templateFiles.component = 'templates/component/component.styled.tsx.hbs';
      }

      if (data.feature === 'global') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: templateFiles.component,
        });
      } else {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: 'src/features/{{kebabCase feature}}/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: templateFiles.component,
        });
      }

      if (data.storybook === 'yes') {
        let prefix = `Components`;
        let path = `src/components/{{kebabCase name}}`;
        // feature name with first letter uppercase
        const featureName = data.feature.charAt(0).toUpperCase() + data.feature.slice(1);

        if (data.feature !== 'global') {
          prefix = `Features/${featureName}/Components`;
          path = `src/features/{{kebabCase feature}}/components/{{kebabCase name}}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}.stories.tsx`,
          skipIfExists: true,
          data: {
            prefix,
          },
          templateFile: templateFiles.stories,
        });
      }
      if (data.test === 'yes') {
        let prefix = `components`;
        let path = `src/components/{{kebabCase name}}`;

        if (data.feature !== 'global') {
          prefix = `components/${data.feature}`;
          path = `src/features/{{kebabCase feature}}/components/{{kebabCase name}}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}.cy.tsx`,
          data: {
            prefix,
          },
          skipIfExists: true,
          templateFile: templateFiles.test,
        });
      }

      return actions;
    },
  });
  plop.setGenerator('mock', {
    description: 'Create a new mock',
    prompts: [
      {
        type: 'list',
        name: 'feature',
        message: 'Which feature does this component belong to?',
        choices: featureDirs.filter((dir) => dir !== 'global'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your mock name?',
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'checkbox',
        name: 'mocks',
        message: 'Which mocks do you want to create?',
        choices: [
          { name: 'data', value: 'data', key: 'd' },
          { name: 'handler', value: 'handler', key: 'h' },
          { name: 'factory', value: 'factory', key: 'f' },
        ],
        default: ['data', 'handler', 'factory'],
      },
    ],
    actions: (data) => {
      const actions = [];
      const templateFiles = {
        data: 'templates/mocks/data.ts.hbs',
        handler: 'templates/mocks/handler.ts.hbs',
        factory: 'templates/mocks/factory.ts.hbs',
      };
      const pluralize = (str) => {
        if (str === 'data') {
          return 'data';
        }
        if (str === 'handler') {
          return 'handlers';
        }
        if (str === 'factory') {
          return 'factories';
        }
      };

      if (!data) {
        return actions;
      }

      data.mocks.forEach((mock) => {
        const plural = pluralize(mock);
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `src/features/{{kebabCase feature}}/mocks/${plural}/{{kebabCase name}}.${mock}.ts`,
          templateFile: templateFiles[mock],
        });
      });

      return actions;
    },
  });
  plop.setGenerator('layout', {
    description: 'Create a new layout',
    prompts: [
      {
        type: 'autocomplete',
        name: 'feature',
        message: 'Which feature does this layout belong to?',
        source: (answersSoFar, input) => {
          if (!input) {
            return featureDirs;
          }
        },
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return true;
          }

          return 'The feature is required';
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout name?',
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'expand',
        name: 'storybook',
        message: 'Create a storybook story?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
      {
        type: 'expand',
        name: 'test',
        message: 'Create a test?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'yes',
      },
    ],
    actions: (data) => {
      const actions = [];
      const templateFiles = {
        component: 'templates/layout/component.tsx.hbs',
        stories: 'templates/layout/component.stories.tsx.hbs',
        test: 'templates/layout/component.cy.tsx.hbs',
      };

      if (!data) {
        return actions;
      }

      if (data.feature === 'global') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: 'src/layouts/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: templateFiles.component,
        });
      } else {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: 'src/features/{{kebabCase feature}}/layouts/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: templateFiles.component,
        });
      }

      if (data.storybook === 'yes') {
        let prefix = `Components`;
        let path = `src/layouts/{{kebabCase name}}`;
        const featureName = data.feature.charAt(0).toUpperCase() + data.feature.slice(1);

        if (data.feature !== 'global') {
          prefix = `Features/${featureName}/Layouts`;
          path = `src/features/{{kebabCase feature}}/layouts/{{kebabCase name}}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}.stories.tsx`,
          skipIfExists: true,
          data: {
            prefix,
          },
          templateFile: templateFiles.stories,
        });
      }
      if (data.test === 'yes') {
        let prefix = `layouts`;
        let path = `src/layouts/{{kebabCase name}}`;

        if (data.feature !== 'global') {
          prefix = `layouts/${data.feature}`;
          path = `src/features/{{kebabCase feature}}/layouts/{{kebabCase name}}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}.cy.tsx`,
          data: {
            prefix,
          },
          skipIfExists: true,
          templateFile: templateFiles.test,
        });
      }

      return actions;
    },
  });

  plop.setGenerator('hook', {
    description: 'Create a new hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name (without use)?',
        validate: (value) => {
          if (value && /.+/.test(value)) {
            return true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'list',
        name: 'feature',
        message: 'Which feature does this hook belong to?',
        choices: featureDirs,
        default: 'global',
      },
    ],
    actions: (data) => {
      const actions = [];

      if (!data) {
        return actions;
      }

      if (data.feature === 'global') {
        actions.push({
          type: 'add',
          path: 'src/hooks/use{{pascalCase name}}.ts',
          templateFile: 'templates/hook/hook.ts.hbs',
        });
      } else {
        actions.push({
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/hooks/use{{pascalCase name}}.ts',
          templateFile: 'templates/hook/hook.ts.hbs',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('cleanup', {
    description: 'Cleanup example features',
    prompts: [
      {
        type: 'list',
        name: 'feature',
        message: 'Which feature do you want to cleanup?',
        choices: ['all', ...featureDirs.filter((feature) => feature !== 'global')],
        default: 'all',
      },
    ],
    actions: (data) => {
      const actions = [];
      const _featureDirs = [...featureDirs].filter((feature) => feature !== 'global');

      if (!data) {
        return actions;
      }

      if (data.feature === 'all') {
        _featureDirs.forEach((feature) => {
          fs.rmSync(`docs/features`, { recursive: true });
          console.info(`Removed docs/features`);
          fs.rmSync(`src/features/${feature}`, { recursive: true });
          console.info(`Removed src/features/${feature}`);
          fs.rmSync(`src/pages/${feature}`, { recursive: true });
          console.info(`Removed src/pages/${feature}`);
          if (feature === 'auth') {
            fs.rmSync('src/pages/api', { recursive: true });
            console.info('Removed src/pages/api');
          }
          actions.push({
            type: 'add',
            path: 'src/mocks/browser.ts',
            templateFile: 'templates/mocks/browser.ts.hbs',
            force: true,
          });
        });
      } else {
        fs.rmSync(`src/features/${data.feature}`, { recursive: true });
        console.info(`Removed src/features/${data.feature}`);
        fs.rmSync(`src/pages/${data.feature}`, { recursive: true });
        console.info(`Removed src/pages/${data.feature}`);
        if (data.feature === 'auth') {
          fs.rmSync('src/pages/api', { recursive: true });
          console.info('Removed src/pages/api');
        }
      }

      return actions;
    },
  });
}
