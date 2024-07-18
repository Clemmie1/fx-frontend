<script setup>

</script>

<template>
  <div class="flex h-svh flex-1 flex-col lg:flex-row">



    <main class="mx-auto flex w-full flex-1 flex-col overflow-auto">
      <div data-thing="console-layout-root" class="flex flex-1 flex-col">
        <div class="flex flex-1 flex-col lg:h-screen">
          <div class="flex items-center justify-between pr-6">
            <h2 class="p-4 pl-[24px] text-2xl font-medium">Playground</h2>
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
              <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden lg:flex" title="Hide System Prompt (⌘ + [)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right rotate-180">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M15 3v18"></path>
                </svg>
              </button>
              <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden lg:block" title="Hide System Prompt (⌘ + ]) hihihihi">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right ">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M15 3v18"></path>
                </svg>
              </button>
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
          <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
          <div dir="ltr" data-orientation="horizontal" class="flex-1">
            <div class="grid h-full items-stretch lg:grid-cols-[1fr_250px]">
              <div class="hidden flex-col space-y-4 border-l border-l-border md:order-2 lg:flex">
                <div class="grid gap-2">
                  <div data-state="closed"></div>
                </div>
                <div class="space-y-8">
                  <div class="px-6 space-y-8">
                    <div class="grid gap-2">
                      <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="model" data-state="closed">Model</label>
                        <button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-between" role="combobox" aria-expanded="false" aria-label="Select a model" type="button" aria-haspopup="dialog" aria-controls="radix-:R15jvffelspla:" data-state="closed">
                          llama3-8b-8192
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 h-4 w-4 shrink-0 opacity-50">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-8">
                    <div class="px-6 space-y-8">
                      <div class="grid gap-2 pt-2">
                        <div class="flex flex-col gap-2" data-state="closed">
                          <div class="flex items-center justify-between"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize" for="input-temperature">temperature</label><input class="flex h-10 bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:border-ring ml-auto w-16 rounded-md border px-2 py-0.5 text-right text-sm text-muted-foreground border-border" id="input-temperature" value="1"/></div>
                          <span dir="ltr" data-orientation="horizontal" aria-disabled="false" class="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4" id="slider-temperature" aria-label="temperature" style="--radix-slider-thumb-transform:translateX(-50%)"><span data-orientation="horizontal" class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"><span data-orientation="horizontal" class="absolute h-full bg-gray-300 dark:bg-gray-500" style="left:0%;right:50%"></span></span><span style="transform:var(--radix-slider-thumb-transform);position:absolute;left:calc(0% + 0px)"><span role="slider" aria-valuemin="0" aria-valuemax="2" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-gray-300 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" style="display:none" data-radix-collection-item=""></span></span></span><input style="display:none" value="1"/>
                        </div>
                      </div>
                      <div class="grid gap-2 pt-2">
                        <div class="flex flex-col gap-2" data-state="closed">
                          <div class="flex items-center justify-between"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize" for="input-max tokens">max tokens</label><input class="flex h-10 bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:border-ring ml-auto w-16 rounded-md border px-2 py-0.5 text-right text-sm text-muted-foreground border-border" id="input-max tokens" value="1024"/></div>
                          <span dir="ltr" data-orientation="horizontal" aria-disabled="false" class="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4" id="slider-max tokens" aria-label="max tokens" style="--radix-slider-thumb-transform:translateX(-50%)"><span data-orientation="horizontal" class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"><span data-orientation="horizontal" class="absolute h-full bg-gray-300 dark:bg-gray-500" style="left:0%;right:50%"></span></span><span style="transform:var(--radix-slider-thumb-transform);position:absolute;left:calc(0% + 0px)"><span role="slider" aria-valuemin="0" aria-valuemax="2048" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-gray-300 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" style="display:none" data-radix-collection-item=""></span></span></span><input style="display:none" value="1024"/>
                        </div>
                      </div>
                      <div>
                        <div class="flex items-center justify-between" data-state="closed"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="toggle-Stream">Stream</label><button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" id="toggle-Stream"><span data-state="checked" class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"></span></button><input type="checkbox" aria-hidden="true" style="transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0" tabindex="-1" checked="" value="on"/></div>
                      </div>
                      <div>
                        <div class="flex items-center justify-between" data-state="closed"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="toggle-JSON Mode">JSON Mode</label><button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" id="toggle-JSON Mode"><span data-state="unchecked" class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"></span></button><input type="checkbox" aria-hidden="true" style="transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0" tabindex="-1" value="on"/></div>
                      </div>
                      <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                    </div>
                    <div class="w-full" data-orientation="vertical">
                      <div data-state="closed" data-orientation="vertical" class="border-b-0">
                        <h3 data-orientation="vertical" data-state="closed" class="flex">
                          <button type="button" aria-controls="radix-:Rqjvffelspla:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:Rajvffelspla:" class="flex flex-1 items-center transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-sm font-medium border-b-primaryaccent hover:bg-secondary hover:no-underline rounded-xl p-2 mx-4" data-radix-collection-item="">
                            Advanced
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ml-auto">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </h3>
                        <div data-state="closed" id="radix-:Rqjvffelspla:" hidden="" role="region" aria-labelledby="radix-:Rajvffelspla:" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height:var(--radix-collapsible-content-height);--radix-accordion-content-width:var(--radix-collapsible-content-width)"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-1 flex flex-col">
                <div class="mt-0 flex flex-1 flex-col p-0">
                  <div class="flex flex-1 flex md:hidden">
                    <div class="flex h-full w-full data-[panel-group-direction=vertical]:flex-col flex-1" data-panel-group="" data-panel-group-direction="vertical" data-panel-group-id=":R1dvffelspla:" data-panel-group-units="percentages" style="display:flex;flex-direction:column;height:100%;overflow:hidden;width:100%">
                      <div class="flex flex-col" data-panel="" data-panel-collapsible="true" data-panel-id="systemPromptPanel" data-panel-size="25.0" id="data-panel-id-systemPromptPanel" style="flex-basis:0;flex-grow:25;flex-shrink:1;overflow:hidden">
                        <div class="group flex flex-1 flex-col gap-4">
                          <div class="relative flex flex-1 flex-col gap-4 bg-background group-hover:bg-shallow ">
                            <div class="absolute left-0 top-0 right-0 h-12 bg-background group-hover:bg-shallow"></div>
                            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute left-6 top-7 text-xs uppercase" for="systemMessage">System</label>
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
                        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                        <div class="p-1 relative lg:mt-2 flex justify-between items-center gap-5 lg:p-2 lg:px-6 lg:pb-5">
                          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 invisible">
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
                            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute left-6 top-7 text-xs uppercase" for="systemMessage">System</label>
                            <textarea class="flex min-h-[80px] w-full border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-0 focus-visible:border-none focus-visible:ring-2 focus-visible:ring-ring flex-1 resize-none rounded-none border-0 pl-6 pt-[60px] text-base hover:bg-shallow focus:bg-background focus:ring group-hover:bg-shallow" placeholder="Enter a system message" id="systemMessage"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&amp;[data-panel-group-direction=vertical]&gt;div]:rotate-90 hover:bg-primary" data-panel-group-direction="horizontal" data-panel-group-id=":R2dvffelspla:" data-panel-resize-handle-enabled="true" data-panel-resize-handle-id=":R2edvffelspla:" role="separator" style="cursor:ew-resize;touch-action:none;user-select:none" tabindex="0"></div>
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
                        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                        <div class="p-1 relative lg:mt-2 flex justify-between items-center gap-5 lg:p-2 lg:px-6 lg:pb-5">
                          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input dark:border-gray-500 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 invisible">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash ">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                          <div class="flex gap-3">
                            <div class="flex gap-3" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R69mdvffelspla:" data-state="closed">
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

</style>