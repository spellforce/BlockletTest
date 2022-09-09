module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        // "useBuiltIns": "usage",
        // "corejs": 3,
        // "targets": "defaults",
        // "modules": false,
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-transform-modules-commonjs",
    ["import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}