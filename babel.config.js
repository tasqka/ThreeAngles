module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', {
        jsxImportSource: 'react',
        lazyImports: true,
      }]
    ],
    plugins: [
      // Required by react-native-reanimated (must be last).
      'react-native-reanimated/plugin',
    ],
  };
};
