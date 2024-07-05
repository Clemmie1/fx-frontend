<script setup>
import {toast} from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {onMounted, ref} from 'vue';
import axios from 'axios';

import {useStore} from 'vuex'

const store = useStore()
const loading = ref(false);
const chatCompletionData = ref(null);
const speechToTextData = ref(null);

const token = store.getters.getToken;

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await axios.post(
        'https://api.factox.net/v1/user/limits',
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    );
    chatCompletionData.value = response.data.chat_completion;
    speechToTextData.value = response.data.speech_to_text;
  } catch (error) {
    console.error('Error fetching data:', error);
    toast('Ошибка получения данных', {
      "theme": "dark",
      "type": "error",
      "position": "bottom-right",
      "transition": "zoom",
      "dangerouslyHTMLString": true
    });
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

</script>

<template>
  <div class="mb-6">
    <!-- Spinner loader for API response -->
    <div v-if="loading">

      <!--            <div class="text-center">
                      <div role="status">
                          <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span class="sr-only">Loading...</span>
                      </div>
                  </div>-->

      <h2 class="text-xl font-medium text-white">
        <div class="animate-pulse h-4.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
      </h2>
      <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm min-w-full max-w-[800px]">
          <thead>
          <tr class="border-b border-gray-700">
            <th class="h-12 py-3 pr-2 text-left text-xs font-medium text-gray-500">
              <div class="animate-pulse h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              <div class="animate-pulse h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              <div class="animate-pulse h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              <div class="animate-pulse h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              <div class="animate-pulse h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </th>
          </tr>
          </thead>
          <tbody class="text-white">
          <tr class="border-b border-gray-700">
            <td class="py-2 pr-2">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
          </tr>
          <tr class="border-b border-gray-700">
            <td class="py-2 pr-2">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
          </tr>
          <tr class="border-b border-gray-700">
            <td class="py-2 pr-2">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
            <td class="py-2 pr-2 text-right">
              <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- Data from API - chat_completion -->
    <div v-if="chatCompletionData" class="mb-6">
      <h2 class="text-xl font-medium text-white">
        {{ chatCompletionData.table_lang.table_name }}
      </h2>
      <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm min-w-full max-w-[800px]">
          <thead>
          <tr class="border-b border-gray-700">
            <th class="h-12 py-3 pr-2 text-left text-xs font-medium text-gray-500">
              {{ chatCompletionData.table_lang.id }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ chatCompletionData.table_lang.requests_per_minute }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ chatCompletionData.table_lang.requests_per_day }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ chatCompletionData.table_lang.tokens_per_minute }}
            </th>
          </tr>
          </thead>
          <tbody class="text-white">
          <tr
              v-for="item in chatCompletionData.table_list"
              :key="item.id"
              class="border-b border-gray-700"
          >
            <td class="py-2 pr-2">{{ item.id }}</td>
            <td class="py-2 pr-2 text-right">{{ item.requests_per_minute }}</td>
            <td class="py-2 pr-2 text-right">{{ item.requests_per_day }}</td>
            <td class="py-2 pr-2 text-right">{{ item.tokens_per_minute }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Data from API - speech_to_text -->
    <div v-if="speechToTextData" class="mb-6">
      <h2 class="text-xl font-medium text-white">
        {{ speechToTextData.table_lang.table_name }}
      </h2>
      <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm min-w-full max-w-[800px]">
          <thead>
          <tr class="border-b border-gray-700">
            <th class="h-12 py-3 pr-2 text-left text-xs font-medium text-gray-500">
              {{ speechToTextData.table_lang.id }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ speechToTextData.table_lang.requests_per_minute }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ speechToTextData.table_lang.requests_per_day }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ speechToTextData.table_lang.audio_seconds_per_hour }}
            </th>
            <th class="h-12 py-3 pr-2 text-right text-xs font-medium text-gray-500">
              {{ speechToTextData.table_lang.audio_seconds_per_day }}
            </th>
          </tr>
          </thead>
          <tbody class="text-white">
          <tr
              v-for="item in speechToTextData.table_list"
              :key="item.id"
              class="border-b border-gray-700"
          >
            <td class="py-2 pr-2">{{ item.id }}</td>
            <td class="py-2 pr-2 text-right">{{ item.requests_per_minute }}</td>
            <td class="py-2 pr-2 text-right">{{ item.requests_per_day }}</td>
            <td class="py-2 pr-2 text-right">{{ item.audio_seconds_per_hour }}</td>
            <td class="py-2 pr-2 text-right">{{ item.audio_seconds_per_day }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>



<!--    <h2 class="text-xl font-medium text-white">
        <div class="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px]"></div>
    </h2>-->
