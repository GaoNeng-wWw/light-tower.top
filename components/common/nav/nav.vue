<template>
    <d-row :justify="'center'">
        <d-col :md="22" :lg="18">
            <div class="nav">
                <ul ref="nav">
                    <nuxt-link to="/">
                        <li :class="{'active': activeNumber === 0}">
                            首页
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/doc">
                        <li :class="{'active': activeNumber === 1}">
                            了解霸凌
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/doc/about">
                        <li :class="{'active': activeNumber === 2}">
                            关于网站
                        </li>
                    </nuxt-link>
                </ul>
            </div>
        </d-col>
    </d-row>
</template>

<style lang="scss" scoped>
div{
    background: #fff;
    position: sticky;
    width: 100%;
    height: 72px;
    z-index: 1;
    div.nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        ul{
            li{
                float: left;
                margin-left: 1em;
                font-size: 12pt;
                position: relative;
                transition: all 300ms ease-in-out;
            }
            li::before{
                content: "";
                background: hsl(224deg, 52%, 54%);
                position: absolute;
                width: 100%;
                height: 3px;
                bottom: 0px;
                transform: scaleX(0);
            }
            li.active::before{
                transform: scaleX(1);
            }
            li:hover::before{
                transform: scaleX(1);
            }
        }
    }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
const routeReg = ['doc', 'about'];
const routes = useRoute();
const router = useRouter();
const path = ref(routes.path);
const activeNumber = computed(()=>{
    const splitArray = path.value.split('/').filter((path) => path.length > 0);
    if (!splitArray.length){
        return 0;
    } else {
        for (let i=splitArray.length-1;i>=0;i--){
            const item = splitArray[i];
            if (routeReg.includes(item)){
                return routeReg.indexOf(item)+1;
            }
        }
    }
});
onMounted(()=>{
    path.value = routes.path;
})
router.beforeEach((to) => {
    path.value = to.path;
})
</script>