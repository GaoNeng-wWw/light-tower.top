<template>
    <div>
        <index-banner></index-banner>
        <div class="w-full flex">
            <div class="max-w-5xl mx-auto">
                <bullying-information></bullying-information>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BullyingInformation from '~/components/index/index-bullying-information.vue';
import IndexBanner from '~/components/index/index-banner.vue';
useHead({
    title: '灯塔 - 公益性质的反霸凌团体'
});
definePageMeta({
    documentDriven: false
})
</script>
