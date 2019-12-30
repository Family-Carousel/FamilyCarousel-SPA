module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        targets: {
          ie: '11'
        }
      }
    ]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
