export function useImage(name?: string){
    return new URL(`../assets/images/${name || 'bullying-1.jpg'}`,import.meta.url).href;
}