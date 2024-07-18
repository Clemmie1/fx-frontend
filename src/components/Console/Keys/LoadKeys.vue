<script setup>
import "vue3-toastify/dist/index.css";
import {onMounted, ref} from 'vue';
import axios from 'axios';

import {useStore} from 'vuex'
import CreateKey from "./Actions/CreateKey.vue";
import DeleteKey from "./Actions/DeleteKey.vue";

const store = useStore()
const loading = ref(false);
const apiKeyList = ref(null);

const token = store.getters.getToken;

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await axios.post(
        'https://api.factox.net/v1/user/getKeys',
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    );

    if (response.status === 200) {
      apiKeyList.value = response.data;
    }

  } catch (error) {
    if (error.response.status === 404) {
      apiKeyList.value = null;
      console.log('404');
    }
  } finally {
    loading.value = false;
  }
};

const updateData = async () => {
  try {
    const response = await axios.post(
        'https://api.factox.net/v1/user/getKeys',
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    );

    if (response.status === 200) {
      apiKeyList.value = response.data;
    }

  } catch (error) {
    if (error.response.status === 404) {
      apiKeyList.value = null;
      console.log('404');
    }
  } finally {

  }
};

onMounted(() => {
  fetchData();
});



const shortenApiKey = (key) => {
  if (!key) return '';
  const prefix = key.substring(0, 3);
  const suffix = key.substring(key.length - 4);
  return `${prefix}...${suffix}`;
};
</script>

<template>
  <div v-if="!loading && (!apiKeyList || apiKeyList.keys.length === 0)" class="mb-6">
    <div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-fx-sidebar dark:text-gray-300" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <div>
        <span class="font-medium">
            Нет API-ключей! Создайте, нажав на кнопку внизу.
        </span>
      </div>
    </div>
  </div>
  <div v-if="loading">
    <div class="animate-pulse h-20 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4" style="cursor: progress"></div>
  </div>
  <div v-if="apiKeyList && apiKeyList.keys.length > 0">
    <div class="relative w-full overflow-auto mb-6">
      <table class="w-full caption-bottom text-sm max-w-[800px] text-white">
        <thead class="[&amp;_tr]:border-b hover:none">
        <tr class="border-b border-gray-700 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <th class="h-12 py-3 pr-2 text-left align-middle text-xs font-medium uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400">ИМЯ</th>
          <th class="h-12 py-3 pr-2 text-left align-middle text-xs font-medium uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400">КЛЮЧ</th>
          <th class="h-12 py-3 pr-2 text-left align-middle text-xs font-medium uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400">СОЗДАННЫЙ</th>
          <th class="h-12 py-3 pr-2 text-left align-middle text-xs font-medium uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400">ИСПОЛЬЗОВАНИЕ</th>
          <th class="h-12 py-3 pr-2 text-left align-middle text-xs font-medium uppercase tracking-wider [&amp;:has([role=checkbox])]:pr-0 text-gray-500 dark:text-gray-400"></th>
        </tr>
        </thead>
        <tbody class="[&amp;_tr:last-child]:border-0">
        <tr
            v-for="item in apiKeyList.keys"
            :key="item.id"
            class="border-b border-gray-700"
        >

          <td class="py-2 align-middle [&amp;:has([role=checkbox])]:pr-0 max-w-[400px] truncate pr-2 hover:overflow-scroll hover:text-clip">
            {{ item.name }}
          </td>
          <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-mono antialiased opacity-80">{{ shortenApiKey(item.key) }}</td>
          <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0 antialiased">{{ item.created }}</td>
          <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ item.last_used }}</td>
          <td class="py-2 pr-2 align-middle [&amp;:has([role=checkbox])]:pr-0">
            <div class="flex justify-end gap-3">
              <DeleteKey :id="item.id" :updateData="updateData" />
            </div>
          </td>

        </tr>

        </tbody>
      </table>
    </div>
  </div>


  <CreateKey :updateData="updateData" />


</template>

<style scoped>

</style>
