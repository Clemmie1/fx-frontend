<script setup>
import {useStore} from 'vuex';
import VueApexCharts from 'vue3-apexcharts';
import {onMounted, ref} from 'vue';
import axios from 'axios';

const store = useStore();
const token = store.getters.getToken;

const chartOptionsLlama38bRequests = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});
const chartOptionsLlama38bTokens = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsLlama370bRequests = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});
const chartOptionsLlama370bTokens = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsGemma7bRequests = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});
const chartOptionsGemma7bTokens = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsGemma29bRequests = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});
const chartOptionsGemma29bTokens = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});

const chartOptionsMixtral8x7bRequests = ref({
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
    show: true,
  },
  fill: {
    opacity: 1,
  },
});
const chartOptionsMixtral8x7bTokens = ref({
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
    show: true,
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

  const llama38bData = dataCharts.value['llama3-8b-8192'];
  chartOptionsLlama38bRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: llama38bData.charts_request.series.data
    }
  ];
  chartOptionsLlama38bTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: llama38bData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: llama38bData.charts_input_and_output_tokens.series[1].data
    }
  ];

  const llama370bData = dataCharts.value['llama3-70b-8192'];
  chartOptionsLlama370bRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: llama370bData.charts_request.series.data
    }
  ];
  chartOptionsLlama370bTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: llama370bData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: llama370bData.charts_input_and_output_tokens.series[1].data
    }
  ];

  const gemma7bData = dataCharts.value['gemma-7b-it'];
  chartOptionsGemma7bRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: gemma7bData.charts_request.series.data
    }
  ];
  chartOptionsGemma7bTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: gemma7bData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: gemma7bData.charts_input_and_output_tokens.series[1].data
    }
  ];

  const gemma29bData = dataCharts.value['gemma2-9b-it'];
  chartOptionsGemma29bRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: gemma29bData.charts_request.series.data
    }
  ];
  chartOptionsGemma29bTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: gemma29bData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: gemma29bData.charts_input_and_output_tokens.series[1].data
    }
  ];

  const mixtral8x7bData = dataCharts.value['mixtral-8x7b-32768'];
  chartOptionsMixtral8x7bRequests.value.series = [
    {
      name: "Запросы",
      color: "#4ECC7C",
      data: mixtral8x7bData.charts_request.series.data
    }
  ];
  chartOptionsMixtral8x7bTokens.value.series = [
    {
      name: "Входные токены",
      color: "#80FFAE",
      data: mixtral8x7bData.charts_input_and_output_tokens.series[0].data
    },
    {
      name: "Выходные токены",
      color: "#4ECC7C",
      data: mixtral8x7bData.charts_input_and_output_tokens.series[1].data
    }
  ];

};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>

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
                <vue-apex-charts type="bar" :options="chartOptionsLlama38bRequests"
                                 :series="chartOptionsLlama38bRequests.series"></vue-apex-charts>
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
                <vue-apex-charts type="bar" :options="chartOptionsLlama38bTokens"
                                 :series="chartOptionsLlama38bTokens.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-5">
      <h3 class="font-semibold tracking-tight mt-4 text-xl text-white">llama3-70b-8192</h3>
      <div class="grid lg:grid-cols-2 gap-2">
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Запросы</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsLlama370bRequests"
                                 :series="chartOptionsLlama370bRequests.series"></vue-apex-charts>
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
                <vue-apex-charts type="bar" :options="chartOptionsLlama370bTokens"
                                 :series="chartOptionsLlama370bTokens.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-5">
      <h3 class="font-semibold tracking-tight mt-4 text-xl text-white">gemma-7b-it</h3>
      <div class="grid lg:grid-cols-2 gap-2">
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Запросы</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsGemma7bRequests"
                                 :series="chartOptionsGemma7bRequests.series"></vue-apex-charts>
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
                <vue-apex-charts type="bar" :options="chartOptionsGemma7bTokens"
                                 :series="chartOptionsGemma7bTokens.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                <vue-apex-charts type="bar" :options="chartOptionsGemma29bRequests"
                                 :series="chartOptionsGemma29bRequests.series"></vue-apex-charts>
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
                <vue-apex-charts type="bar" :options="chartOptionsGemma29bTokens"
                                 :series="chartOptionsGemma29bTokens.series"></vue-apex-charts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-5">
      <h3 class="font-semibold tracking-tight mt-4 text-xl text-white">mixtral-8x7b-32768</h3>
      <div class="grid lg:grid-cols-2 gap-2">
        <div>
          <div class="min-h-[350px]">
            <div class="rounded-lg border border-gray-700 bg-card text-card-foreground shadow-sm col-span-4">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold tracking-tight text-lg text-white">Запросы</h3>
              </div>
              <div>
                <vue-apex-charts type="bar" :options="chartOptionsMixtral8x7bRequests"
                                 :series="chartOptionsMixtral8x7bRequests.series"></vue-apex-charts>
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
                <vue-apex-charts type="bar" :options="chartOptionsMixtral8x7bTokens"
                                 :series="chartOptionsMixtral8x7bTokens.series"></vue-apex-charts>
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
