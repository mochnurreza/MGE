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
        // {
        //   meta: {
        //     title: "Family"
        //   },
        //   name: "Family",
        //   path: '/admin/Famili',
        //   component: () => import('@/views/Admin/Famili.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Family"
        //   },
        //   name: "Add Family",
        //   path: '/admin/add-data-famili',
        //   component: () => import('@/views/Admin/AddDataFamili.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Family"
        //   },
        //   name: "Update Family",
        //   path: '/admin/update-famili/:id',
        //   component: () => import('@/views/Admin/EditFamili.vue')
        // },
        // {
        //   meta: {
        //     title: "AdminGroup"
        //   },
        //   name: "Admin Group",
        //   path: '/admin/group',
        //   component: () => import('@/views/Admin/Group.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Group"
        //   },
        //   name: "Update Group",
        //   path: '/admin/update-group/:id',
        //   component: () => import('@/views/Admin/EditGroup.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Group"
        //   },
        //   name: "Add Group",
        //   path: '/admin/add-group',
        //   component: () => import('@/views/Admin/AddGroup.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Gallery"
        //   },
        //   name: "Add Gallery",
        //   path: '/admin/add-gallery',
        //   component: () => import('@/views/Admin/AddGallery.vue')
        // },
        // {
        //   meta: {
        //     title: "Admin Gallery"
        //   },
        //   name: "Admin Gallery",
        //   path: '/admin/Gallery',
        //   component: () => import('@/views/Admin/Gallery.vue')
        // },
        // {
        //   meta: {
        //     title: "Admin User"
        //   },
        //   name: "Admin User",
        //   path: '/admin/users',
        //   component: () => import('@/views/Admin/Users.vue')
        // },
        // {
        //   meta: {
        //     title: "Add User"
        //   },
        //   name: "Add User",
        //   path: '/admin/add-user',
        //   component: () => import('@/views/Admin/AddUser.vue')
        // },
        // {
        //   meta: {
        //     title: "Update User"
        //   },
        //   name: "Update User",
        //   path: '/admin/update-user/:id',
        //   component: () => import('@/views/Admin/EditUser.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Fauna"
        //   },
        //   name: "Add Fauna",
        //   path: '/admin/add-fauna',
        //   component: () => import('@/views/Admin/AddFauna.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Fauna"
        //   },
        //   name: "Update Fauna",
        //   path: '/admin/update-fauna/:id',
        //   component: () => import('@/views/Admin/EditFauna.vue')
        // },
        // {
        //   meta: {
        //     title: "Status P106"
        //   },
        //   name: "Status P106",
        //   path: '/admin/P106',
        //   component: () => import('@/views/Admin/P106.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Status P106"
        //   },
        //   name: "Add Status P106",
        //   path: '/admin/add-P106',
        //   component: () => import('@/views/Admin/AddP106.vue')
        // },
        // {
        //   meta: {
        //     title: "Status IUCN"
        //   },
        //   name: "Status IUCN",
        //   path: '/admin/IUCN',
        //   component: () => import('@/views/Admin/IUCN.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Status IUCN"
        //   },
        //   name: "Add Status IUCN",
        //   path: '/admin/add-IUCN',
        //   component: () => import('@/views/Admin/AddIUCN.vue')
        // },
        // {
        //   meta: {
        //     title: "Status Cites"
        //   },
        //   name: "Status Cites",
        //   path: '/admin/cites',
        //   component: () => import('@/views/Admin/Cites.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Status Cites"
        //   },
        //   name: "Add Status Cites",
        //   path: '/admin/add-Cites',
        //   component: () => import('@/views/Admin/AddCites.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Flora"
        //   },
        //   name: "Add Flora",
        //   path: '/admin/add-flora',
        //   component: () => import('@/views/Admin/AddFlora.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Flora"
        //   },
        //   name: "Update Flora",
        //   path: '/admin/update-flora/:id',
        //   component: () => import('@/views/Admin/EditFlora.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Gallery"
        //   },
        //   name: "Update Gallery",
        //   path: '/admin/update-gallery/:id',
        //   component: () => import('@/views/Admin/EditGallery.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Status P106"
        //   },
        //   name: "Update Status P106",
        //   path: '/admin/update-p106/:id',
        //   component: () => import('@/views/Admin/EditP106.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Status IUCN"
        //   },
        //   name: "Update Status IUCN",
        //   path: '/admin/update-IUCN/:id',
        //   component: () => import('@/views/Admin/EditIUCN.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Status Cites"
        //   },
        //   name: "Update Status Cites",
        //   path: '/admin/update-cites/:id',
        //   component: () => import('@/views/Admin/EditCites.vue')
        // },
        // {
        //   meta: {
        //     title: "Admin Profile"
        //   },
        //   name: "Admin Profile",
        //   path: '/admin/content/:header',
        //   component: () => import('@/views/Admin/LatarBelakang.vue'),
        //   props: true
        // },
        // {
        //   meta: {
        //     title: "Admin Trend Data"
        //   },
        //   name: "Admin Trend Data",
        //   path: '/admin/TrendData/:id',
        //   component: () => import('@/views/Admin/TrendData.vue'),
        //   props: true
        // },
        // {
        //   meta: {
        //     title: "Add Trend Data"
        //   },
        //   name: "Add Trend Data",
        //   path: '/admin/add-trend',
        //   component: () => import('@/views/Admin/AddTrend.vue'),
        //   props: true
        // },
        // {
        //   meta: {
        //     title: "Update Trend Data"
        //   },
        //   name: "Update Trend Data",
        //   path: '/admin/update-trend/:id',
        //   component: () => import('@/views/Admin/EditTrend.vue'),
        //   props: true
        // },
        // {
        //   meta: {
        //     title: "Admin Berita"
        //   },
        //   name: "Admin Berita",
        //   path: '/admin/berita',
        //   component: () => import('@/views/Admin/Berita.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Berita"
        //   },
        //   name: "Add Berita",
        //   path: '/admin/add-berita',
        //   component: () => import('@/views/Admin/AddNews.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Berita"
        //   },
        //   name: "Update Berita",
        //   path: '/admin/update-berita/:slug',
        //   component: () => import('@/views/Admin/EditNews.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Profile"
        //   },
        //   name: "Update Profile",
        //   path: '/admin/update-latar-belakang/:id',
        //   component: () => import('@/views/Admin/EditLatarBelakang.vue')
        // },
        // {
        //   meta: {
        //     title: "Publications"
        //   },
        //   name: "Publications",
        //   path: "/admin/publications",
        //   component: () => import('@/views/Admin/Publications.vue')
        // },
        // {
        //   meta: {
        //     title: "Add Publications"
        //   },
        //   name: "Add Publications",
        //   path: '/admin/add-publications',
        //   component: () => import('@/views/Admin/AddPublication.vue')
        // },
        // {
        //   meta: {
        //     title: "Update Publications"
        //   },
        //   name: "Update Publications",
        //   path: '/admin/update-publications/:slug',
        //   component: () => import('@/views/Admin/UpdatePublication.vue')
        // }
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

