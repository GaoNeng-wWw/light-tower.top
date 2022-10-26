import type { RouterConfig } from '@nuxt/schema'
import { useEventHub } from '~~/hooks/useEventHub'
// Only process scroll behavior
const hub = useEventHub();
export default <RouterConfig> {
    scrollBehavior(to, from, savePosition){
        if (to.hash){
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        if (savePosition){
            return savePosition
        }
        return {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    }
}