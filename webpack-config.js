module.exports = {
    devtool: 'source-map',
    entry: "./app.js",
    mode: "development",
    output: {
      entry: path.join(__dirname,'/client/index.js'),
      output: {
        path: '/',
        filename: 'bundle.js'
      }
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
              test: /\.(jsx|js)$/,
              exclude: /node_modules/,
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', {
                      "targets": "defaults" 
                    }],
                    '@babel/preset-react'
                  ]
                }
              }]
            }
        ]
    }
}