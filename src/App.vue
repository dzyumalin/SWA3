<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>

<style lang="scss" scoped>
$easy-color: #FFC373;
$dark-color: #BF8930;
$shadow: 5px 5px 15px rgba(#000, 0.3);

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

.login {
    width: 500px;
    padding: 100px 50px;
    background-color: $easy-color;
    box-shadow: $shadow;
    &__title {
        text-align: center;
        font-weight: 300;
        margin-bottom: 40px;
    }
    &-block {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
}

.button {
    &_login {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
}

.error {
  color: red;
}

</style>

