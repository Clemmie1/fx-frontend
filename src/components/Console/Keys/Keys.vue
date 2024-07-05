<script setup>

import Header from "../../Header/Header.vue";
import SideBar from "../../Header/SideBar.vue";
import LoadKeys from "./LoadKeys.vue";
</script>

<template>


  <div class="bg-fx-main flex h-svh flex-1 flex-col lg:flex-row">

    <Header />

    <SideBar />

    <main class="p-4 md:ml-64 pt-20 bg-fx-main mx-auto flex w-full flex-1 flex-col overflow-auto">

      <p class="mb-6 text-gray-300 text-lg">
        Управляйте своими ключами API. Не забывайте хранить ключи API в безопасности, чтобы предотвратить несанкционированный доступ.
      </p>


      <LoadKeys />


    </main>

  </div>
</template>

<style scoped>

</style>
