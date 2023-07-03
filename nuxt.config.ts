// import { defineNuxtConfig } from 'nuxt';
import usePreRenderRoute from './hooks/usePreRenderRoute';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content','~/modules/sitemap', '@nuxtjs/tailwindcss'],
  // @ts-ignore
  sitemap:{
    hostname: 'https://www.light-tower.top',
  },
  app:{
    head:{
      title: '灯塔 - 公益性质的反霸凌团体',
      meta:[{
        name: 'keywords',
        content: '灯塔, 公益, 反霸凌, 反欺凌, 公益团队',
      },{
        name: 'description',
        content: '灯塔是一个公益性质的反霸凌团体，包括但不仅限于校园霸凌'
      },{
        name: 'baidu-site-verification',
        content: 'code-RrPsrz5pN1'
      }],
      htmlAttrs:{
        lang: 'zh-cn'
      },
      script:[{
        defer: true,
        children: `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?76fd5e9d59f8c3f837eb1b89d08cb198";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      }]
    },
  },
  nitro:{
    prerender:{
      routes: [...usePreRenderRoute()]
    },
    preset: 'vercel'
  },
  plugins: [
    {
      src: '~/plugins/vue-devui'
    },
  ],
  content: {
    documentDriven:true,
    watch: {
        ws: {
            hostname: 'localhost'
        }
    },
    base: 'content',
  },
  css: ['vue-devui/style.css', '@devui-design/icons/icomoon/devui-icon.css', '~/assets/styles/common.scss'],
  postcss: {
    config: true,
    plugins:{
      'cssnano': true
    }
  },
  vite:{
    logLevel: 'silent',
    plugins: [viteCompression(), viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 7
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 8,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
    })],
    build:{
      cssCodeSplit: true,
      terserOptions:{
        compress:{
          drop_console: true,
          drop_debugger: true,
        }
      },
      rollupOptions:{
        output:{
          chunkFileNames: 'nuxt/chunk/chunk-[hash].js',
          assetFileNames: 'nuxt/assets/assert-[hash][extname]'
        }
      }
    },
  },
  ssr: true,
})
