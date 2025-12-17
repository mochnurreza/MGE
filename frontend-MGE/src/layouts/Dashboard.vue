<template>
    <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <Navbar />
      <Header />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />

      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Header from "@/components/header/Header.vue";
export default {
  name: "admin-layout",
  components: {
    Navbar,
    Sidebar,
    Header
  },
};
</script>
