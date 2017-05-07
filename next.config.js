const path = require('path')
const glob = require('glob')

module.exports = {
    webpack: (config, { dev }) => {
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['babel-loader', {
                    loader: 'emit-file-loader',
                    options: {
                        name: 'dist/[path][name].[ext]'
                    }
                },
                    {
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'val-loader'
                    },
                    {
                        loader: 'exports-loader',
                        options: {
                            0: 'exports[0][1]',
                            1: 'exports.locals'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }]
            },
            {
                test: /\.s(a|c)ss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        return config
    }
};