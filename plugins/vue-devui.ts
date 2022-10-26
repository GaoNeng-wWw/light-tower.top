import Devui from 'vue-devui';
import 'vue-devui/style.css'
import '@devui-design/icons/icomoon/devui-icon.css';

export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Devui);
})