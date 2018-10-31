const paths = require('./paths');
const tsImportPluginFactory = require('ts-import-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require("./theme");

const autoprefixer = require('autoprefixer')({
    browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
    ],
    flexbox: '2009',
});

const flexBugFixes = require('postcss-flexbugs-fixes')();

const urlLoader = {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve('url-loader'),
    options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
    },
};

const importPluginOption = [
    {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true
    },
    {
        libraryName: 'antd-mobile',
        libraryDirectory: 'lib',
        style: true,
    }
];

const jsLoader = {
    test: /\.(js|jsx|mjs)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: ['syntax-dynamic-import', 'transform-decorators-legacy'],
        compact: true,
    },
};

const tsLoader = {
    test: /\.(ts|tsx)$/,
    include: paths.appSrc,
    use: [
        {
            loader: require.resolve('ts-loader'),
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [tsImportPluginFactory(importPluginOption)]
                })
            }
        }
    ]
};

const postcssLoader = {
    loader: require.resolve('postcss-loader'),
    options: {
        plugins: () => [
            flexBugFixes,
            autoprefixer,
        ],
    },
};

const rawCssLoaderDev = {
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
    },
};

const rawCssLoaderProd = {
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        minimize: true,
        sourceMap: true,
    },
};

const cssLoaderDev = {
    test: /\.css$/,
    use: [
        require.resolve('style-loader'),
        rawCssLoaderDev,
        postcssLoader,
    ],
};

const cssLoaderProd = {
    test: /\.css$/,
    use: [
        require.resolve('style-loader'),
        rawCssLoaderProd,
        postcssLoader,
    ],
};

const cssLoaderProdExtract = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
        {
            fallback: require.resolve('style-loader'),
            use: [
                rawCssLoaderProd,
                postcssLoader,
            ],
        }
    ),
};

const lessLoaderDev = {
    test: /\.less$/,
    use: [
        require.resolve('style-loader'),
        rawCssLoaderDev,
        postcssLoader,
        {
            loader: require.resolve('less-loader'),
            options: {
                modifyVars: theme
            }
        }
    ],
};

const lessLoaderProd = {
    test: /\.less$/,
    use: [
        require.resolve('style-loader'),
        rawCssLoaderProd,
        postcssLoader,
        {
            loader: require.resolve('less-loader'),
            options: {
                modifyVars: theme
            }
        }
    ],
};

const lessLoaderProdExtract = {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
        {
            fallback: require.resolve('style-loader'),
            use: [
                rawCssLoaderProd,
                postcssLoader,
                {
                    loader: require.resolve('less-loader'),
                    options: {
                        modifyVars: theme
                    }
                }
            ],
        }
    )
};

const fileLoader = {
    loader: require.resolve('file-loader'),
    exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
    options: {
        name: '[name].[ext]',
    },
};

module.exports = {
    urlLoader,
    jsLoader,
    tsLoader,
    cssLoaderDev,
    cssLoaderProd,
    cssLoaderProdExtract,
    lessLoaderDev,
    lessLoaderProd,
    lessLoaderProdExtract,
    fileLoader,
    postcssLoader
};
