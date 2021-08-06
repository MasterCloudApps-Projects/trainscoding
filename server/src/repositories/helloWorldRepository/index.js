function getGreetings() {
     return 'Hello world!'
};

const helloWorldStore = {
    getGreetings
};

function init(/* It should receive a model object if exists */) {
    return {
        ...helloWorldStore,
        getSchemas: () => {}
    };
};


module.exports = { init };
