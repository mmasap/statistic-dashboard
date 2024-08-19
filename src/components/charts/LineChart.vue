<script setup lang="ts">
import {
  CategoryScale,
  type ChartData,
  Chart as ChartJS,
  type ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line as LineChart } from 'vue-chartjs'

const props = defineProps<{
  options: ChartOptions<'line'>
  data: ChartData<'line'>
}>()

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
</script>

<template>
  <line-chart :options="props.options" :data="props.data" />
</template>
