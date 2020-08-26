import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a5ae422 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _06f904d2 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _fa38bafc = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _694b2c18 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _ab95f92c = () => interopDefault(import('..\\pages\\blog\\_name.vue' /* webpackChunkName: "pages/blog/_name" */))
const _0c872ab0 = () => interopDefault(import('..\\pages\\portfolio\\_name.vue' /* webpackChunkName: "pages/portfolio/_name" */))
const _0a8a68b4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2a5ae422,
    name: "about"
  }, {
    path: "/blog",
    component: _06f904d2,
    name: "blog"
  }, {
    path: "/contact",
    component: _fa38bafc,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _694b2c18,
    name: "portfolio"
  }, {
    path: "/blog/:name",
    component: _ab95f92c,
    name: "blog-name"
  }, {
    path: "/portfolio/:name",
    component: _0c872ab0,
    name: "portfolio-name"
  }, {
    path: "/",
    component: _0a8a68b4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
