
module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost', // 允许外部ip访问
        port: 8081, // 端口
        https: false, // 启用https
        overlay: {
            warnings: false,
            errors: false
        }, // 错误、警告在页面弹出
        proxy: {
            '/api': {
                target: 'localhost:8080',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    },
}
