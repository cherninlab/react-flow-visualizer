module.exports = {
    pluginSearchDirs: false,
    printWidth: 100,
    proseWrap: 'never',
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
      {
        files: '*.md',
        options: {
          proseWrap: 'preserve',
        },
      },
    ],
  };