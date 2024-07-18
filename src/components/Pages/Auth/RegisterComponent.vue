<script setup>
import {onMounted, ref} from "vue";
import {toast} from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from 'axios';
import {useStore} from 'vuex'
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: ''
});
const isLoading = ref(false);
const store = useStore()


const handleRegister = async () => {
  isLoading.value = true;

  try {
    const response = await axios.post("https://api.factox.net/v1/user-org/register", {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    });



    if (response.data.success) {
      toast(response.data.message, {
        "theme": "dark",
        "type": "success",
        "position": "bottom-right",
        "transition": "zoom",
        "dangerouslyHTMLString": true
      });
      console.log(response.data.token);
      // await store.dispatch('setToken', response.data.data.token);
      // await router.push({name: 'Playground'})
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
    // console.error('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
    toast('Произошла ошибка. Пожалуйста, попробуйте еще раз.', {
      "theme": "dark",
      "type": "warning",
      "position": "bottom-right",
      "transition": "zoom"
    });
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => {
  const token = route.query.token
  const name = route.query.name
  const email = route.query.email
  const avatar = route.query.avatar

  if (token) {
    console.log(token);
    await store.dispatch('setToken', token);
    await store.dispatch('setName', name);
    await store.dispatch('setEmail', email);
    await store.dispatch('setAvatar', avatar);
    router.push({ name: 'Playground' });
  }
});
</script>

<template>

  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
    <main class="bg-gray-50 dark:bg-fx-main min-h-screen">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

          <svg width="57" height="47" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1578 0H42.8556L24.6978 28.9833H0L18.1578 0Z" fill="white"/>
            <path d="M18.9041 31.8573L11.8222 43.0833H37.8714L56.1555 14.1H36.9296L25.7273 31.8573H18.9041Z" fill="white"/>
          </svg>

        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-fx-sidebar dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Регистрация аккаунта
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваше имя</label>
                <input type="text" name="name" id="name" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-fx-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="Иван" required="">
              </div>
              
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Адрес электронной почты</label>
                <input type="email" name="email" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-fx-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="name@company.com" required="">
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                <input type="password" name="password" id="password" v-model="form.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-fx-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" required="">
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Запомнить меня</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-gray-500">Забыли пароль?</a>
              </div>

              <button v-if="!isLoading" type="submit" :disabled="isLoading" class="w-full text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-50">
                Зарегистрироваться
              </button>
              <button
                  v-else
                  disabled
                  style="cursor: not-allowed;"
                  class="font-bold w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fx-main">
                <svg aria-hidden="true" role="status" class="inline w-4 h-4  text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>

              </button>

              <div class="flex items-center">
                <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div class="px-5 text-center text-gray-500 dark:text-gray-400">или</div>
                <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div class="space-y-3">
                <button type="button" onclick="location.href='https://api.factox.net/auth/github/redirect'" class="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-fx-sidebar dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-fx-main">
                  <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                  </svg>
                  Через GitHub
                </button>
              </div>
              <div class="space-y-3">
                <button type="button" onclick="location.href='https://api.factox.net/auth/google/redirect'" class="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-fx-sidebar dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-fx-main">
                  <svg class="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"/><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"/><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"/><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"/></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs>
                  </svg>
                  Через Google
                </button>
              </div>

              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                У вас уже есть учетная запись?
                <router-link :to="{name: 'LoginPage'}"><a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Войдите здесь.</a></router-link>
              </p>

            </form>
          </div>

        </div>
      </div>
    </main>
  </div>

</template>

<style scoped>

</style>