/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/', 'vite.config.ts'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: './tsconfig.json'
      }
    }
  },

  plugins: [
    'prettier',
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react-hooks',
    'promise',
    '@tanstack/query'
  ],
  extends: [
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier'
  ],

  rules: {
    // ##########
    // # CUSTOM #
    // ##########
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'prettier/prettier': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'arrow-spacing': 'error',
    'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: false }],
    'no-restricted-properties': [
      'warn',
      {
        object: ['import']['meta'],
        property: 'env',
        message: 'Use `envVariables` in `src/utils/env.ts` instead of `import.meta.env`'
      }
    ],
    // ###########
    // # PLUGINS #
    // ###########

    // # TYPESCRIPT

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'should',
          'has',
          'can',
          'did',
          'will',
          'has',
          'get',
          'set',
          'should',
          'must',
          'expect',
          'actual'
        ]
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z]',
          match: true
        }
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z]',
          match: true
        }
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
        custom: {
          regex: '^[A-Z]',
          match: true
        }
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z]',
          match: true
        }
      },
      {
        selector: 'class',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow'
      }
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'static-field',
          'static-method',
          'field',
          'abstract-method',
          'constructor',
          'method'
        ]
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/ban-types': 'off',

    // # React
    'react/jsx-boolean-value': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
