module.exports = { 
  "extends": "standard",
    "rules": {
        "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "ignoreRestSiblings": false }]
    }
};