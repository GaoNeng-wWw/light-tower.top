<template>
    <div class="flex">
        <div class="max-w-5xl mx-auto flex justify-center items-center flex-col-reverse text-center sm:flex-row px-8">
            <div class="flex-grow-0 flex-shrink-1 basis-auto sm:w-full sm:basis-auto">
                <banner-block></banner-block>
            </div>
            <div class="flex-grow-0 flex-shrink-1">
                <img class="min-w-0 max-h-[320px] sm:min-w-[320px]" src="~/assets/images/Lighthouse-pana.png"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import bannerBlock from './index-banner-block.vue';
</script>