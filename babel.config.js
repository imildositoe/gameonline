module.exports = {
  modules: {
    rules: [
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=app/images/[name].[ext]"},
    ]
  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
