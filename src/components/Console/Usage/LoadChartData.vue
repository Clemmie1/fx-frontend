<script setup>
import {useStore} from 'vuex';
import VueApexCharts from 'vue3-apexcharts';
import {onMounted, ref} from 'vue';
import axios from 'axios';

const store = useStore();
const token = store.getters.getToken;

const chartOptionsLlamaRequests = ref({
  colors: ["#1A56DB", "#FDBA8C"],
  series: [],
  chart: {
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsLlamaTokens = ref({
  colors: ["#1A56DB", "#FDBA8C"],
  series: [],
  chart: {
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsGemmaRequests = ref({
  colors: ["#1A56DB", "#FDBA8C"],
  series: [],
  chart: {
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsGemmaTokens = ref({
  colors: ["#1A56DB", "#FDBA8C"],
  series: [],
  chart: {
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
});

const dataCharts = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.post(
        'https://api.factox.net/v1/user/usage',
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    );

    if (response.status === 200) {
      dataCharts.value = response.data;
      updateChartOptions();
    }

  } catch (error) {
    console.error("Error fetching data", error);
  }
};

const updateChartOptions = () => {
  if (!dataCharts.value) return;

  const llamaData = dataCharts.value['llama3-8b-8192'];
  const gemmaData = dataCharts.value['gemma2-9b-it'];

  // Update charts for llama3-8b-8192
  chartOptionsLlamaRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: llamaData.charts_request.series.data
    }
  ];
  chartOptionsLlamaTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: llamaData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: llamaData.charts_input_and_output_tokens.series[1].data
    }
  ];

  // Update charts for gemma2-9b-it
  chartOptionsGemmaRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: gemmaData.charts_request.series.data
    }
  ];
  chartOptionsGemmaTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: gemmaData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: gemmaData.charts_input_and_output_tokens.series[1].data
    }
  ];
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <!-- llama3-8b-8192 Запросы -->
    <div class="space-y-5">
      <h3 class="font-semibold tracking-tight mt-4 text-xl text-white">llama3-8b-8192</h3>
      <div class="grid lg:grid-cols-2 gap-2">
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Запросы</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsLlamaRequests"
                                 :series="chartOptionsLlamaRequests.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Токены</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsLlamaTokens"
                                 :series="chartOptionsLlamaTokens.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- gemma2-9b-it Запросы -->
    <div class="space-y-5">
      <h3 class="font-semibold tracking-tight mt-4 text-xl text-white">gemma2-9b-it</h3>
      <div class="grid lg:grid-cols-2 gap-2">
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Запросы</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsGemmaRequests"
                                 :series="chartOptionsGemmaRequests.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Токены</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsGemmaTokens"
                                 :series="chartOptionsGemmaTokens.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
