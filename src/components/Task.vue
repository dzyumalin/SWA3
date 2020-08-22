<template>
    <div class="task">
        <div class="container">
            <h1>List</h1>
            <ul v-for="todo in todos" :key="todo.key">
                <li v-on:click="selectList(todo)">{{ todo.item.text }}</li>
                <div class="remove-item">×</div>
            </ul>
            <form v-show="key" v-on:sumbit.prevent="onUpdate" class="line-container">
                <input type="text" class="task-input" placeholder="Что нужно сделать" v-model="text"> <!-- Добавить задачу -->
                <label for="task-input">Срочное<input name="task-input" type="checkbox"></label>
                <button class="button button_task" type="submit" @click="onSubmit">Добавить дело</button>
            </form>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
export default {
    name: 'task-list',
    data() {
        return {
            todos: [],
            text: "",
            key: null
        }
    },
    mounted() {
        let db = firebase.database();
        let me = this;

            db.ref('/todos').on('value', (snap) => {
            let result = []
            let data = snap.val();
            for(let key in data){
                result.push({ key: key, item: data[key] });
            }
            me.$set(me, 'todos', result);
        });
    },
    methods: {
        selectList(todo){
            this.key = todo.key;
            this.text = todo.item.text;
        },
        onSubmit() {
            let db = firebase.database();
            db.ref("/todos/" + Date.now()).set({
                text: this.text    
            }, (er) => {
                if(er) {
                    console.log(er.message);
                } else {
                    console.log('created');
                }
            });
        },
        onUpdate() {
            let db = firebase.database();
            db.ref("/todos/" + this.key).set({
                text: this.text
            }, (er) => {
                console.log(er ? er.message : "updated");
            })
            this.key = null;
            this.text = "";
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