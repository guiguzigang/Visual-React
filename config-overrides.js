const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        style: true
    }], config);
    config = rewireLess.withLoaderOptions({
    	// 此处定制主题
        modifyVars: {
            "@primary-color": "#1DA57A"
        },
    })(config, env);
    return config;
}