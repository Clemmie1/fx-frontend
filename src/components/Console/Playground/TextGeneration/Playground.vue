<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue';
import Select from 'primevue/select';
import Header from "../../../Header/Header.vue";
import SideBar from "../../../Header/SideBar.vue";
import axios from "axios";
import ViewCodeModal from "./ViewCodeModal.vue";
// import {CopyToClipboard} from 'vue-copy-to-clipboard';
import {useStore} from "vuex";


const store = useStore();
const authToken = store.getters.getToken;

const isLoading = ref(false);
const responseError = ref({
  error: false,
  error_message: null
});

const messages = ref([
  { role: 'user', content: '' }
]);

const systemRole = ref({
  role: 'system',
  content: null
});

const selectedModel = ref({
  name: 'gemma2-9b-it',
  code: 'gemma2-9b-it'
});

const options = ref({
  model: selectedModel.value.name,
  temperature: 1,
  max_tokens: 1024,
  top_p: 1,
  stream: false,
  stop: null,
});



const responseStats = ref(null);

function addMessage() {
  clearError();
  responseStats.value = null;
  messages.value.push({ role: 'user', content: '' });
}

function removeMessage(index) {
  clearError();
  responseStats.value = null;
  messages.value.splice(index, 1);
}

function removeAllMessages() {
  clearError();
  responseStats.value = null;
  messages.value = [];
}

function toggleRole(index) {
  messages.value[index].role = messages.value[index].role === 'user' ? 'assistant' : 'user';
}

const payload = computed(() => {
  const messagePayload = {
    messages: [
      ...messages.value
    ],
    model: options.value.model,
    temperature: options.value.temperature,
    max_tokens: options.value.max_tokens,
    top_p: options.value.top_p,
    stream: options.value.stream,
    stop: options.value.stop,
  };

  if (systemRole.value.content !== null) {
    messagePayload.messages.unshift(systemRole.value); // Push the systemRole content
  }

  return messagePayload;
});


async function sendRequestPost() {

  isLoading.value = true;
  responseStats.value = null;

  responseError.value = {
    error: false,
    error_message: null
  };

  try {
    const response = await axios.post(
        'https://api.factox.net/v1/playground',
        payload.value,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }

        }
    );
    messages.value.push({
      role: 'assistant',
      content: response.data.choices[0].message.content
    });
    responseStats.value = response.data.usage;
  } catch (error) {

    if (error.response.status === 403 || error.response.status === 429 || error.response.status === 400) {
        responseError.value = {
          error: true,
          error_message: error.response.data.error.message
        };
    }

  } finally {
    isLoading.value = false;
  }
}

function clearError() {
  responseError.value = {
    error: false,
    error_message: null
  };
}

function getCode() {
  const payload = {
    messages: messages.value,
    options: options.value,
  };
  // console.log(payload);
}

function handleKeydown(event) {

  if (event.key === '+') {
    responseStats.value = null;
    addMessage({
      role: 'user',
      content: ''
    });
  }
  if (event.key === '-') {
    responseStats.value = null;
    removeMessage(messages.value.length - 1);
  }

  if (event.key === 'Delete') {
    responseStats.value = null;
    removeAllMessages();
  }


  if (event.altKey && event.key.toLowerCase() === 'a') {
    responseStats.value = null;
    messages.value.push({
      role: 'assistant',
      content: ''
    })
  }

  if (event.ctrlKey && event.key.toLowerCase() === 'enter') {
    sendRequestPost();
  }

}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});


function getRoleDisplay(role) {
  if (role === 'user'){
    return 'Ассистент';
  } else if (role === 'assistant'){
    return 'Пользователь';
  }
}

</script>

<template>


  <div class="bg-fx-main flex h-svh flex-1 flex-col lg:flex-row">

    <Header />

    <SideBar />

    <main class="p-0 md:ml-64 mx-auto flex w-full flex-1 flex-col overflow-auto mb-0" style="padding-top: 4rem;">
      <div data-thing="console-layout-root" class="flex flex-1 flex-col">
        <div class="flex flex-1 flex-col lg:h-screen">
          <div class="flex items-center justify-between pr-5 mt-0">
            <h2 class="p-4 text-2xl font-medium text-white">Playground</h2>
            <div class="flex gap-3">
              <div class="md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R6fffelspla:" data-state="closed">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code ">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </button>
                <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden md:inline-block">View code</button>
              </div>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 lg:hidden bg-secondary" title="Show System Prompt (⌘ + [)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal ">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" x2="20" y1="19" y2="19"></line>
                </svg>
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 lg:hidden" title="Show Settings (⌘ + ])">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal ">
                  <line x1="21" x2="14" y1="4" y2="4"></line>
                  <line x1="10" x2="3" y1="4" y2="4"></line>
                  <line x1="21" x2="12" y1="12" y2="12"></line>
                  <line x1="8" x2="3" y1="12" y2="12"></line>
                  <line x1="21" x2="16" y1="20" y2="20"></line>
                  <line x1="12" x2="3" y1="20" y2="20"></line>
                  <line x1="14" x2="14" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="10" y2="14"></line>
                  <line x1="16" x2="16" y1="18" y2="22"></line>
                </svg>
              </button>
            </div>
          </div>
          <div data-orientation="horizontal" role="none" class="shrink-0 border-b border-gray-700 h-[1px] w-full"></div>

          <div dir="ltr" data-orientation="horizontal" class="flex-1">
            <div class="grid h-full items-stretch lg:grid-cols-[1fr_250px]">
              <div class="hidden flex-col space-y-4 border-l border-l-border border-gray-700 md:order-2 lg:flex">
                <div class="grid gap-2">
                  <div data-state="closed"></div>
                </div>
                <div class="space-y-8">
                  <div class="px-6 space-y-8">
                    <div class="grid gap-2">
                      <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white" for="model" data-state="closed">Модель</label>

                        <Select v-model="selectedModel" :options="[
                            {
                              name: 'gemma2-9b-it',
                              code: 'gemma2-9b-it'
                            },
                            {
                              name: 'gemma-7b-it',
                              code: 'gemma-7b-it'
                            },
                            {
                              name: 'llama3-70b-8192',
                              code: 'llama3-70b-8192'
                            },
                            {
                              name: 'llama3-8b-8192',
                              code: 'llama3-8b-8192'
                            },
                            {
                              name: 'mixtral-8x7b-32768',
                              code: 'mixtral-8x7b-32768'
                            }

                        ]" optionLabel="code" placeholder="Select a City" class="" />

                      </div>
                    </div>
                  </div>
                  <div class="space-y-8">
                    <div class="px-6 space-y-8">
                      <div class="grid gap-2 pt-2">
                        <div class="flex flex-col gap-2" data-state="closed">
                          <div data-popover-target="popover-temperature" data-popover-placement="left" class="flex items-center justify-between">
                            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize text-white" for="input-temperature">температура</label>
                            <input type="text" value="1" class="flex h-10 text-white bg-fx-main file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50  ml-auto w-16 rounded-md border px-2 py-0.5 text-right text-sm text-muted-foreground border-border" id="input-temperature">
                          </div>
                          <div data-popover id="popover-temperature" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-black">
                            <div class="px-3 py-2">
                              <p>
                                Контролирует случайность: снижение приводит к меньшему количеству случайных завершений. Когда температура приближается к нулю, модель станет детерминированной и повторяющейся.
                              </p>
                            </div>
                            <div data-popper-arrow></div>
                          </div>
                          <input v-model="options.temperature" type="range" value="1" max="2" class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700">
                        </div>
                      </div>
                      <div class="grid gap-2 pt-2">
                        <div class="flex flex-col gap-2" data-state="closed">
                          <div data-popover-target="popover-max-tokens" data-popover-placement="left" class="flex items-center justify-between">
                            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize text-white" for="input-temperature">макс. токенов</label>
                            <input v-model="options.max_tokens" type="number" value="1024" class="flex h-10 text-white bg-fx-main file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50  ml-auto w-16 rounded-md border px-2 py-0.5 text-right text-sm text-muted-foreground border-border" id="input-temperature">
                          </div>
                          <div data-popover id="popover-max-tokens" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-black">
                            <div class="px-3 py-2">
                              <p>
                                Максимальное количество токенов для генерации. Запросы могут использовать до 8192 токенов, совместно используемых между подсказкой и завершением.
                              </p>
                            </div>
                            <div data-popper-arrow></div>
                          </div>
                          <input v-model="options.max_tokens" type="range" value="1024" max="8192" class="w-full h-1 bg-[#6B7280] rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                      </div>

                      <div class="grid gap-2 pt-2">
                        <div class="flex flex-col gap-2" data-state="closed">
                          <div class="flex items-center justify-between">
                            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize text-white" for="input-temperature">Top P</label>
                            <input v-model="options.top_p" type="number" value="1" class="flex h-10 text-white bg-fx-main file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50  ml-auto w-16 rounded-md border px-2 py-0.5 text-right text-sm text-muted-foreground border-border" id="input-temperature">
                          </div>

                          <input v-model="options.top_p" type="range" value="1" class="w-full h-1 bg-[#6B7280] rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                      </div>

                      <div class="flex items-center justify-between" data-state="closed">
                        <label class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="toggle-Stream">Stream</label>
                        <input type="checkbox" id="hs-small-switch" class="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-5 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200">

                      </div>

                      <div class="grid gap-2 pt-2">
                        <div class="flex flex-col gap-2" data-state="closed">
                          <div class="flex items-center justify-between">
                            <label class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize" for="input-seed">seed</label>
                            <input value="" class="flex h-10 text-white bg-fx-main file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50  ml-auto w-16 rounded-md border px-2 py-0.5 text-right text-sm text-muted-foreground border-border" id="input-temperature">
                          </div>
                        </div>
                      </div>

                      <div>
                        <div class="space-y-2" data-state="closed">
                          <label class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="stopSequence">Stop Sequence</label>
                          <input v-model="options.stop" class="flex h-10 w-full rounded-md border border-input bg-fx-main text-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:border-ring" id="stopSequence" placeholder="" value="">
                        </div>
                      </div>


                    </div>

                  </div>
                </div>
              </div>
              <div class="order-1 flex flex-col">
                <div class="mt-0 flex flex-1 flex-col p-0">
                  <div class="flex flex-1 md:hidden">
                    <div class="flex h-full w-full data-[panel-group-direction=vertical]:flex-col flex-1" data-panel-group="" data-panel-group-direction="vertical" data-panel-group-id=":R1dvffelspla:" data-panel-group-units="percentages" style="display:flex;flex-direction:column;height:100%;overflow:hidden;width:100%">
                      <div class="flex flex-col" data-panel="" data-panel-collapsible="true" data-panel-id="systemPromptPanel" data-panel-size="25.0" id="data-panel-id-systemPromptPanel" style="flex-basis:0;flex-grow:25;flex-shrink:1;overflow:hidden">
                        <div class="group flex flex-1 flex-col gap-4">
                          <div class="relative flex flex-1 flex-col gap-4 bg-background group-hover:bg-shallow ">
                            <div class="absolute left-0 top-0 right-0 h-12 bg-background group-hover:bg-shallow"></div>
                            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute left-6 top-7 text-xs uppercase" for="systemMessage">SYSTEM</label>
                            <textarea class="flex min-h-[80px] w-full border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-0 focus-visible:border-none focus-visible:ring-2 focus-visible:ring-ring flex-1 resize-none rounded-none border-0 pl-6 pt-[60px] text-base hover:bg-shallow focus:bg-background focus:ring group-hover:bg-shallow" placeholder="Enter a system message" id="systemMessage"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]&gt;div]:rotate-90 hover:bg-primary" data-panel-group-direction="vertical" data-panel-group-id=":R1dvffelspla:" data-panel-resize-handle-enabled="true" data-panel-resize-handle-id=":R2ddvffelspla:" role="separator" style="cursor:ns-resize;touch-action:none;user-select:none" tabindex="0"></div>
                      <div class="flex flex-col" data-panel="" data-panel-id="chatMessagesPanel" data-panel-size="75.0" id="data-panel-id-chatMessagesPanel" style="flex-basis:0;flex-grow:75;flex-shrink:1;overflow:hidden">
                        <div class="relative w-full flex-1">
                          <div class="absolute inset-0">
                            <div class="h-full overflow-auto">
                              <div class="group" data-row-key="message_first">
                                <div class="flex w-full flex-col content-start lg:flex-row lg:hover:bg-shallow">
                                  <div class="flex justify-between p-2 lg:p-4">
                                    <button class="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-xs uppercase lg:min-w-[100px] lg:px-4 lg:py-2 lg:hover:bg-accent lg:group-hover:bg-accent">user</button>
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 ml-2 px-2 lg:h-10 lg:px-4 lg:hidden" title="Delete message (press &#x27;-&#x27;)">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-circle ">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M8 12h8"></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="flex flex-1 cursor-text items-center p-1 lg:items-start lg:p-4">
                                    <textarea class="flex w-full border border-input placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-0 focus-visible:border-none focus-visible:ring-ring min-h-[36px] flex-1 resize-none rounded-none border-none bg-inherit px-3 py-2 text-base focus:bg-background lg:rounded-md lg:px-4 lg:py-2 focus-visible:ring-0 lg:focus-visible:ring-2" id="message_input_first" rows="1" autofocus="" placeholder="Explain the importance of fast language models"></textarea>
                                    <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 hidden group/btn ml-2 px-2 lg:h-10 lg:px-4 lg:inline-flex" title="Delete message (press &#x27;-&#x27;)">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-circle invisible group-hover:visible group-focus/btn:visible">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M8 12h8"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                              </div>
                              <button class="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 group mr-auto flex w-full flex-row items-center justify-start gap-2 rounded-none py-7 hover:bg-shallow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle mr-2">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M8 12h8"></path>
                                  <path d="M12 8v8"></path>
                                </svg>
                                <p class="flex items-center gap-3">New Message</p>
                                <div class="invisible pl-2 text-xs italic opacity-30 group-hover:lg:visible">(Or Press + Key)</div>
                              </button>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="shrink-0 border-b border-gray-700 h-[1px] w-full"></div>
                        <div class="p-1 relative lg:mt-2 flex justify-between items-center gap-5 lg:p-2 lg:px-6 lg:pb-5">
                          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-100 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 invisible">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash ">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                          <div class="flex gap-3">
                            <div class="flex gap-3" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R69ldvffelspla:" data-state="closed">
                              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code ">
                                  <polyline points="16 18 22 12 16 6"></polyline>
                                  <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                              </button>
                              <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden md:inline-block">View code</button>
                            </div>
                            <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-gray-600 dark:hover:bg-slate-200 h-10 px-4 py-2 flex gap-3 text-primary-foreground">
                              <div>Submit</div>
                              <div class="hidden md:flex gap-1 font-xs opacity-50 items-center">
                                Ctrl
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus ">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-down-left ">
                                  <polyline points="9 10 4 15 9 20"></polyline>
                                  <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-1 hidden md:flex">
                    <div class="flex h-full w-full data-[panel-group-direction=vertical]:flex-col flex-1" data-panel-group="" data-panel-group-direction="horizontal" data-panel-group-id=":R2dvffelspla:" data-panel-group-units="percentages" style="display:flex;flex-direction:row;height:100%;overflow:hidden;width:100%">
                      <div class="flex flex-col" data-panel="" data-panel-collapsible="true" data-panel-id="systemPromptPanel" data-panel-size="25.0" id="data-panel-id-systemPromptPanel" style="flex-basis:0;flex-grow:25;flex-shrink:1;overflow:hidden">
                        <div class="group flex flex-1 flex-col gap-4">
                          <div class="relative flex flex-1 flex-col gap-4 bg-background group-hover:bg-shallow ">
                            <div class="absolute left-0 top-0 right-0 h-12 bg-background group-hover:bg-shallow"></div>
                            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute left-6 top-7 text-xs uppercase text-white" for="systemMessage">СИСТЕМА</label>
                            <textarea v-model="systemRole.content" class="flex text-white min-h-[80px] w-full border-input bg-background bg-fx-main px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-0 focus-visible:border-none focus-visible:ring-2 focus-visible:ring-ring flex-1 resize-none rounded-none border-0 pl-6 pt-[60px] text-base hover:bg-[#262626] focus:bg-background focus:ring group-hover:bg-shallow" placeholder="Введите системное сообщение" id="systemMessage"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="relative flex w-px items-center justify-center bg-border border-b bg-gray-700 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]&gt;div]:rotate-90 hover:bg-primary" data-panel-group-direction="horizontal" data-panel-group-id=":R2dvffelspla:" data-panel-resize-handle-enabled="true" data-panel-resize-handle-id=":R2edvffelspla:" role="separator" style="cursor:ew-resize;touch-action:none;user-select:none" tabindex="0"></div>
                      <div class="flex flex-col" data-panel="" data-panel-id="chatMessagesPanel" data-panel-size="75.0" id="data-panel-id-chatMessagesPanel" style="flex-basis:0;flex-grow:75;flex-shrink:1;overflow:hidden">
                        <div class="relative w-full flex-1">
                          <div class="absolute inset-0">
                            <div class="h-full overflow-auto text-white">
                              <div v-for="(message, index) in messages" :key="index" class="group" :data-row-key="'message_' + index">
                                <div class="flex w-full flex-col content-start lg:flex-row lg:hover:bg-[#262626]">
                                  <div class="flex justify-between p-2 lg:p-4">
                                    <button @click="toggleRole(index)" class="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-fx-sidebar hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-xs uppercase lg:min-w-[100px] lg:px-4 lg:py-2 lg:hover:bg-accent lg:group-hover:bg-accent"

                                            :title="'Нажми, чтобы переключиться на ' + getRoleDisplay(message.role)">
                                      {{ message.role }}
                                    </button>
                                  </div>
                                  <div class="flex flex-1 cursor-text items-center p-1 lg:items-start lg:p-4">
                                    <textarea class="flex w-full border border-input placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-0 focus-visible:border-none focus-visible:ring-ring min-h-fit flex-1 resize-none rounded-none border-none bg-inherit px-3 py-2 text-base focus:bg-background lg:rounded-md lg:px-4 lg:py-2 focus-visible:ring-0 lg:focus-visible:ring-2" :id="'message_input_' + index"  :placeholder="message.role === 'user' ? 'Введите сообщение пользователя' : 'Введите сообщение помощника'" style="height: 40px;" v-model="message.content">

                                    </textarea>
                                    <button  @click="removeMessage(index)" class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 hidden group/btn ml-2 px-2 lg:h-10 lg:px-4 lg:inline-flex" title="Delete message (press '-')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-circle invisible group-hover:visible group-focus/btn:visible"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg></button>
                                  </div>
                                </div>
                                <div data-orientation="horizontal" role="none" class="shrink-0 border-b border-gray-700 h-[1px] w-full"></div>
                              </div>

                              <div>
                                <div v-if="responseError.error" class="bg-red-50  p-3 dark:bg-red-800/30" role="alert">
                                  <div class="flex">
                                    <div class="ms-3">
                                      <h3 class="text-gray-800 font-semibold dark:text-white">
                                        Ошибка
                                      </h3>
                                      <p class="text-sm text-gray-700 dark:text-neutral-400">
                                        {{ responseError.error_message }}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <button @click="addMessage" class="whitespace-nowrap text-sm font-medium lg:hover:bg-[#262626] ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 group mr-auto flex w-full flex-row items-center justify-start gap-2 rounded-none py-7 hover:bg-shallow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle mr-2">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M8 12h8"></path>
                                  <path d="M12 8v8"></path>
                                </svg>
                                <p class="flex items-center gap-3">Новое сообщение</p>
                                <div class="invisible pl-2 text-xs italic opacity-30 group-hover:lg:visible">
                                  (Или <strong>+</strong> новое сообщение пользователя)
                                  <br>
                                  (Или <strong>Alt + A</strong> новое сообщение помощника)
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="border-b border-gray-700  w-full"></div>
                        <div class="p-1 relative lg:mt-2 flex justify-between items-center gap-5 lg:p-2 lg:px-6 lg:pb-5">

                          <div>
                            <div v-if="messages && messages.length > 0">
                              <button @click="removeAllMessages" class="text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash">
                                  <path d="M3 6h18"></path>
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div v-if="responseStats">
                            <a class=" hover:text-primaryaccent text-gray-400 opacity-50 hover:opacity-100">
                              <div class="mr-8 flex flex-col  italic  lg:flex-row ">
                                <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 self-center text-[12px] lg:text-xs">Inference time: {{responseStats.total_time}}</label>
                                <div class="hidden px-2 lg:flex justify-center items-centerimpl">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                                </div>
                                <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 self-center text-[12px] lg:text-xs">Tokens: {{responseStats.total_tokens}}</label>
                              </div>
                            </a>
                          </div>
                          <!-- Response stats -->

                          <div class="flex gap-3">
                            <div class="flex gap-3" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R69mdvffelspla:" data-state="closed">
                              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code ">
                                  <polyline points="16 18 22 12 16 6"></polyline>
                                  <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                              </button>

                              <ViewCodeModal :data="payload"/>

                            </div>
<!--                            <button @click="sendRequestPost" class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-gray-600 dark:hover:bg-slate-200 h-10 px-4 py-2 flex gap-3 text-primary-foreground">
                              Отправить
                            </button>-->
                            <div>
                              <button v-if="!isLoading" :disabled="isLoading" @click="sendRequestPost" class="h-10 px-4 py-2 flex gap-3 items-center justify-center text-white bg-white whitespace-nowrap rounded-md text-sm font-medium px-4  text-center dark:bg-green-500 dark:hover:bg-green-400" type="button">
                                Run
                                <kbd class="px-1 py-1.5 text-xs font-semibold text-white bg-green-500 border border-bg-green-500 rounded-lg dark:bg-green-500 dark:text-gray-100 dark:border-white">
                                  Ctrl ↵
                                </kbd>
                              </button>
                              <button v-else disabled class="h-10 py-2 flex gap-3 items-center justify-center text-white bg-white whitespace-nowrap rounded-md text-sm font-medium px-4  text-center dark:bg-green-500 disabled:bg-green-800" type="button" style="cursor: not-allowed">
                                Run

                                <VueSpinner size="20" color="white" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:Rvffelspla:-trigger-speech" hidden="" id="radix-:Rvffelspla:-content-speech" tabindex="0" class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"></div>
                <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:Rvffelspla:-trigger-image" hidden="" id="radix-:Rvffelspla:-content-image" tabindex="0" class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>

  </div>
</template>

<style scoped>
:deep(.p-select .p-select-label) {
  background-color: rgb(23,23,23);
}

:deep(.p-select .p-select-dropdown) {
  background-color: rgb(23,23,23);
}
</style>
