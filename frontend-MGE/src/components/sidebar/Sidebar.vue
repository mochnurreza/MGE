<template>
  <nav
    class="md:left-0 bg-mallard-900 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto my-14 mt-10"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent mt-24"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <!-- Brand -->
      <!-- <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/"
      >
        Vue Notus
      </router-link> -->
      <!-- User -->
      <!-- <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul> -->
      <!-- Collapse -->
      <div
        class="md:flex bg-slate-500 md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <!-- <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                Vue Notus
              </router-link>
            </div> -->
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <!-- <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form> -->

        <!-- Divider -->
        <!-- <hr class="my-4 md:min-w-full" /> -->
        <!-- Heading -->
        <h6
          class="md:min-w-full text-serria-400 font-nunito text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Master Data
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <!-- <li class="items-center">
            <router-link
              to="/admin/dashboard"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-nunito font-bold block"
                :class="[isActive ? 'text-serria-400' : 'text-yellow-50']"
              >
                <i
                  class="fas fa-tv mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Dashboard
              </a>
            </router-link>
          </li> -->

          <li class="items-center">
            <router-link
              to="/dashboard/products"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
               :class="[isActive ? 'text-serria-400' : 'text-yellow-50']"
              >
                <i
                  class="fas fa-tools mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-slate-300']"
                ></i>
                Products
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/dashboard/categories"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-nunito font-bold block"
                :class="[isActive ? 'text-serria-400' : 'text-yellow-50']"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Kategori
              </a>
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
      </div>
    </div>
  </nav>
</template>

<script>
// import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
// import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
// import { useContentStore } from "../../stores/Content/ContentStore";
// import { mapActions, mapWritableState } from "pinia";

// export default {
//   data() {
//     return {
//       collapseShow: "hidden",
//       dataContent: {},
//     };
//   },
//   methods: {
//     toggleCollapseShow: function (classes) {
//       this.collapseShow = classes;
//     },
//     ...mapActions(useContentStore, ["getContent"]),
//   },
//   components: {
//     // NotificationDropdown,
//     // UserDropdown,
//   },
//   computed: {
//     ...mapWritableState(useContentStore, ["latarBelakang"]),
//   },
//   mounted() {
//     this.getContent("latar-belakang");
//   },
// };
</script>
