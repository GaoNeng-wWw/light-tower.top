<template>
    <d-col flex="auto" :xs="24" :sm="24" :md="0" class="top-nav">
        <nav>
            <ContentNavigation v-slot="{ navigation }">
            <d-collapse v-model="collapseValue">
                <d-collapse-item :title="currentTitle" :name="currentTitle ?? ''">
                    <div class="top-menu">
                            <template v-for="item in navigation?.[0].children">
                                <div
                                    class="top-menu__item__wrapper"
                                    v-if="!item?.children?.length && item.title !== currentTitle"
                                >
                                    <nuxt-link :to="item._path">
                                        <div class="top-menu__item__wrapper__content">
                                            {{item.title}}
                                        </div>
                                    </nuxt-link>
                                </div>
                                <template v-else-if="item?.children?.length">
                                    <d-collapse-item :title="item.title">
                                        <div class="top-menu__item__wrapper" v-for="child in item.children">
                                            <nuxt-link :to="child._path" v-if="child.title !== currentTitle">
                                                <div class="top-menu__item__wrapper__content">
                                                    {{child.title}}
                                                </div>
                                            </nuxt-link>
                                        </div>
                                    </d-collapse-item>
                                </template>
                            </template>
                        </div>
                    </d-collapse-item>
                </d-collapse>
            </ContentNavigation>
        </nav>
    </d-col>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const {page} = useContent();
const collapseValue = ref([]);
const currentTitle = ref(page.value?.title)
</script>

<style lang="scss" scoped>
.top-nav{
    position: sticky;
    top: 10px;
}
.top-menu{
    .top-menu__item__wrapper{
        .top-menu__item__wrapper__content{
            padding: .7em .25em;
        }
    }
}
</style>