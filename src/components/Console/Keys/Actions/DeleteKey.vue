<script setup>
import {defineProps, ref} from 'vue';
import axios from "axios";
import {toast} from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import {useStore} from "vuex";

const store = useStore()
const token = store.getters.getToken;


const props = defineProps({
  id: Number,
  updateData: Function
});
const isLoading = ref(false);
async function deleteKey() {

  isLoading.value = true;
  try {

    const response = await axios.post(

        'https://api.factox.net/v1/user/deleteKey',
        {
          id: props.id
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    );

    if (response.data.success) {
      toast(response.data.message, {
        "theme": "dark",
        "type": "success",
        "position": "bottom-right",
        "transition": "zoom",
        "dangerouslyHTMLString": true
      });
      props.updateData();
    } else {
      toast(response.data.message, {
        "theme": "dark",
        "type": "error",
        "position": "bottom-right",
        "transition": "zoom",
        "dangerouslyHTMLString": true
      });
    }

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
    isLoading.value = false;
  }



}

</script>

<template>


  <button v-if="!isLoading" @click="deleteKey" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash ">
      <path d="M3 6h18"></path>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    </svg>
  </button>
  <button style="cursor: not-allowed" v-else disabled class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-75 disabled:text-white border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive" type="button">
    <svg aria-hidden="true" role="status" width="16" height="16" class="inline text-red-600 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
  </button>

</template>

<style scoped>

</style>
