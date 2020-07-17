module.exports = function(_, options) {
    return {
        name: 'docusaurus-plugin-fontloader',
        configureWebpack(_, isServer, utils) {
            return {
                module: {
                    rules: [
                        {
                            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: '[name].[ext]',
                                        outputPath: 'fonts/'
                                    }
                                }
                            ]
                        }
                    ]
                }
            };
        }
    };
};
