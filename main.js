const { createApp } = Vue

createApp({
    data() {
        return {
            lista : [
                "mangiare la pizza",
                "fare la lavatrice",
                "fare gli auguri a Giuditta"
            ],
            nuovo : null,
            clicked : true
        }
    },
    methods:{
        addTask(task){
            console.log(`L'elemento aggiunto è: ${task}`);
            this.lista.push(task);
            setTimeout(function(){
                document.querySelector("input").value = "";
            },10);
        },
        done(index){
            let listItem = document.querySelector(`li:nth-of-type(${index})`);
            listItem.classList.add("d-none");
        }
    }
}).mount('#app')
