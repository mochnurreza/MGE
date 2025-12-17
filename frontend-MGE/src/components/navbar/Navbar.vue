<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-yellow-50 font-staatliches text-lg uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Dashboard
      </a>
      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <UserDropdown/>
        <button
          class="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase shadow-md hover:shadow-lg text-sm px-3 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          @click.prevent="handleLogout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script setup>
// import UserDropdown from "@/components/Dropdown/UserDropdown.vue";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "vue-router";

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout();
  router.replace("/auth/login");
};
</script>
