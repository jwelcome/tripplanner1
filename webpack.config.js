const indexjs = require('./src/index');


module.exports = {
  mode: "development",

  entry: './src/index.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }

}


