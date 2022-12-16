import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/filipeborges/Desktop/myFolder/Boris/qrcode/menuApp/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}