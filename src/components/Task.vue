<template>
    <div class="task">
        <div class="container">
            <h1>List</h1>
        <input type="text" class="task-input" placeholder="Что нужно сделать" v-model="newTodo" @keyup.enter="addTodo">
        <div v-for="todo in todos" :key="todo.id" class="task-item">
            <div>
            {{ todo.title }}
            </div>
            <div class="remove-item">
                &times;
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodo: '',
            idForTodo: 3,
            todos: [
                {
                    'id': 1,
                    'title': 'Finish Vue Screencast',
                    'completed': false,
                },
                {
                    'id': 2,
                    'title': 'Take over world',
                    'completed': false,
                },
            ]
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length == 0) { // Если нет пробельных символов в конце, то возращаем результат
                return;
            }
            this.todos.push({
                id: this.idForTodo,
                title: this.newTodo,
                completed: false,
            })

            this.newTodo = ''
            this.idForTodo++
        }
    }
}
</script>

<style scoped lang="scss">
$medium-color: #BF8630;
$shadow: 5px 5px 15px rgba(#000, 0.3);

.task {
    border-radius: 10px;
    margin: 0 15px 0 15px;
    width: 100%;
    height: 90vh;
    background-color: $medium-color;
    box-shadow: $shadow;
    &-input {
        width: 100%;
        padding: 10px 20px;
        box-shadow: $shadow;
        border: none;
        font-size: 16px;
        margin-bottom: 10px;
    }
    &-item {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.remove-item {
    cursor: pointer;
    &:hover {
        color: black;
    }
}

.container {
    width: 50%;
    display: block;
    margin: 0 auto;
}

h1 {
    text-align: center;
}

</style>