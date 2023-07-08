<template>
    <div class="flex w-full">
        <div class="basis-[200px] flex-shrink-0 hidden md:block px-[15px]">
            <Side></Side>
        </div>
        <div class="flex-auto px-[15px]">
            <NavMenu></NavMenu>
            <div class="
            prose prose-gray prose-li:list-outside prose-li:list-disc prose-li:marker:hidden
            prose-img:w-1/2 prose-li:break-all min-w-full
            prose-h1:mt-4 prose-headings:no-underlinep prose-headings:no-underline
            prose-a:no-underline prose-ul:pl-8
            marker:text-gray-800
            ">
            <!-- <div class="content__doc__docs-wrapper"> -->
                <ContentDoc></ContentDoc>
            </div>
            <h2>本文贡献者</h2>
            <ul>
                <li v-for="author in authors">
                    <a :href="'mailto:' + author.email">{{ author.name }}</a>
                </li>
            </ul>
        </div>
        <div class="flex-grow-0 flex-shrink-0 basis-[200px] hidden md:block">
            <d-tree :data="treeData" @node-click="nodeClick"></d-tree>
        </div>
    </div>
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