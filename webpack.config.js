const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');


// eslint-disable-next-line no-console
// console.log(`=> bootstrap-loader configuration: ${bootstrapEntryPoints.dev}`);

module.exports = {
    entry: ['./app/javascripts/app.js', './app/javascripts/canvas.js',
        './app/javascripts/google_analytics.js', './app/javascripts/faq.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    plugins: [
        // Copy our app's index.html to the build folder.
        new CopyWebpackPlugin([
            {from: './app/index.html', to: "index.html"},
            {from: './app/canvas.html', to: "canvas.html"},
            {from: './app/menu.html', to: "menu.html"},
            {from: './app/footer.html', to: "footer.html"},

            {from: './app/activity-activity.html', to: "activity-activity.html"},
            {from: './app/admin-challenge-add.html', to: "admin-challenge-add.html"},
            {from: './app/admin-challenge-list.html', to: "admin-challenge-list.html"},
            {from: './app/user-profile.html', to: "user-profile.html"},
            {from: './app/user-using-wrong-network.html', to: "user-using-wrong-network.html"},
            {from: './app/user-your-metamask-is-locked.html', to: "user-your-metamask-is-locked.html"},
            {from: './app/wrong_browser.html', to: "wrong_browser.html"},
            {from: './app/faq.html', to: "faq.html"},
            {from: './app/privacy_policy.html', to: "privacy_policy.html"},
            {from: './app/terms_of_use.html', to: "terms_of_use.html"},


            // images
            {from: './app/images/add-icon.svg', to: "images/add-icon.svg"},
            {from: './app/images/card-img-1.svg', to: "images/card-img-1.svg"},
            {from: './app/images/card-img-2.svg', to: "images/card-img-2.svg"},
            {from: './app/images/card-img-3.svg', to: "images/card-img-3.svg"},
            {from: './app/images/wrong_provider.png', to: "images/wrong_provider.png"},
            {from: './app/images/unlock_metamask.png', to: "images/unlock_metamask.png"},
            {from: './app/images/loading.png', to: "images/loading.png"},
            {from: './app/images/logo.svg', to: "images/logo.svg"},
            {from: './app/images/favicon.png', to: "images/favicon.png"},

            {from: './app/images/opera_icon.png', to: "images/opera_icon.png"},
            {from: './app/images/chrome_icon.png', to: "images/chrome_icon.png"},
            {from: './app/images/firefox_icon.png', to: "images/firefox_icon.png"},

            // badge body
            {from: './app/assets/body.svg', to: "assets/body.svg"},

            // badge faces
            {from: './app/assets/face_1.svg', to: "assets/face_1.svg"},
            {from: './app/assets/face_2.svg', to: "assets/face_2.svg"},
            {from: './app/assets/face_3.svg', to: "assets/face_3.svg"},
            {from: './app/assets/face_4.svg', to: "assets/face_4.svg"},
            {from: './app/assets/face_5.svg', to: "assets/face_5.svg"},
            {from: './app/assets/face_6.svg', to: "assets/face_6.svg"},
            {from: './app/assets/face_7.svg', to: "assets/face_7.svg"},
            {from: './app/assets/face_8.svg', to: "assets/face_8.svg"},

            // badge masks
            {from: './app/assets/mask_1.svg', to: "assets/mask_1.svg"},
            {from: './app/assets/mask_2.svg', to: "assets/mask_2.svg"},
            {from: './app/assets/mask_3.svg', to: "assets/mask_3.svg"},
            {from: './app/assets/mask_4.svg', to: "assets/mask_4.svg"},

            // css
            {from: './app/stylesheets/bootstrap.css', to: "css/bootstrap.css"}

        ]),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
            // ,
            //
            // // Bootstrap 3
            // {test: /bootstrap-sass\/assets\/javascripts\//, use: 'imports-loader?jQuery=jquery'},

        ],
        loaders: [
            {test: /\.json$/, use: 'json-loader'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}
