<script lang="ts" setup>
import type { ChartInfo } from '@/data/chartInfo'
import useApi from '@/hooks/useApi'
import type { ChartData, ChartOptions } from 'chart.js'
import { onMounted, onUnmounted, ref } from 'vue'
import { Bar as BarChart, Line as LineChart } from 'vue-chartjs'

const props = defineProps<{
  regionCode: string
  chartInfo: ChartInfo
}>()
const barChartData = ref<ChartData<'bar'>>()
const lineChartData = ref<ChartData<'line'>>()
const chartHeight = ref(0)
const { getChartData, loading } = useApi()
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
  updateChartHeight()
  window.addEventListener('resize', updateChartHeight)
  updateChartData()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateChartHeight)
})

async function updateChartData() {
  const chartType = props.chartInfo.chartType
  const chartData = chartType === 'bar' ? barChartData : lineChartData
  chartData.value = await getChartData({
    indicatorCode: props.chartInfo.indicatorCode,
    regionCode: props.regionCode,
    maxDataCount: 20,
  })
}

function updateChartHeight() {
  const chartWidth = cardRef.value?.clientWidth ?? 0
  chartHeight.value = chartWidth / 2
}
</script>

<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div ref="cardRef" :style="{ height: `${chartHeight}px` }">
        <div class="d-flex justify-center align-center h-100">
          <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
          <bar-chart v-else-if="barChartData" :data="barChartData" :options="options"></bar-chart>
          <line-chart
            v-else-if="lineChartData"
            :data="lineChartData"
            :options="options"
          ></line-chart>
          <p v-else>No data</p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
