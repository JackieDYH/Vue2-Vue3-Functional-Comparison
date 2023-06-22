/*
 * @Author: Jackie
 * @Date: 2023-06-22 11:18:32
 * @LastEditTime: 2023-06-22 11:23:30
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue2-Vue3-Functional-Comparison/vue3-demo/.eslintrc.js
 * @version: 
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    // "eslint:recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
