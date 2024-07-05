<script setup>
import {defineProps, ref} from "vue";
import {toast} from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from 'axios';
import {useStore} from 'vuex'

import {Modal} from 'flowbite';

const store = useStore();
const token = store.getters.getToken;
const form = ref({
  name: ''
});

const props = defineProps({
  updateData: Function
});
const isLoading = ref(false);


function openModal() {
  const $targetEl = document.getElementById('modalEl');
  const modal = new Modal($targetEl);
  modal.show();
}

function hideModal() {
  const $targetEl = document.getElementById('modalEl');
  const modal = new Modal($targetEl);
  modal.hide();
  form.value.name = '';
}

let keyApi = "null";

const createToken = async () => {
  isLoading.value = true;

  try {
    const response = await axios.post(
        'https://api.factox.net/v1/user/createKey',
        {
          name: form.value.name
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    );

    if (response.data.success) {
      keyApi = response.data.key;
      hideModal();
      openModalResult();
      toast(response.data.message, {
        "theme": "dark",
        "type": "success",
        "position": "bottom-right",
        "transition": "zoom",
        "dangerouslyHTMLString": true
      });

      props.updateData();

    } else {
      hideModal();
      toast(response.data.message, {
        "theme": "dark",
        "type": "error",
        "position": "bottom-right",
        "transition": "zoom",
        "dangerouslyHTMLString": true
      });
    }

  } catch (error) {
    console.error('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
    toast('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.', {
      "theme": "dark",
      "type": "warning",
      "position": "bottom-right",
      "transition": "zoom"
    });
  } finally {
    isLoading.value = false;
  }
}

function openModalResult() {
  const $targetEl = document.getElementById('resultModal');
  const modal = new Modal($targetEl);
  modal.show();
}

function hideModalResult() {
  const $targetEl = document.getElementById('resultModal');
  const modal = new Modal($targetEl);
  modal.hide();
}
</script>

<template>


  <!-- Modal toggle -->
  <div class="flex">
    <div class="flex-none w-34">
      <button @click="openModal" class="block text-muted bg-white font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-gray-50 dark:hover:bg-gray-200" type="button">
        Создать
      </button>

    </div>
  </div>
  <!-- Main modal -->
  <div id="modalEl" tabindex="1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-fx-sidebar">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 mb-3">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Создать ключ API
          </h3>
          <button @click="hideModal" type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-zinc-800 dark:hover:text-white" >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <form class="space-y-4" @submit.prevent="createToken">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Введите имя для ключа
              </label>
              <input v-model="form.name" type="text" name="name" id="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-fx-sidebar dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
            </div>
            <button v-if="!isLoading" type="submit" :disabled="isLoading" class="w-full text-muted focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-50 dark:hover:bg-gray-200">
              Создать
            </button>
            <button style="cursor: not-allowed" v-else disabled class="w-full disabled text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fx-main">
              <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="resultModal" tabindex="1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-fx-sidebar">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 mb-3">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Создать ключ API
          </h3>
          <button @click="hideModalResult" type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-zinc-800 dark:hover:text-white" >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <div class="space-y-4">
            <div class="mb-6 text-white">
              Ваш новый ключ API создан. <span class="font-bold">Скопируйте его сейчас, так как мы больше не будем его отображать.</span>
            </div>
            <div class="w-full max-h-full">
              <div class="relative mb-6">
                <label for="npm-install-copy-text" class="sr-only">Label</label>
                <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-fx-sidebar dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" :value="keyApi" disabled readonly>
                <button data-copy-to-clipboard-target="npm-install-copy-text" class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-fx-sidebar dark:border-gray-600 dark:hover:bg-zinc-800 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
                                    <span id="default-message" class="inline-flex items-center">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                        </svg>

                                    </span>
                  <span id="success-message" class="hidden inline-flex items-center">
                                        <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                        </svg>
                                        <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                                    </span>
                </button>
              </div>
              <button @click="hideModalResult" type="submit" class="text-muted items-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-50 dark:hover:bg-gray-200">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
