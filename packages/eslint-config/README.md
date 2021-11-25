# `@trainscoding/eslint-config`

Javascript module, published on NPM Registry, that contains the Eslint configuration used in [Trainscoding](https://github.com/MasterCloudApps-Projects/trainscoding/) project.

This module is public and it can be used in any regular project. It is based on Eslint recommended set of rules.

## Usage
Extend this module in your eslint configuration file of your project. Example:

```
// .eslintrc
{
    "extends": ["@trainscoding/eslint-config"],
    "plugins": ["@typescript-eslint", "prettier"],
    "parser": "@typescript-eslint/parser",
    ...
    <your-own-eslint-configuration-here>
}

```
