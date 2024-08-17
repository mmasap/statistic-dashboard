<script setup lang="ts">
import ChartCard from '@/components/charts/ChartCard.vue'
import SelectPrefecture from '@/components/charts/SelectPrefecture.vue'
import { chartInfoList } from '@/data/chartInfo'
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
  <v-container class="px-0">
    <v-row>
      <v-col sm="6" lg="4" v-for="chartInfo in chartInfoList">
        <chart-card :regionCode="selectedRegion.code" :chartInfo="chartInfo"></chart-card>
      </v-col>
    </v-row>
  </v-container>
</template>
