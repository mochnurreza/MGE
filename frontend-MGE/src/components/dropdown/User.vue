<template>
  <div>
    <a class="text-blueGray-500 block" href="#pablo" ref="btnDropdownRef">
      <div class="items-center flex">
        <h4 class="text-yellow-50 font-nunito mx-4">
          Hi, Nama
        </h4>
      </div>
    </a>
  </div>
</template>

<script>
// import { createPopper } from "@popperjs/core";
// import { useAuthenticationStore } from "@/stores/AuthStore/Authentication.js";
// import { mapActions, mapState } from "pinia";
// import image from "@/assets/img/team-1-800x800.jpg";

// export default {
//   data() {
//     return {
//       dropdownPopoverShow: false,
//       image: image,
//       fullName: ''
//     };
//   },
//   methods: {
//     ...mapActions(useAuthenticationStore, ["logout", "setUserLogonInfo"]),
//     toggleDropdown: function (event) {
//       event.preventDefault();
//       if (this.dropdownPopoverShow) {
//         this.dropdownPopoverShow = false;
//       } else {
//         this.dropdownPopoverShow = true;
//         createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
//           placement: "bottom-start",
//         });
//       }
//     },
//   },
//   computed: {
//     ...mapState(useAuthenticationStore, {
//       userInfo: "getUserInfo",
//     }),
//   },
//   created() {
//     const data = localStorage.getItem('userInfo')
//     if(data) {
//       const userInfo = JSON.parse(data)
//       this.setUserLogonInfo(userInfo)
//       this.fullName = userInfo.fullName
//     }
//   },
// };
</script>
