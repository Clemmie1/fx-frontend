<script setup>
import {computed, defineProps, ref, watchEffect} from 'vue';
import {useRoute, useRouter} from "vue-router"
import {toast} from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const router = useRouter();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

watchEffect(() => {
  console.log(props.data);
});

const selectedFormat = ref('json');

const formattedCode = computed(() => {
  switch (selectedFormat.value) {
    case 'curl':
      const dataString = JSON.stringify(props.data, null, 2);
      return `curl "https://api.factox.net/openai/v1/chat" \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer \${FACTOX_API_KEY}" \\
  -d '${dataString}'`;
    case 'javascript':
      return `const data = ${JSON.stringify(props.data, null, 2)};\n\nfetch('https://api.groq.com/openai/v1/chat/completions', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': 'Bearer ${GROQ_API_KEY}'\n  },\n  body: JSON.stringify(data)\n}).then(response => response.json()).then(data => console.log(data));`;
    case 'python':
      return `import requests\n\nurl = "https://api.groq.com/openai/v1/chat/completions"\ndata = ${JSON.stringify(props.data, null, 2)}\nheaders = {\n  "Content-Type": "application/json",\n  "Authorization": "Bearer ${GROQ_API_KEY}"\n}\nresponse = requests.post(url, headers=headers, json=data)\nprint(response.json())`;
    default:
      return JSON.stringify(props.data, null, 2);
  }
});

function copyToClipboard() {
  navigator.clipboard.writeText(formattedCode.value).then(() => {
    toast("Скопировано!", {
      "theme": "dark",
      "autoClose": 600,
      "type": "success",
      "position": "bottom-center",
      "transition": "zoom",
      "dangerouslyHTMLString": true,
      "closeOnClick": false,
      "pauseOnHover": false,
      "limit": 1,
      "icon": false,
      // "bodyClassName": "text-gray-400 bg-fx-main"
    });
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}
</script>

<template>

<!--  <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden md:inline-block">
    Показать код
  </button>-->

  <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" class="px-4 inline-flex items-center justify-center text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white">
    Показать код
  </button>

  <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-fx-sidebar">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Посмотреть код
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
            Вы можете использовать следующий код, чтобы начать интеграцию текущего приглашения и настроек в ваше приложение.
          </p>

          <div class="max-h-[400px] w-full max-w-[780px] overflow-auto rounded-b-md font-sans lg:max-h-[600px]">
            <div class="z-10 sticky py-1.5 top-0 flex w-full flex-row-reverse rounded-t-md bg-[#302f2f] text-code-text">
              <div class="flex items-center space-x-1">

                <div class="grid gap-1">

                  <select v-model="selectedFormat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#302f2f] dark:border-[#302f2f] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#302f2f] dark:focus:border-[#302f2f] dark:hover:text-gray-500">
                    <option value="json" selected>JSON</option>
                    <option value="curl">CURL</option>
                  </select>

                </div>

                <button @click="copyToClipboard" class="inline-flex text-white items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 hover:bg-inherit hover:text-gray-500">
                  Копировать код
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy ml-2">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  <span class="sr-only">Copy code</span>
                </button>
              </div>
            </div>
            <code class="block whitespace-pre overflow-x-scroll" style="white-space: pre; color: rgb(212, 212, 212); font-size: 13px; text-shadow: none; font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, &quot;Courier New&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; overflow: auto; background: rgb(30, 30, 30); max-height: 400px;">
              {{ formattedCode }}
            </code>
          </div>

<!--          <div class="mb-3 flex items-center justify-between">
            <div>
              <select v-model="selectedFormat" class="border border-gray-300 rounded p-2">
                <option value="json">JSON</option>
                <option value="curl">curl</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
            </div>
            <button @click="copyToClipboard" class="text-sm font-medium text-blue-600 dark:text-blue-400">Copy</button>
          </div>

          <div class="mb-3">
            <pre>{{ formattedCode }}</pre>
          </div>-->

          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Ваш API-ключ можно найти
            <router-link :to="{ name: 'Keys' }"><a class="text-white hover:underline">здесь</a>.</router-link>
            <br>
            Вам следует использовать переменные среды или инструмент управления секретами, чтобы предоставить свой ключ вашим приложениям.
          </p>
        </div>
        <!-- Modal footer -->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>