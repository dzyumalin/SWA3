<template>
    <div>
        <header class="header">
            <div class="header__right">
                <div class="header__logo">todo</div>
            </div>
            <div>
                Вы зашли в систему
                <div v-if="loggedIn">Да</div>
                <div v-else>Нет</div>
                <button class="button" @click="signOut">Sign out</button>
            </div>
        </header>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    name: "Header",
    mounted() {
        this.setupFirebase();
    },
    methods: {
    setupFirebase() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // Пользователь вошел в систему
                this.loggedIn = true;
            } else {
                // Пользователь не вошел в систему
                this.loggedIn = false;
            }
        });
    },
    signOut() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.replace({ name: "Login" });
            });
        }
    },
    data() {
        return {
            loggedIn: false
        };
    }
}
</script>

<style scoped lang="scss">
$medium-color: #BF8630;
$shadow: 5px 5px 15px rgba(#000, 0.3);

.header {
    padding: 20px 40px;
    background-color: $medium-color;
    box-shadow: $shadow;
    margin-bottom: 15px;
    &__right {
        display: flex;
        justify-content: end;
        align-items: center;
    }
    &__logo {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 28px;
    }
}

</style>