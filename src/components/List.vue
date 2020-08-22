<template>
    <div class="container">
        <div class="left">
            <div class="left-strain">
                <select name="strain" id="strain" class="left-strain__select">
                    <option value="process" selected>Неисполненные</option>
                    <option value="done">Исполненные</option>
                    <option value="all">Все</option>
                </select>
            </div>
            <ul v-for="list in lists" :key="list.key">
                <li v-on:click="selectList(list)">{{ list.item.text }}</li>
            </ul>
            <form v-show="key" v-on:submit.prevent="onUpdate">
                <input type="text" class="left-input" placeholder="Введите название списка" v-model="text"> <!-- Поле списка -->
                <button class="button button_list" type="submit" @click="onSubmit">Добавить список</button>
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
            lists: [],
            text: "",
            key: null
        }
    },
    mounted() {
        let db = firebase.database();
        let me = this;

            db.ref('/lists').on('value', (snap) => {
            let result = []
            let data = snap.val();
            for(let key in data){
                result.push({ key: key, item: data[key] });
            }
            me.$set(me, 'lists', result);
        });
    },
    components: {
        Task
    },
    methods: {
        selectList(list){
            this.key = list.key;
            this.text = list.item.text;
        },
        onSubmit() {
            let db = firebase.database();
            db.ref("/lists/" + Date.now()).set({
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
            db.ref("/lists/" + this.key).set({
                text: this.text
            }, (er) => {
                console.log(er ? er.message : "updated");
            })
            this.key = null;
            this.text = "";
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