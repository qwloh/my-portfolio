const path = require('path');

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'main.js',
    path:path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  devServer:{
    contentBase:'./dist',
    stats:{
      assets:true
    }
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:/\.s[ac]ss$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'sass-loader',
           options:{
             sourceMap:true,
             sassOptions:{
               includePaths:[path.resolve(__dirname, 'src/_inventory')]
             }
          }
          }]
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test:/\.mp3$/,
        use:{
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'assets/audio/'
          }
        }
      }
    ]
  },
  resolve:{
    alias:{
      Inv: path.resolve(__dirname, 'src/_inventory/'),
      Context:path.resolve(__dirname, 'src/AppContext')
    }
  }

};
