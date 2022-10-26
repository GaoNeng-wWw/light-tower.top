<template>
    <d-aside class="content__menu">
        <div class="menu">
            <div class="menu__menu-wrapper">
                <ContentNavigation v-slot="{ navigation }">
                    <template v-for="item in navigation?.[0]?.children" :key="item._path">
                        <template v-if="!item?.children?.length">
                            <NuxtLink :to="item._path">
                                <div :class="{
                                    'menu__menu-wrapper__menu-item': true,
                                    'active': activePath === item._path
                                }">
                                    <div class="menu__menu-wrapper__menu-item__icon_prefix">
                                        <i class="icon-go-document"></i>
                                    </div>
                                    <span class="menu__menu-wrapper__menu-item__text">
                                        {{item.title}}
                                    </span>
                                </div>
                            </NuxtLink>
                        </template>
                        <template v-else>
                            <div class="menu__menu-wrapper__sub-menu">
                                <div class="menu__menu-wrapper__sub-menu__title">
                                    <div class="menu__menu-wrapper__sub-menu__title__icon">
                                        <i class="icon-folder"></i>
                                    </div>
                                    <span class="menu__menu-wrapper__sub-menu__title__text">
                                        {{item.title}}
                                    </span>
                                </div>
                                <div
                                    class="menu__menu-wrapper__sub-menu__menu-item-list"
                                    v-for="child in item?.children"
                                    :key="child._path"
                                >
                                    <NuxtLink :to="child._path" v-if="!child._draft">
                                        <div :class="{
                                            'menu__menu-wrapper__sub-menu__menu-item-list__menu-item': true,
                                            'active': activePath === child._path
                                        }">
                                            <div class="menu__menu-wrapper__sub-menu__menu-item-list__menu-item__icon_prefix">
                                                <i class="icon-go-document"></i>
                                            </div>
                                            <span class="menu__menu-wrapper__sub-menu__menu-item-list__menu-item__text">
                                                {{child.title}}
                                            </span>
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </template>
                    </template>
                </ContentNavigation>
            </div>
        </div>
    </d-aside>
</template>

<style lang="scss" scoped>
.menu{
    width: 100%;
    &__menu-wrapper{
        width: 100%;
        font-size: 14px;
        &__menu-item{
            display: flex;
            width: 100%;
            height: 40px;
            line-height: 40px;
            gap: 10px;
            background: white;
            padding: 0 12px;
        }
        &__sub-menu{
            &__title{
                display: flex;
                gap: 10px;
                height: 40px;
                line-height: 40px;
                background: white;
                padding: 0 12px;
            }
            &__menu-item-list{
                background: #f3f3f3;
                &__menu-item{
                    display: flex;
                    gap: 10px;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 24px;
                }
            }
        }
    }
}
.active{
    position:relative;
    background: #f2f5fc;
    span{
        color:black;
    }
}
.active::before{
    content: "";
    width: 3px;
    height: 100%;
    background: rgb(32, 114, 236);
    position: absolute;
    right: 0;
}
</style>

<script lang="ts" setup>
import {ref} from 'vue';
let routes = useRoute();
const router = useRouter();
const processPath = (path: string) => {
    if (/\/$/.test(routes.path)){
        return routes.path.slice(0,routes.path.length-1);
    }
    return routes.path
}
const activePath = ref(processPath(routes.path));
router.beforeEach((to) => {
    routes = to;
    activePath.value = processPath(to.path)
})
</script>