const path = require('path');

module.exports = {
    mode: 'development', //Para saber si esta en desarrollo o en producción
    entry: './src/index.js', // Punto de entrada de tu app
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style-loader','css-loader'], // Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para convertir JS moderno al JA compatible a mas navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Genera source maps para facilitar la depuración
    devServer: {
       static: {
        directory: path.resolve(__dirname, 'dist'), //Carpeta del que correra el servidor
       },
        compress: true, // Habilitar comprensión gzip
        port: 9000, // Puerto del servidor de desarrollo
    },
}