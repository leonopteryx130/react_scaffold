module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 1rem = 16px
      propList: ['*'],
      minPixelValue: 0,
      exclude: /node_modules/i,
    },
  },
};


