<script setup lang="ts">
import BarChartCard from '@/components/charts/BarChartCard.vue'
import LineChartCard from '@/components/charts/LineChartCard.vue'
import SelectPrefecture from '@/components/charts/SelectPrefecture.vue'
import chartInfoList from '@/data/chartInfo'
import { regions } from '@/data/regionInfo'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const regionCode = ref<string>(regions[0].code)

const props = defineProps<{
  regionCode?: string
}>()

onBeforeMount(() => {
  if (props.regionCode === undefined) {
    regionCode.value = regions[0].code
  } else if (regions.some((region) => region.code === props.regionCode)) {
    regionCode.value = props.regionCode
  } else {
    router.push('/charts')
  }
})
</script>

<template>
  <select-prefecture :region-code="regionCode"></select-prefecture>
  <v-container>
    <v-row>
      <v-col sm="6" md="4" v-for="chartInfo in chartInfoList">
        <bar-chart-card
          v-if="chartInfo.chartType === 'bar'"
          :region-code="regionCode"
          :label="chartInfo.label"
          :indicator-code="chartInfo.indicatorCode"
        ></bar-chart-card>
        <line-chart-card
          v-if="chartInfo.chartType === 'line'"
          :region-code="regionCode"
          :label="chartInfo.label"
          :indicator-code="chartInfo.indicatorCode"
        ></line-chart-card>
      </v-col>
    </v-row>
  </v-container>
</template>
