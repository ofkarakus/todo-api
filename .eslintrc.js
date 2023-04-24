module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: ['prettier'],
    parserOptions: {
      sourceType: 'module'
    },
    ignorePatterns: [],
    plugins: [
      'eslint-plugin-import',
      'eslint-plugin-jsdoc',
      'eslint-plugin-prefer-arrow',
      'switch-case',
      'unused-imports'
    ],
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'array-callback-return': 'error',
      'brace-style': 'error',
      'camelcase': [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: true,
          ignoreImports: true,
          allow: ['^UNSAFE_']
        }
      ],
      // 'comma-dangle': [
      //   'error',
      //   {
      //     arrays: 'never',
      //     exports: 'never',
      //     functions: 'never',
      //     imports: 'never'
      //   }
      // ],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'comma-style': ['error', 'last'],
      'complexity': 'off',
      'constructor-super': 'error',
      'curly': ['error', 'multi-line'],
      'dot-notation': 'off',
      'eqeqeq': ['error', 'smart'],
      'guard-for-in': 'error',
      'id-match': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-internal-modules': 'off',
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'unknown',
            'internal',
            'parent',
            'index',
            'sibling',
            'object'
          ],
          // Here you could add path groups
          'pathGroups': [
            // Think about these
            // {
            //   pattern: "lib",
            //   group: "internal",
            //   position: "before"
            // },
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'jsdoc/newline-after-description': 'error',
      'key-spacing': ['error', { beforeColon: false }],
      'max-classes-per-file': ['error', 1],
      'max-len': 'off',
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': [
        'warn',
        {
          allow: [
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context',
            'log'
          ]
        }
      ],
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-fallthrough': 'off',
      'no-invalid-this': 'off',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0
        }
      ],
      'no-namespace': 'off',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-parameter-properties': 'off',
      'no-param-reassign': 2,
      // 'no-process-env': 'error',
      'no-redeclare': 'error',
      'no-return-await': 'off',
      'no-sequences': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowTernary: true
        }
      ],
      'no-unused-labels': 'error',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'nonblock-statement-body-position': 'error',
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true
        }
      ],
      'object-shorthand': ['error'],
      'one-var': ['error', 'never'],
      'padded-blocks': ['error', 'never'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'function'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'continue'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'switch'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'default'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'class'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'export'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'for'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'if'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'block-like'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'multiline-block-like'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'multiline-expression'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'try'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'while'
        }
      ],
      'prefer-arrow/prefer-arrow-functions': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'radix': 'off',
      'semi': ['error', 'always'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            exceptions: ['-']
          }
        }
      ],
      'space-in-parens': ['error', 'never'],
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/']
        }
      ],
      'space-before-blocks': 2,
      'space-infix-ops': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'off',
      'wrap-iife': 'error',
      'quote-props': ['error', 'consistent-as-needed']
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/adjacent-overload-signatures': 'error',
          '@typescript-eslint/array-type': 'off',
          '@typescript-eslint/ban-types': [
            'error',
            {
              types: {
                Object: {
                  message: 'Avoid using the `Object` type. Did you mean `object`?'
                },
                Function: {
                  message:
                    'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                },
                Boolean: {
                  message:
                    'Avoid using the `Boolean` type. Did you mean `boolean`?'
                },
                Number: {
                  message: 'Avoid using the `Number` type. Did you mean `number`?'
                },
                String: {
                  message: 'Avoid using the `String` type. Did you mean `string`?'
                },
                Symbol: {
                  message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
                }
              }
            }
          ],
          '@typescript-eslint/consistent-type-assertions': 'off',
          '@typescript-eslint/explicit-function-return-type': ['error'],
          '@typescript-eslint/explicit-member-accessibility': [
            'off',
            {
              accessibility: 'explicit'
            }
          ],
          '@typescript-eslint/member-delimiter-style': [
            'error',
            {
              multiline: {
                delimiter: 'semi',
                requireLast: true
              },
              singleline: {
                delimiter: 'semi',
                requireLast: false
              }
            }
          ],
          '@typescript-eslint/member-ordering': 'off',
          '@typescript-eslint/naming-convention': 'off',
          '@typescript-eslint/no-empty-interface': 'error',
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-misused-new': 'error',
          '@typescript-eslint/no-shadow': [
            'error',
            {
              hoist: 'all'
            }
          ],
          '@typescript-eslint/no-this-alias': 'error',
          '@typescript-eslint/no-var-requires': 'error',
          '@typescript-eslint/no-unused-vars': [
            'error',
            {
              vars: 'all',
              varsIgnorePattern: '^_',
              args: 'after-used',
              argsIgnorePattern: '^_'
            }
          ],
          '@typescript-eslint/prefer-for-of': 'error',
          '@typescript-eslint/prefer-function-type': 'error',
          '@typescript-eslint/prefer-namespace-keyword': 'error',
          '@typescript-eslint/triple-slash-reference': [
            'error',
            {
              path: 'always',
              types: 'prefer-import',
              lib: 'always'
            }
          ],
          '@typescript-eslint/unified-signatures': 'error'
        }
      }
    ]
  };