<script setup>
import Header from "../../../Header/Header.vue";
import SideBar from "../../../Header/SideBar.vue";
import {ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";


const store = useStore();
const authToken = store.getters.getToken;

const isLoading = ref(false);

const resultList = ref([]);
const prompt = ref({
  prompt: ''
});

async function sendRequestPost() {
  isLoading.value = true;
  resultList.value.push({
    'creating': true,
    'prompt': prompt.value.prompt,
    'result_image_link': '',
    'error': false,
    'error_message': null
  });

  // Запоминаем индекс добавленного элемента
  const currentIndex = resultList.value.length - 1;

  try {
    const response = await axios.post(
        'https://api.factox.net/v1/tti/diffusion',
        {
          prompt: prompt.value.prompt
        },
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
    );

    resultList.value[currentIndex] = {
      'creating': false,
      'prompt': prompt.value.prompt,
      'result_image_link': response.data.data.result_image_link,
      'error': false,
      'error_message': null
    };

  } catch (error) {

    if (error.response.status === 403) {
      return resultList.value[currentIndex] = {
        'creating': false,
        'prompt': prompt.value.prompt,
        'result_image_link': '',
        'error': true,
        'error_message': error.response.data.error.message
      };
    }

    if (error.response.status === 400) {
      return resultList.value[currentIndex] = {
        'creating': false,
        'prompt': prompt.value.prompt,
        'result_image_link': '',
        'error': true,
        'error_message': error.response.data.error.message
      };
    }

  } finally {
    isLoading.value = false;
  }
}

async function reBuildPrompt(index, prompt) {
  console.log('reBuildPrompt', index, prompt);
  resultList.value[index].creating = true;

  try {
    isLoading.value = true;
    const response = await axios.post(
        'https://api.factox.net/v1/tti/diffusion',
        {
          prompt: prompt
        },
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
    );

    resultList.value[index].creating = false;
    resultList.value[index].result_image_link = response.data.data.result_image_link;

  } catch (error) {

    if (error.response.status === 403) {
      resultList.value[index].creating = false;
      resultList.value[index].error = true;
      resultList.value[index].error_message = error.response.data.error;
    } else if (error.response.status === 400) {
      resultList.value[index].creating = false;
      resultList.value[index].error = true;
      resultList.value[index].error_message = error.response.data.error;
    }


  } finally {
    isLoading.value = false;
  }

}

// function sendRequestPost(){
//
//   const res = {
//     'creating': false,
//     'prompt': prompt.value.prompt,
//     'result_image_link': 'https://cdn.factox.cloud/qXkyNyAArizx2rk03IQPFJkhx6AzHuBxR15uv57EYGsG7NFxTH3JIjBgQZZpDpLB20NnNoP0kLT3jIANnPfR9bPbNDuY4UIL5WDm.jpg'
//   }
//
//   resultList.value.push({
//     'creating': res.creating,
//     'prompt': res.prompt,
//     'result_image_link': res.result_image_link,
//   });
//
//
// }
</script>

<template>


  <div class="bg-fx-main flex h-svh flex-1 flex-col lg:flex-row">

    <Header />

    <SideBar />

    <main class="p-4 md:ml-64 pt-20 bg-fx-main mx-auto flex w-full flex-1 flex-col overflow-auto">

      <div class="relative h-screen">
        <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Title -->
          <div class="text-center">
            <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div class="relative">
                <div>
                  <input v-model="prompt.prompt" :disabled="isLoading" type="text" class="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-white focus:ring-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Что вы хотите увидеть?">
                  <div class="absolute top-1/2 end-2 -translate-y-1/2">
                    <button v-if="!isLoading" :disabled="isLoading" @click="sendRequestPost" type="button" class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
                    </button>
                    <button v-else style="cursor: not-allowed;" type="button" disabled class="disabled size-10 me-1 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-800">
                      <VueSpinner size="20" color="white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-for="(result, index) in resultList" :key="index">

            <div v-if="result.error">
              <ul class="mt-6 space-y-5">
                <!-- Chat Bubble -->
                <li class="py-2 sm:py-4">
                  <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
                      <span class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-red-500">
                        <svg class="flex-shrink-0 bg-red-400 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="38" height="38" rx="6" />
                          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
                          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
                          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
                        </svg>
                      </span>
                      <div class="grow mt-2 space-y-3">
                        <div class="bg-red-50 border-s-4 border-red-500 p-3 rounded dark:bg-red-800/30" role="alert">
                          <div class="flex">
                            <div class="ms-1">
                              <h3 class="text-gray-800 font-semibold dark:text-white">
                                Ошибка
                              </h3>
                              <p class="text-sm text-gray-700 dark:text-neutral-400">
                                {{ result.error_message  }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div v-else-if="!result.creating">
              <ul class="mt-6 space-y-5">

                <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
                  <svg class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="6" fill="#2563EB"/>
                    <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
                    <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
                    <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
                  </svg>

                  <div class="grow max-w-[90%] md:max-w-2xl w-full space-y-3">

                    <div class="space-y-3">
                      <p class="text-sm text-gray-800 dark:text-white">
                        Ну вот что получилось...
                      </p>
                    </div>

                    <div class="grid grid-cols-2 gap-1 overflow-hidden">
                      <div class="aspect-w-16 aspect-h-9">
                        <img class="w-full rounded" :src="result.result_image_link" :alt="result.prompt">
                      </div>
                    </div>

                    <div>
                      <div class="sm:flex sm:justify-between">
                        <div>
                          <button :disabled="isLoading" @click="reBuildPrompt(index, result.prompt)" type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                            <svg class="size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                            </svg>
                            Rebuild Prompt
                          </button>
                          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            Скачать
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>
              </ul>
            </div>
            <div v-else>
              <ul class="mt-6 space-y-5">
                <!-- Chat Bubble -->
                <li class="py-2 sm:py-4">
                  <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
                      <span class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                        <svg class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="38" height="38" rx="6" fill="#2563EB"/>
                          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
                          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
                          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
                        </svg>
                      </span>
                      <div class="grow mt-2 space-y-3">
                        <div class="flex items-center text-white">
                          Генерация изображения
                          <div class="ml-3">
                            <VueSpinnerBall size="20" color="white"/>
                          </div>

<!--                          <div role="status">
                            <svg aria-hidden="true" class="w-4 h-4 ml-3 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                            <span class="sr-only">Loading...</span>
                          </div>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>


<!--          <ul class="mt-6 space-y-5">
            <li class="py-2 sm:py-4">
              <div class="bg-red-50 border-s-4 border-red-500 p-4 rounded dark:bg-red-800/30" role="alert">
                <div class="flex">
                  <div class="ms-3">
                    <h3 class="text-gray-800 font-semibold dark:text-white">
                      Ошибка! {{ index }}
                    </h3>
                    <p class="text-sm text-gray-700 dark:text-neutral-400">
                      Для генерации изображения необходим API ключ. Пожалуйста, создайте API ключ, чтобы использовать эту модель.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="mt-6 space-y-5">
            &lt;!&ndash; Chat Bubble &ndash;&gt;
            <li class="py-2 sm:py-4">
              <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
                  <span class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <svg class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="38" height="38" rx="6" fill="#2563EB"/>
                      <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
                      <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
                      <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
                    </svg>
                  </span>

                  <div class="grow mt-2 space-y-3">
                    <div class="flex items-center text-white">
                      Генерация изображения
                      <div role="status">
                        <svg aria-hidden="true" class="w-4 h-4 ml-3 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul class="mt-6 space-y-5">
            &lt;!&ndash; Chat Bubble &ndash;&gt;
            <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
              <svg class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="6" fill="#2563EB"/>
                <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
                <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
                <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
              </svg>

              <div class="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
                &lt;!&ndash; Card &ndash;&gt;
                <div class="space-y-3">
                  <p class="text-sm text-gray-800 dark:text-white">
                    Ну вот что получилось...
                  </p>
                </div>
                &lt;!&ndash; End Card &ndash;&gt;

                <div class="grid grid-cols-2 gap-1 overflow-hidden">
                  <div class="aspect-w-16 aspect-h-9">
                    <img class="w-full rounded" src="https://cdn.sheygpt.wtf/1251601316363505724_780167169077673994-cac313ef-0820-441a-975c-8dfe09c8892b.jpg" alt="Deep Learning">
                  </div>
                </div>

                &lt;!&ndash; Button Group &ndash;&gt;
                <div>
                  <div class="sm:flex sm:justify-between">
                    <div>
                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        Скачать изображение
                      </button>
                    </div>
                  </div>
                </div>
                &lt;!&ndash; End Button Group &ndash;&gt;
              </div>
            </li>
          </ul>-->

        </div>
      </div>


    </main>

  </div>

</template>

<style scoped>

</style>
