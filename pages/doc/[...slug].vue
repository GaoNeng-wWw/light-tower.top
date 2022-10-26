<template>
    <div>
        <div class="banner">
            <Banner :bg="bannerImage" :size="'cover'" use-mask>
                <h1>{{ currentTitle }}</h1>
            </Banner>
        </div>
        <div class="content">
            <d-row justify="center">
                <d-col :md="22" :lg="18">
                    <Content></Content>
                </d-col>
            </d-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Banner from '~/components/common/banner/index.vue'
import Content from '~/components/doc/content.vue';
import { useImage } from '@/hooks/useImage';
import { ref } from 'vue';
const {page} = useContent();
const currentTitle = ref(page.value?.title ?? '');
const bannerImage = ref(useImage((page.value?.bg as string) ?? ''));
</script>
<style lang="scss">
@import "~/assets/styles/doc.scss";

.banner {
    height: 350px;

    .banner__wrapper {
        height: 100%;

        h1 {
            color: white;
            margin: auto !important;
        }
    }
}

.side {
    position: sticky;
    top: 10px;
}

.content {
    padding: 1em 0;
    box-sizing: border-box;
}

.content__doc {
    padding: 0 1.5em;
    box-sizing: border-box;
}
</style>