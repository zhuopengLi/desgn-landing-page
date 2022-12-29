const postcssjitprops = require("postcss-jit-props");
const OpenProps = require("open-props");
const postcssCustomMedia = require('postcss-custom-media');
const postcssSass = require('@csstools/postcss-sass');

module.exports = {
    plugins: [
        postcssjitprops(OpenProps),
        require('autoprefixer'),
        postcssCustomMedia(),
        // postcssSass()
    ]
};