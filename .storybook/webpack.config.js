module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [require.resolve('babel-plugin-remove-graphql-queries')]
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
