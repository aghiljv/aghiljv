import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c5d8c68 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0484b15a = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _64ae328a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3fad5f66 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _d3acf96e = () => interopDefault(import('../pages/temp.vue' /* webpackChunkName: "pages/temp" */))
const _e7d531a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6c5d8c68,
    name: "about"
  }, {
    path: "/blog",
    component: _0484b15a,
    name: "blog"
  }, {
    path: "/contact",
    component: _64ae328a,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _3fad5f66,
    name: "portfolio"
  }, {
    path: "/temp",
    component: _d3acf96e,
    name: "temp"
  }, {
    path: "/",
    component: _e7d531a6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
