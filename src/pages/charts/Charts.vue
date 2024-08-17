<script setup lang="ts">
import BarChartCard from '@/components/charts/BarChartCard.vue'
import LineChartCard from '@/components/charts/LineChartCard.vue'
import SelectPrefecture from '@/components/charts/SelectPrefecture.vue'
import chartInfoList from '@/data/chartInfo'
import { type Region, regions } from '@/data/regionInfo'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const defaultRegion = regions[0]
const selectedRegion = ref<Region>(defaultRegion)

const props = defineProps<{
  regionCode?: string
}>()

onBeforeMount(() => {
  if (props.regionCode === undefined) {
    selectedRegion.value = defaultRegion
    return
  }
  const region = regions.find((region) => region.code === props.regionCode)
  if (region) {
    selectedRegion.value = region
  } else {
    router.replace('/charts')
  }
})
</script>

<template>
  <select-prefecture :regionName="selectedRegion.name"></select-prefecture>
  <v-container>
    <v-row>
      <v-col sm="6" md="4" v-for="chartInfo in chartInfoList">
        <bar-chart-card
          v-if="chartInfo.chartType === 'bar'"
          :label="chartInfo.label"
          :regionCode="selectedRegion.code"
          :indicatorCode="chartInfo.indicatorCode"
        ></bar-chart-card>
        <line-chart-card
          v-if="chartInfo.chartType === 'line'"
          :label="chartInfo.label"
          :regionCode="selectedRegion.code"
          :indicatorCode="chartInfo.indicatorCode"
        ></line-chart-card>
      </v-col>
    </v-row>
  </v-container>
</template>
