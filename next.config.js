require('dotenv').config();
const path = require('path');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');


const withPlugins = require('next-compose-plugins');
const IconfontPlugin = require('iconfont-plugin-webpack');
const optimizedImages = require('next-optimized-images');

const cssTemplate = require('./public/icons/template');
const configs = require('./config');
const resolve = path.resolve.bind(path, __dirname);
const nextConfig = {
  target: 'serverless',
  ...configs, // publicRuntimeConfig and serverRuntimeConfig from ../config at root dir.
  webpack: (config) => {
    // modify the `config` here
    const iconfontConfig = new IconfontPlugin({
      src: resolve('public/icons'), // required - directory where your .svg files are located
      family: 'icons', // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
      dest: {
        css: resolve('styles/variables/_[family].scss'), // required - paths of generated css files
        font: resolve('public/fonts/icons/[family].[type]')// required - paths of generated font files
      },
      watch: {
        pattern: resolve('public/icons/**/*.svg'), // required - watch these files to reload
        cwd: undefined // optional - current working dir for watching
      },
      cssTemplate // optional - the function to generate css contents
    });

    const importScss = {
      test: /\.scss$/,
      loader: 'import-glob',   // use['import-glob'] // use [{loader: 'import-glob', options: {...}}] 
      /*options: {
        ...
      }*/
    };
    const eslintLoader = {
      test: /\.(ts)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    };

    //config.module.rules.push(eslintLoader);
    config.module.rules.push(importScss);
    config.plugins.push(iconfontConfig);
    config.resolve.modules.push(resolve('./'));

    return config;
  }
};

module.exports = withPlugins([
  [withSass, {/*
        cssModules: true */
  }],
  [withFonts, {
    enableSvg: true
  }],
  [withCss, {
    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 100000,
        name: '[name].[ext]'
      }
    }
  }],
  [optimizedImages, {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
  }
  ]
], nextConfig);