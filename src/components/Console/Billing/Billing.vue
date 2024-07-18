<script setup>

import Header from "../../Header/Header.vue";
import SideBar from "../../Header/SideBar.vue";
</script>

<template>


  <div class="bg-fx-main flex h-svh flex-1 flex-col lg:flex-row">

    <Header />

    <SideBar />

    <main class="p-4 md:ml-64 pt-20 bg-fx-main mx-auto flex w-full flex-1 flex-col overflow-auto">
      <div class="overflow-auto p-8">
        <div class="flex flex-col lg:flex-row gap-8 items-stretch">
          <div class="flex flex-col border p-8 lg:w-[33%] border-primary-300">
            <h2 class="text-2xl font-montserrat font-semibold text-primary-500">
              Бесплатно
            </h2>
            <div class="py-3 h-16 text-white">
              Начните работу с нашими API
            </div>
            <p class="text-xl font-semibold self-center tracking-tight py-3 text-white">
              $0
            </p>
            <div class="py-4 self-center">
              <button class="inline-flex text-gray-500 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 max-w-48 self-center h-12" disabled="">
                Текущий план
              </button>
            </div>
            <div class="py-2">
              <ul class="flex-1">
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Низкие лимиты ставок
                </li>
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Поддержка сообщества
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col border p-8 lg:w-[33%] border-gray-600">
            <h2 class="text-2xl font-montserrat font-semibold text-primary-500">
              По требованию
            </h2>
            <div class="py-3 h-16 text-white">
              Масштабируйте масштаб и платите по мере использования
            </div>
            <p class="text-xl font-semibold self-center tracking-tight py-3 text-white">
              Оплата за токен
            </p>
            <div class="py-4 self-center">
              <button class="inline-flex text-gray-500 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 max-w-48 self-center h-12" disabled="">
                Скоро
              </button>
            </div>
            <div class="py-2">
              <ul class="flex-1">
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Высокие лимиты ставок
                </li>
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Приоритетная поддержка
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col border p-8 lg:w-[33%] border-gray-600">
            <h2 class="text-2xl font-montserrat font-semibold text-primary-500">
              Бизнес
            </h2>
            <div class="py-3 h-16 text-white">
              Индивидуальные решения для масштабных нужд
            </div>
            <p class="text-xl font-semibold self-center tracking-tight py-3 text-white">

            </p>
            <div class="py-4 self-center">
              <button class="inline-flex text-gray-500 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 max-w-48 self-center h-12" disabled="">
                Скоро
              </button>
            </div>
            <div class="py-2">
              <ul class="flex-1">
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Пользовательские лимиты ставок
                </li>
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Точные модели
                </li>
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Пользовательские соглашения об уровне обслуживания
                </li>
                <li class="flex gap-3 items-center my-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Выделенная поддержка
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="my-8">
          <h2 class="text-md mb-4">On Demand Pricing</h2>
          <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
              <thead class="[&amp;_tr]:border-b hover:none font-light">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 py-3 pr-2 text-left align-middle text-xs uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400 font-light">Price Per Million Tokens</th>
                <th class="h-12 py-3 pr-2 text-left align-middle text-xs uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400 font-light">Current Speed</th>
                <th class="h-12 py-3 pr-2 text-left align-middle text-xs uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400 font-light">Price</th>
              </tr>
              </thead>
              <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">Llama3-70B-8k</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">~330 tokens/s</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $0.59/$0.79
                  <div class="opacity-50 text-xs">(per 1M Tokens, input/output)</div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">Mixtral-8x7B-32k Instruct</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">~575 tokens/s</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $0.24/$0.24
                  <div class="opacity-50 text-xs">(per 1M Tokens, input/output)</div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">Llama3-8B-8k</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">~1,250 tokens/s</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $0.05/$0.08
                  <div class="opacity-50 text-xs">(per 1M Tokens, input/output)</div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">Gemma-7B-Instruct</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">~950 tokens/s</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $0.07/$0.07
                  <div class="opacity-50 text-xs">(per 1M Tokens, input/output)</div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">Whisper Large V3</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">~172x speed factor</td>
                <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">$0.03/hour transcribed</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<style scoped>

</style>
