const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: '@import "_vars.scss";',
        includePaths: [path.resolve(__dirname, './src/shared/ui/lib')],
    },
};

module.exports = nextConfig;
