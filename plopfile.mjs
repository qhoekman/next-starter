import fs from 'fs';

const featureDirs = ['shared', ...fs.readdirSync('src/features')];
const featureSubDirs = ['components', 'pages', 'layouts', 'hooks', 'types'];

export default function (plop) {
  plop.setGenerator('feature', {
    description: 'Create a new feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your feature name?',
        validate: (value) => {
          if (/.+/.test(value)) {
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
    ],
    actions: (data) => {
      const actions = [];

      if (!data) {
        return actions;
      }

      data.folders.forEach((subDir) => {
        actions.push({
          type: 'add',
          path: `src/features/{{kebabCase name}}/${subDir}/.gitkeep`,
        });
      });
      console.warn(actions);
      return actions;
    },
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'list',
        name: 'feature',
        message: 'Which feature does this component belong to?',
        choices: featureDirs,
        default: 'shared',
      },
      {
        type: 'expand',
        name: 'styled',
        message: 'Does the component has multiple styles?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'n',
      },
      {
        type: 'expand',
        name: 'storybook',
        message: 'Create a storybook story?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
        default: 'y',
      },
      {
        type: 'expand',
        name: 'test',
        message: 'Create a test?',
        choices: [
          { key: 'y', name: 'Yes', value: 'yes' },
          { key: 'n', name: 'No', value: 'no' },
        ],
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

      if (data.feature === 'shared') {
        actions.push({
          type: 'add',
          path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: templateFiles.component,
        });
      } else {
        actions.push({
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: templateFiles.component,
        });
      }

      if (data.storybook === 'yes') {
        let prefix = `Components`;
        let path = `src/components/{{kebabCase name}}`;

        if (data.feature !== 'shared') {
          prefix = `Features/${data.feature}`;
          path = `src/features/{{kebabCase feature}}/components/{{kebabCase name}}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}.stories.tsx`,
          data: {
            prefix,
          },
          templateFile: templateFiles.stories,
        });
      }
      if (data.test === 'yes') {
        let prefix = `components`;
        let path = `src/components/{{kebabCase name}}`;

        if (data.feature !== 'shared') {
          prefix = `components/${data.feature}`;
          path = `src/features/{{kebabCase feature}}/components/{{kebabCase name}}`;
        }

        actions.push({
          type: 'add',
          path: `${path}/{{kebabCase name}}.cy.tsx`,
          data: {
            prefix,
          },
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
          if (/.+/.test(value)) {
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
        default: 'shared',
      },
    ],
    actions: (data) => {
      const actions = [];

      if (!data) {
        return actions;
      }

      if (data.feature === 'shared') {
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
}
