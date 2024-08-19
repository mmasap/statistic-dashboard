<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  type ChartData,
  Chart as ChartJS,
  type ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar as BarChart } from 'vue-chartjs'

const props = defineProps<{
  options: ChartOptions<'bar'>
  data: ChartData<'bar'>
}>()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<template>
  <bar-chart :options="props.options" :data="props.data" />
</template>
