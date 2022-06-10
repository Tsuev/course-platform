<template>
    <section class="flex flex-col justify-center items-center py-52">
        <svg width="362" height="481">
            <use x="-75" y="-15" href="@/assets/img/logo.svg#logo" />
        </svg>
        <div class="text-block mt-14">
            Обучайся. Совершенствуйся. Практикуй.
        </div>
    </section>
</template>

<script setup>
</script>

<style lang='scss' scoped>
.text-block {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(90deg, #000, #fff, #000);
    letter-spacing: 5px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;
    background-size: 80%;
    animation: shine 15s linear infinite;
    position: relative;
}

@keyframes shine {
    0% {
        background-position-x: -500%;
    }

    100% {
        background-position-x: 500%;
    }
}
</style>