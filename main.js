const { createApp } = Vue

createApp({
    data() {
        return {
            lista : [
                "mangiare la pizza",
                "fare la lavatrice",
                "fare gli auguri a Giuditta"
            ],
            nuovo : null
        }
    },
    methods:{
        addTask(task){
            console.log(`L'elemento aggiunto è: ${task}`);
            this.lista.push(task);
            setTimeout(function(){
                document.querySelector("input").value = "";
            },10);
        }
    }
}).mount('#app')
