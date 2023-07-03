<template>
    <d-row justify="center">
        <d-col :xxl="18" :xl="18" :lg="18" :md="18" :sm="18" :xs="24">
            <d-row justify="around" align="middle" class="wrap-reverse" type="flex">
                <d-col flex="0 0 320px">
                    <banner-block></banner-block>
                </d-col>
                <d-col flex="0 0 320px">
                    <img class="logo" src="~/assets/images/Lighthouse-pana.png"/>
                </d-col>
            </d-row>
        </d-col>
    </d-row>
</template>
<style lang="scss">
.logo{
    width: 320px;
    height: 320px;
    display: block;
    margin: auto;
}
.wrap-reverse{
    flex-wrap: wrap-reverse !important;
}
</style>
<script lang="ts" setup>
import bannerBlock from './index-banner-block.vue';
</script>