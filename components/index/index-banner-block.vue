<template>
    <h3 class="text-5xl text-center mb-2 sm:text-left">灯塔</h3>
    <p class="text-3xl text-center sm:text-left">公益的反霸凌团体</p>
    <div class="flex my-4 gap-4 text-center">
        <nuxt-link to="/doc/about">
            <d-button class="btn" variant="solid" shape="round">加入我们</d-button>
        </nuxt-link>
        <nuxt-link to="/doc">
            <d-button class="btn" color="secondary" shape="round">学习</d-button>
        </nuxt-link>
    </div>
</template>

<style scoped lang="scss">
.btn {
    height: 32px;
}
h3{
    font-size: 38px;
    background-image: linear-gradient(325deg, #f53b2d, #f87027, #f9991c, #f7be00);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.actions{
    margin: 1em 0;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
}

</style>

<script lang="ts" setup>

</script>