const { createApp } = Vue

createApp({
    data() {
        return {
            lista : [
                "mangiare la pizza",
                "fare la lavatrice",
                "fare gli auguri a Giuditta"
            ]
        }
    }
}).mount('#app')
