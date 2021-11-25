# `@trainscoding/prettier-config`

Javascript module, published on NPM Registry, that contains the Prettier configuration used in Trainscoding project.

This module is public and it can be used in any regular project. It adds a limited set of rules on top of Prettier's rules.
These are:

```
printWidth: 120
singleQuote: true
tabWidth: 4
trailingComma: 'none'
arrowParens: 'avoid'
```


## Usage
Extend this module in your prettier configuration file of your project. Example:
```
// .prettierrc
{
  "prettier": "@trainscoding/prettier-config"
}
```
