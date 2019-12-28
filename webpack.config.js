const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const config = {
    entry: {
      main: './src/index.tsx'
    },

    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, 'build'),
      pathinfo: false
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    devtool: argv.mode === 'development' ? 'inline-source-map' : 'source-map',

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.mjs', '.json']
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html'
      }),
      new Dotenv({
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      })
    ],

    devServer: {
      host: '0.0.0.0',
      port: '4444',
      stats: {
        colors: true
      },
      compress: true,
      overlay: {
        warnings: true,
        errors: true
      },
      progress: true,
      stats: 'errors-only',
      open: false,
      contentBase: path.join(__dirname, 'public'),
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/
      }
    },

    node: {
      fs: 'empty'
    }
  };

  return config;
};
