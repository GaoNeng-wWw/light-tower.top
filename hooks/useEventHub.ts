import hub from '@/util/hub';
let instance:hub | null = null;
export function useEventHub(){
    if (!instance){instance = new hub()}
    return instance;
}