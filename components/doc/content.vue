<template>
    <d-row type="flex" class="docs-devui-row" :gutter="24">
        <d-col flex="220px" :xs="0" :sm="0" :md="1" class="side">
            <Side></Side>
        </d-col>
        <d-col flex="auto">
            <d-content class="content__doc">
                <nav-menu></nav-menu>
                <div class="content__doc__docs-wrapper">
                    <ContentDoc />
                </div>
                <h2>本文贡献者</h2>
                <ul>
                    <li v-for="author in authors">
                        <a :href="author.email">{{author.name}}</a>
                    </li>
                </ul>
            </d-content>
        </d-col>
    </d-row>
</template>

<script lang="ts" setup>
import Side from './side.vue';
import NavMenu from './navMenu.vue';
import {ref} from 'vue';
import type {Ref} from 'vue';
const {page} = useContent();
const rawAuthors:Ref<string[]> = ref(page.value?.author);
const authors = computed(()=>{
    return rawAuthors.value?.map((author) => {
        const splitArray = author.trim().split(' ');
        const authorName = splitArray[0].trim();
        const authorEmail = splitArray[0].slice(1,-1);
        return {
            name: authorName,
            email: authorEmail
        }
    })
})
</script>