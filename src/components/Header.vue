<template>
    <div>
        <header class="header">
            <div class="header__right">
                <div class="header__logo">todo</div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    
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