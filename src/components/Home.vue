<template>
    <div>
        <Header/>
        <List/>
    </div>
</template>

<script>
import Header from './Header'
import List from './List'

export default {
    name: 'Home',
    components: {
        Header, List
    }
}
</script>

<style lang="scss">
$easy-color: #FFC373;
$medium-color: #BF8630;
body {
  margin: 0;
  background-color: $easy-color;
  font-family: "Roboto", sans-serif;
}
* {
  box-sizing: border-box;
}
h1, h2, h3 {
  margin: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &_list {
    position: absolute;
    bottom: 10px;
    left: 10px;
    margin-left: 80px;
  }
  &_task {
    margin-left: 200px;
  }
}
</style>
