// guide https://nuxt.com/docs/guide/directory-structure/middleware

export default defineNuxtRouteMiddleware((to, from) => {
  // global middleware pra checar altenticação
  // if (!to.path.includes('/login')) {
  //   return navigateTo('/login')
  // }
})
