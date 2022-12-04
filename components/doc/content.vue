<template>
    <d-row type="flex" class="docs-devui-row" :gutter="30">
        <d-col flex="200px" :xs="0" :sm="0" :md="1" class="side">
            <Side></Side>
        </d-col>
        <d-col flex="0 1 auto">
            <d-content class="content__doc">
                <nav-menu></nav-menu>
                <div class="content__doc__docs-wrapper">
                    <ContentDoc />
                </div>
                <h2>本文贡献者</h2>
                <ul>
                    <li v-for="author in authors">
                        <a :href="'mailto:' + author.email">{{ author.name }}</a>
                    </li>
                </ul>
            </d-content>
        </d-col>
        <d-col flex="1 0 200px" :xs="0" :sm="0" :md="1" class="toc">
            <d-tree :data="treeData" @node-click="nodeClick"></d-tree>
        </d-col>
    </d-row>
</template>

<script lang="ts" setup>
import Side from './side.vue';
import NavMenu from './navMenu.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { ITreeNode } from 'vue-devui/types/tree';
interface Toc {
    title: string;
    searchDepth: number;
    depth: number;
    links: {
        id: string;
        depth: string;
        text: string;
        children?: Toc['links']
    }[]
}
const router = useRouter();
const { page, toc } = useContent();
const rawAuthors: Ref<string[]> = ref(page.value?.author);
const authors = computed(() => {
    return rawAuthors.value?.map((author) => {
        const splitArray = author.trim().split(' ');
        const authorName = splitArray[0].trim();
        const authorEmail = splitArray[1].slice(1, -1);
        return {
            name: authorName,
            email: authorEmail
        }
    })
})
const normalize = (items?: Toc['links'][0]['children']) => {
    if (items?.length) {
        return items.map((item) => {
            return {
                id: item.id,
                label: item.text
            }
        });
    }
}

const treeData = computed(() => {
    return (toc as Ref<Toc>).value.links.map((link) => {
        return {
            id: link.id,
            label: link.text,
            children: normalize(link.children)
        }
    }) as ITreeNode[];
})

const nodeClick = (node: ITreeNode) => {
    const { id } = node;
    router.push(`#${id}`);
}
</script>