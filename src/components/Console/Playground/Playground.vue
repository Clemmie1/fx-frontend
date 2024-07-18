<script setup>

import Header from "../../Header/Header.vue";
import SideBar from "../../Header/SideBar.vue";
</script>

<template>


  <div class="bg-fx-main flex h-svh flex-1 flex-col lg:flex-row">

    <Header />

    <SideBar />

    <main class="p-4 md:ml-64 pt-20 bg-fx-main mx-auto flex w-full flex-1 flex-col overflow-auto">
      <div class="h-screen flex flex-col pb-6">
        <div class="h-full flex flex-col justify-center">
          <div class="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <svg class="w-28 h-auto mx-auto mb-4" width="116" height="32" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1578 0H42.8556L24.6978 28.9833H0L18.1578 0Z" fill="white"/>
              <path d="M18.9041 31.8573L11.8222 43.0833H37.8714L56.1555 14.1H36.9296L25.7273 31.8573H18.9041Z" fill="white"/>
            </svg>
            <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Playground AI
            </h1>
            <p class="mt-3 text-gray-600 dark:text-neutral-400">
              Ваш второй пилот на базе искусственного интеллекта для Интернета
            </p>
          </div>

          <!-- Search -->
          <div class="mt-10 max-w-3xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-4 md:p-5">
              <ul class="space-y-4 mb-4">
                <li>
                  <router-link :to="{ name: 'PlaygroundChat' }" >
                    <a href="">
                      <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-fx-sidebar dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 dark:text-white dark:bg-fx-sidebar dark:hover:bg-zinc-800">
                        <div class="block">
                          <div class="w-full text-lg font-semibold">Генерация текста</div>
                          <div class="w-full text-gray-500 dark:text-gray-400 mt-3">
                            Семейство генеративных текстовых моделей, таких как модели<br>большого языка (LLM), которые можно адаптировать для<br>различных задач на естественном языке.
                          </div>
                        </div>
                        <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                      </label>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'PlaygroundTTI'}">
                    <a href="">
                      <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-fx-sidebar dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 dark:text-white dark:bg-fx-sidebar dark:hover:bg-zinc-800">
                        <div class="block">
                          <div class="w-full text-lg font-semibold">Text-to-Image</div>
                          <div class="w-full text-gray-500 dark:text-gray-400 mt-3">
                            Генерирует изображения из входного текста.<br>Эти модели можно использовать для создания<br>и изменения изображений на основе текстовых подсказок.
                          </div>
                        </div>
                        <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                      </label>
                    </a>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- End Search -->
        </div>


      </div>
    </main>

  </div>
</template>

<style scoped>

</style>
