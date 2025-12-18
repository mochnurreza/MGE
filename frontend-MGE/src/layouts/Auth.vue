<template>
    <div>
      <main>
        <section class="relative w-full h-full py-40 min-h-screen">
          <div
            class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            :style="`background-image: url('${registerBg2}');`"
          ></div>
          <router-view />
          <footer-small absolute />
        </section>
      </main>
    </div>
  </template>
  <script>

  </script>
