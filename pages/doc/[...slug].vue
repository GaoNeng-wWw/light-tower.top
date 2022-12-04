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
import { ref, Ref } from 'vue';
const { page, toc } = useContent();
const currentTitle = ref(page.value?.title ?? '');
const bannerImage = ref(useImage((page.value?.bg as string) ?? ''));
// let obj = { "title": "", "searchDepth": 2, "depth": 2, "links": [{ "id": "家庭暴力的构成", "depth": 2, "text": "家庭暴力的构成", "children": [{ "id": "施暴方", "depth": 3, "text": "施暴方" }, { "id": "受害方", "depth": 3, "text": "受害方" }] }, { "id": "辨别", "depth": 2, "text": "辨别", "children": [{ "id": "身体上", "depth": 3, "text": "身体上" }, { "id": "精神上", "depth": 3, "text": "精神上" }, { "id": "经济上", "depth": 3, "text": "经济上" }] }, { "id": "危害", "depth": 2, "text": "危害" }, { "id": "解决", "depth": 2, "text": "解决" }, { "id": "数字安全", "depth": 2, "text": "数字安全" }, { "id": "图片来源声明", "depth": 2, "text": "图片来源声明" }, { "id": "footnote-label", "depth": 2, "text": "Footnotes" }] }
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

.side,
.toc {
    position: sticky;
    top: 10px;
}

.content {
    padding: 1em 0;
    box-sizing: border-box;
}

.content__doc {
    // padding: 0 1.5em;
    box-sizing: border-box;
}
</style>