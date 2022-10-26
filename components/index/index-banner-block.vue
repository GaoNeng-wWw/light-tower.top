<template>
    <h3>灯塔</h3>
    <p class="description">公益的反霸凌团体</p>
    <div class="actions">
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
.description{
    font-size: 40px;
    text-align: left;
    font-weight: bold;
    color: #213547;
}
h3{
    font-size: 38px;
    text-align: left;
    background-image: linear-gradient(325deg, #f53b2d, #f87027, #f9991c, #f7be00);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.actions{
    margin: 1em 0;
    display: flex;
    justify-content: center;
    gap: 16px;
}
h3,.description{
    text-align: center;
}
@media screen and (min-width:871px){
    h3,.description{
        text-align: left;
    }
    .actions{
        justify-content: flex-start;
    }
}

</style>

<script lang="ts" setup>

</script>