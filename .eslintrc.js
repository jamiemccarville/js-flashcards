module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "plugin:vue/base"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "vue/no-parsing-error": "warn"
    
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  
};
 