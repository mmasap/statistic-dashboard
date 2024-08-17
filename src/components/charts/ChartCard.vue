<script lang="ts" setup>
import type { ChartInfo } from '@/data/chartInfo'
import { getData } from '@/utils/api'
import type { ChartData, ChartOptions } from 'chart.js'
import { onMounted, onUnmounted, ref } from 'vue'
import { Bar as BarChart, Line as LineChart } from 'vue-chartjs'

const props = defineProps<{
  regionCode: string
  chartInfo: ChartInfo
}>()
const barChartData = ref<ChartData<'bar'>>()
const lineChartData = ref<ChartData<'line'>>()
const chartWidth = ref(0)
const loading = ref(false)
const cardRef = ref<HTMLDivElement>()
const title = `${props.chartInfo.label}(${props.chartInfo.unit})`
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: false,
} satisfies ChartOptions

onMounted(async () => {
  updateChartWidth()
  window.addEventListener('resize', updateChartWidth)
  getChartData()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateChartWidth)
})

function updateChartWidth() {
  chartWidth.value = cardRef.value?.clientWidth ?? 0
}

async function getChartData() {
  loading.value = true
  const chartData = await getData({
    indicatorCode: props.chartInfo.indicatorCode,
    regionCode: props.regionCode,
  })
  if (props.chartInfo.chartType === 'bar') {
    barChartData.value = chartData
  } else if (props.chartInfo.chartType === 'line') {
    lineChartData.value = chartData
  }
  loading.value = false
}
</script>

<template>
  <v-card :key="chartWidth">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div ref="cardRef" :style="{ height: `${chartWidth * 0.5}px` }">
        <div class="d-flex justify-center align-center h-100">
          <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
          <bar-chart v-else-if="barChartData" :data="barChartData" :options="options"></bar-chart>
          <line-chart
            v-else-if="lineChartData"
            :data="lineChartData"
            :options="options"
          ></line-chart>
          <div v-else>No data</div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
