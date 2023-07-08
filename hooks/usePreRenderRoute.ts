import {globSync} from 'glob';
function isIndex(path: string){
    return /index/.test(path);
}
function normalizationData(paths: string[]){
    return paths.map((path) => {
        const rawPath = path.replace(/content/gim, '').replace('.md', '');
        if (isIndex(rawPath)){
            return rawPath.replace('/index','');
        }
        return rawPath;
    })
}
export default function usePreRenderRoute(){
    const res = globSync('content/doc/**/*.md')
    return normalizationData(res)
}
