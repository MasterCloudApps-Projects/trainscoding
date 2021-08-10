function init({ helloWorldRepository }) {
    return {
        getGreetings: () => helloWorldRepository.getGreetings()
    };
};

export default { init };
