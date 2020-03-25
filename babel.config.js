module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          components: './app/components',
          assets: './app/assets',
          images: './app/assets/images',
          constants: './app/constants',
        },
      },
    ],
  ],
};
