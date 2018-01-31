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
            }, {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader', {
                    loader:"postcss-loader",
                    options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                        plugins: (loader) => [
                            require('autoprefixer')(), //CSS浏览器兼容
                        ]
                    }
                }]
            }, {
                test: /\.s(a|c)ss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    { loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                            .map((d) => path.join(__dirname, d))
                            .map((g) => glob.sync(g))
                            .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        )
        return config
    }
}