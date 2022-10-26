<template>
    <div>
        <index-banner></index-banner>
        <d-row :justify="'center'" >
            <d-col :md="18" :lg="18">
                <bullying-information></bullying-information>
            </d-col>
        </d-row>
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
