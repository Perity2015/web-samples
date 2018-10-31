const path = require('path');

const CustomAlias = {
    '@core': path.resolve(__dirname, 'src/core'),
    '@helper': path.resolve(__dirname, 'src/helper'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@routers': path.resolve(__dirname, 'src/routers'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@common': path.resolve(__dirname, 'src/common'),
    '@lib': path.resolve(__dirname, 'lib'),
};

module.exports = CustomAlias;