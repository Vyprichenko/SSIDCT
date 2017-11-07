const path = require('path');
const srcPath = path.resolve(__dirname, 'public/js');

module.exports = {
    entry: './public/js/index',
    output: {
        path: path.resolve(srcPath, 'builds'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: srcPath,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            srcPath
        ],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    target: 'web',
}