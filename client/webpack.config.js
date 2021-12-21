import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export const entry = './src/App.js'
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'index_bundle.js',
  publicPath: '/'
}
export const module = {
  rules: [
    { test: /\.(js)$/, use: 'babel-loader' },
    { test: /\.css$/, use: ['style-loader', 'css-loader'] }
  ]
}
export const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html'
  }),
  new CopyPlugin([
    { from: '_redirects' }
  ])
]
export const devServer = {
  historyApiFallback: true
}
