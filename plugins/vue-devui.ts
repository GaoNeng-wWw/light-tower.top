import Devui from 'vue-devui';

export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Devui);
})