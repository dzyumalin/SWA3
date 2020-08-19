<template>
    <div class="task">
        <div class="container">
            <h1>List</h1>
        <div v-for="(todo, index) in todos" :key="todo.id" class="task-item">
            <input type="checkbox" v-model="todo.completed"> 
            <div :class="{ completed : todo.completed }">
            {{ todo.title }}
            </div>
            <div class="remove-item" @click="removeTodo(index)"> <!-- Удалить задачу -->
                &times;
            </div>
        </div>
        <div class="line-container">
            <input type="text" class="task-input" placeholder="Что нужно сделать" v-model="newTodo" @keyup.enter="addTodo"> <!-- Добавить задачу -->
            <label for="task-input">Срочное<input name="task-input" type="checkbox"></label>
            <button class="button button_task" type="submit" @click="addTodo">Добавить дело</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task-list',
    data() {
        return {
            newTodo: '',
            idForTodo: 3,
            todos: [
                {
                    'id': 1,
                    'title': 'Что-то важное',
                    'completed': false,
                },
                {
                    'id': 2,
                    'title': 'Что-то определенно важное',
                    'completed': false,
                },
            ]
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length == 0) { 
                return;
            }
            this.todos.push({
                id: this.idForTodo,
                title: this.newTodo,
                completed: false,
            })

            this.newTodo = ''
            this.idForTodo++
        },
        removeTodo(index) { 
            this.todos.splice(index, 1)
        }
    }
}
</script>

<style scoped lang="scss">
$easy-color: #FFC373;
$medium-color: #BF8630;
$shadow: 5px 5px 15px rgba(#000, 0.3);

.task {
    border-radius: 10px;
    margin: 0 15px 0 15px;
    width: 100%;
    height: 90vh;
    background-color: $medium-color;
    box-shadow: $shadow;
    position: relative;
    &-input {
        width: 40%;
        padding: 10px 20px;
        box-shadow: $shadow;
        border: none;
        font-size: 16px;
        margin-right: 30px;
    }
    &-item {
        border: 1px solid $easy-color;
        padding: 10px 20px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
    }
}

.completed {
    text-decoration: line-through;
    color: grey;
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

.line-container {
    padding: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-top: 1px solid black;
    position: relative;
    top: 100px;
}

.button {
    margin-left: 10px;
}

h1 {
    text-align: center;
}

</style>