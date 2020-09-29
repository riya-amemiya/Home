// pathモジュールを読み(output.pathに絶対パスを指定するため)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
const outputPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const abots = [
    'basic',
    'intermediate',
    'advanced'
]
const lesson = (abot) => {
    for (let i = 1; i < 5; i++) {
        module.exports.plugins.push = new HtmlWebpackPlugin({
            title: 'My app',
            chunks: [abot, 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: `./src/html/lesson/${abot}/${i}/${abot}-${i}.html`,
            filename: `./HTML_${abot}-${i}.html`,
            hash: true,
        })
    }
}
for (let i = 0; i < 3; i++) {
    lesson(abots[i])
}
module.exports = {
    // モードの設定。指定可能な値は、none, development ,production（デフォルト）
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development',
    // アプリケーションが実行を開始されるポイント(エントリーポイント)
    // 配列で指定すると、すべての項目が実行される
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: {
        'index': './src/js/stylesheet.js',
        'template': './src/js/template.js',
        'c': './src/js/lesson/c.js',
        'html': './src/js/lesson/html.js',
        'java': './src/js/lesson/java.js',
        'python': './src/js/lesson/python.js',
        'return': './src/js/return.js',
        'basic': './src/js/basic.js',
        'basic1': './src/js/basic-1.js',
        'basic2': './src/js/basic-2.js',
        'basic3': './src/js/basic-3.js',
        'basicc': './src/js/basicc.js',
        'FCC': './src/js/FCC.js',
        'advanced': './src/js/advanced.js',
        'classs': './src/js/classs.js',
        'intermediate': './src/js/intermediate.js',
        'scss': './src/js/scss.js',
        'intermediate': "./src/js/intermediate.js",
        'advanced': './src/js/advanced.js'
    },
    output: {
        filename: './js/[name].js',
        // ビルド後のファイルが出力される"絶対パス"ディレクトリ
        // https://webpack.js.org/configuration/output/#outputpath
        path: outputPath
    },
    devServer: {
        contentBase: `${outputPath}/html`
    },
    // https://webpack.js.org/configuration/module/#rule-conditions
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                'css-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', //loader名
                options: { //Babelの設定
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.scss$/i,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: 'expanded',
                        },
                    },
                },
            ]
        }, {
            test: /\.(jpg|png|ico)$/,
            loader: 'url-loader',
            options: {
                limit: 2048,
                name: './img/[name].[ext]'
            }
        }, {
            test: /\.(svg)$/i,
            loader: 'file-loader',
            options: {
                name: './img/[name].[ext]',
            },
        }, {
            test: /\.ejs$/i,
            use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    },
                },
                {
                    loader: 'ejs-plain-loader'
                }
            ]
        }, ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Promise: 'es6-promise',
        }),
        new MiniCssExtractPlugin({}),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['index', 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/html/index.ejs',
            filename: './index.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['c', 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/C/c.ejs',
            filename: './c.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['html', 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/HTML/html.ejs',
            filename: './html.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['java', 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/Java/java.ejs',
            filename: './java.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['python', 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/Python/python.ejs',
            filename: './python.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/HTML/lesson/1/notcss.ejs',
            filename: './HTML_notcss.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: ['return', 'template'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/HTML/lesson/2/return.ejs',
            filename: './HTML_return.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: "基本",
            originalHeader: "basic",
            get1: "中級",
            get2: "上級",
            url1: "intermediate",
            url2: "advanced",
            templateParameters: {
                'title': "基本",
                'originalHeader': "basic",
                'get1': "中級",
                'get2': "上級",
                'url1': "intermediate",
                'url2': "advanced",
            },
            chunks: ['basic', 'template'],
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/template/template.html',
            filename: './HTML_basic.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: "中級",
            originalHeader: "intermediate",
            get1: "基本",
            get2: "上級",
            url1: "basic",
            url2: "advanced",
            templateParameters: {
                'title': "中級",
                'originalHeader': "intermediate",
                'get1': "基本",
                'get2': "上級",
                'url1': "basic",
                'url2': "advanced",
            },
            chunks: ['intermediate', 'template'],
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/template/template.html',
            filename: './HTML_intermediate.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: "上級",
            originalHeader: "advanced",
            get1: "基本",
            get2: "中級",
            url1: "basic",
            url2: "intermediate",
            templateParameters: {
                'title': "上級",
                'originalHeader': "advanced",
                'get1': "基本",
                'get2': "中級",
                'url1': "basic",
                'url2': "intermediate",
            },
            chunks: ['advanced', 'template'],
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: './src/lesson/template/template.html',
            filename: './HTML_advanced.html',
            hash: true,
        })
    ]
};