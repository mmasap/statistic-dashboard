<script lang="ts" setup>
import { getChartData } from '@/utils/api'
import type { ChartData, ChartOptions } from 'chart.js'
import { type Ref, onMounted, ref } from 'vue'
import { Bar as BarChart } from 'vue-chartjs'

const props = defineProps<{
  label: string
  regionCode?: string
  indicatorCode: string
}>()
const chartData: Ref<ChartData<'bar'> | undefined> = ref()
const options: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
}

onMounted(async () => {
  chartData.value = await getChartData({
    IndicatorCode: props.indicatorCode,
    RegionCode: props.regionCode ?? '00000',
    Cycle: '3',
  })
})
</script>

<template>
  <v-card v-if="chartData">
    <v-card-title>{{ props.label }}</v-card-title>
    <v-card-text>
      <bar-chart :data="chartData" :options="options"></bar-chart>
    </v-card-text>
  </v-card>
</template>
