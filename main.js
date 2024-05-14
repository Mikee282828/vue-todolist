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
                    done: "false"
                },
                {
                    titolo: "fare la lavatrice",
                    done: "false"
                },
                {
                    titolo: "fare gli auguri a Giuditta",
                    done: "false"
                }],
            nuovo: "",
            clicked: true
        }
    },
    methods: {
        addTask(task) {
            let oggetto = {titolo: task, done: "false"};
            this.listaBonus.push(oggetto);   
            setTimeout(function () {
                document.querySelector("input").value = "";
            }, 10);
        },
        done(index) {
            let listItem = document.querySelector(`li:nth-of-type(${index})`);
            listItem.classList.add("d-none");
        }
    }
}).mount('#app')
