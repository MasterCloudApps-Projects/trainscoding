function init({ helloWorldRepository }) {
    return {
        getGreetings: () => helloWorldRepository.getGreetings()
    };
};

module.exports = { init };
