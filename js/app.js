const { createApp } = Vue;

createApp({
    data() {
      return {
        nexTaskText: '',
        headerTitle: 'Vue To Do List',
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
            
            
        ],

        }
    },
    methods: {
        removeTask(i) {
            this.todos.splice(i,1);
        },
        addTask() {

            const text = this.nexTaskText.trim();

            if (text !== '') {
                const newTask = {
                    text: text,
                    done: false,
                }
    
                this.todos.push(newTask);
            } 

            this.nexTaskText = ''
            
        },
        toogleTask(task) {
            
            if (task.done === true) {
                task.done = false
            } else {
                task.done = true
            }

            // Stessa cosa si potrebbe fare con una sola operazione:
            // task.done = !task.done
        }
    },
    mounted() {
        console.log("VUE OK");
    }
}).mount('#app')