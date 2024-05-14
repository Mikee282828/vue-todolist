const { createApp } = Vue

createApp({
    data() {
        return {
            // lista : [
            //     "mangiare la pizza",
            //     "fare la lavatrice",
            //     "fare gli auguri a Giuditta"
            // ],
            listaBonus: [
                {
                    titolo: "mangiare la pizza",
                    done: false
                },
                {
                    titolo: "fare la lavatrice",
                    done: false
                },
                {
                    titolo: "fare gli auguri a Giuditta",
                    done: false
                }],
            nuovo: null,
            clicked: true
        }
    },
    
    methods: {
        addTask(task) {
            let oggetto = {titolo: task, done: false};
            this.listaBonus.push(oggetto);  
            // // chiedere a Luca perché devo per forza mettere il setTimeout
            // setTimeout(function () {
            //     document.querySelector("input").value = "";
            // }, 10);
            this.nuovo = null;
        },
        done(index) {
            this.listaBonus[index].done = true;
        }
    }
}).mount('#app')
