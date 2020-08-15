<template>
    <div class="container">
        <div class="left">
            <div class="left-strain">
                <select name="strain" id="strain" class="left-strain__select" v-model="status">
                    <option value="process" selected>Неисполненные</option>
                    <option value="done">Исполненные</option>
                    <option value="all">Все</option>
                </select>
            </div>
        </div>
        <Task></Task>
    </div>
</template>

<script>
import Task from "./Task"
export default {
    data() {
        return {
            status: 'process'
        }
    },
    components: {
        Task
    }
}
</script>

<style scoped lang="scss">
$medium-color: #BF8630;
$shadow: 5px 5px 15px rgba(#000, 0.3);

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
}

</style>