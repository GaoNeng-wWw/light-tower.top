import { useEventHub } from "~~/hooks/useEventHub"

const hub = useEventHub();
export default defineNuxtRouteMiddleware((to) => {
    hub.emit('menu::update', to.path);
})