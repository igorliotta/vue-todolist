const { createApp } = Vue;

createApp({
    data() {
      return {
        headerTitle: 'Vue To Do List',
        todos: [
            {
                text: 'Lavare i piatti',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Sistemare il lavandino',
                done: false,
            },
            {
                text: 'Comprare un regalo per la ragazza',
                done: true,
            },
            
        ]

        }
    },
    methods: {
        
    },
    mounted() {
        console.log("VUE OK");
    }
}).mount('#app')