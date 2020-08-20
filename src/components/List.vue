<template>
    <div class="container">
        <div class="left">
            <div class="left-strain">
                <select name="strain" id="strain" class="left-strain__select" v-model="status">
                    <option value="process" selected>Неисполненные</option>
                    <option value="done">Исполненные</option>
                    <option value="all">Все</option>
                </select>
                <div v-for="(list, index) in lists" :key="list.id" class="list-item">
                    <div :class="{ completed : list.completed }">
                    {{ list.title }}
                    </div>
                    <div class="remove-item" @click="removeTodo(index)"> <!-- Удалить задачу -->
                        &times;
                    </div>
                </div>
            </div>
            <form v-on:submit.prevent="onSubmit">
                <input type="text" class="left-input" placeholder="Введите название списка" v-model="text"> <!-- Поле списка -->
                <button>Добавить список</button>
            </form>
        </div>
        <Task></Task>
    </div>
</template>

<script>
import Task from "./Task";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
export default {
    name: 'list',
    data() {
        return {
            text: '',
            status: 'process',
            lists: [
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
    components: {
        Task
    },
    methods: {
        onSubmit() {
            let db = firebase.database();
            db.ref("/posts/" + Date.now()).set({
                text: this.text    
            }, (er) => {
                if(er) {
                    console.log(er.message);
                } else {
                    console.log('created');
                }
            });
        },
        addList() {
            if (this.newList.trim().length == 0) { // Если нет пробельных символов в конце, то возращаем результат
                return;
            }
            this.lists.push({
                id: this.idForList,
                title: this.newList,
                completed: false,
            })

            this.newList = ''
            this.idForList++
        },
        removeTodo(index) { // Удаляем элемент из массива с помощью splice
            this.lists.splice(index, 1)
        },
        
    }
}
</script>

<style scoped lang="scss">
$medium-color: #BF8630;
$shadow: 5px 5px 15px rgba(#000, 0.3);
$easy-color: #FFC373;

.container {
  align-items: stretch;
  justify-content: flex-start;
}

.left {
    border-radius: 10px;
    margin-left: 15px;
    width: 400px;
    height: 90vh;
    background-color: $medium-color;
    box-shadow: $shadow;
    position: relative;
    &-strain {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 98%;
        margin-left: 4px;
    }
    &-input {
        position: absolute;
        bottom: 50px;
        width: 315px;
        margin-left: 4px;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        box-shadow: $shadow;
    }
}

.list-item {
    font-size: 18px;
    border: 1px solid $easy-color;
    padding: 10px 20px;
    margin-bottom: 12px;
    margin-left: 4px;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 315px;
}

.remove-item {
    position: absolute;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
}

</style>