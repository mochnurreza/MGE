import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from "@/layouts/Auth.vue";
import Dashboard from "@/layouts/Dashboard.vue"


const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition){
    return savedPosition || { top: 0 }
  },
  routes: [
     {
      path: "/",
      redirect: "/auth/login",
    },
    {
      path: "/auth",
      redirect: "/auth/login",
      component: Auth,
      children: [
        {
          meta: {
            title: "Login"
          },
          path: "/auth/login",
          name: 'login',
          component: () => import("@/views/auth/Login.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      redirect: "/dashboard/products",
      name: 'Dashboard',
      meta: {
        requiresAuth: true
      },
      component: Dashboard,
      children: [
        {
          meta: {
            title: "Products"
          },
          name: "Products",
          path: "/dashboard/products",
          component: () => import('@/views/Products.vue')
        },
        {
          meta: {
            title: "Add Product"
          },
          name: "Add Products",
          path: "/dashboard/product",
          component: () => import('@/views/FormProduct.vue')
        },
        {
          meta: {
            title: "Categories"
          },
          name: "Categories",
          path: "/dashboard/categories",
          component: () => import('@/views/Kategori.vue')
        },
        {
          meta: {
            title: "Categories"
          },
          name: "Add Categories",
          path: '/dashboard/category',
          component: () => import('@/views/FormKategori.vue')
        },
        {
          meta: {
            title: "Categories"
          },
          name: "Update Categories",
          path: '/dashboard/category/:slug',
          component: () => import('@/views/FormKategori.vue')
        },
        {
          meta: {
            title: "Update product"
          },
          name: "Update product",
          path: '/dashboard/product/:slug',
          component: () => import('@/views/FormProduct.vue')
        },
      ]
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  if(to.meta.requiresAuth && !token){
    next('/auth/login')
  } else {
    next()
  }
})

export default router

