<script lang="ts" setup>
import { areas, regions } from '@/data/regionInfo'
import { onBeforeMount, ref } from 'vue'

const props = defineProps<{
  regionCode: string
}>()

const dialog = ref(false)
const selectedRegion = ref<(typeof regions)[number]>(regions[0])

onBeforeMount(() => {
  const region = regions.find((region) => region.code === props.regionCode)
  if (region) {
    selectedRegion.value = region
  } else {
    throw new Error('Invalid region code')
  }
})
</script>

<template>
  <v-card max-width="400" width="100%">
    <v-card-item>
      <v-row align="center" justify="center">
        <v-col cols="5" class="font-weight-bold">都道府県選択</v-col>
        <v-col>{{ selectedRegion.name }}</v-col>
        <v-col>
          <v-btn color="indigo" @click="dialog = true">変更</v-btn>
        </v-col>
      </v-row>
    </v-card-item>
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-title>都道府県選択</v-card-title>
        <v-list class="pa-0" lines="one">
          <v-list-item v-for="area in areas" :key="area">
            <v-list-item-title class="bg-grey-darken-2 pl-1">{{ area }}</v-list-item-title>
            <v-container>
              <v-row>
                <v-col
                  class="pa-1"
                  cols="4"
                  sm="2"
                  v-for="region in regions.filter((region) => region.area === area)"
                >
                  <router-link :to="`/charts/${region.code}`" @click="dialog = false">
                    {{ region.name }}
                  </router-link>
                </v-col>
              </v-row>
            </v-container>
          </v-list-item>
        </v-list>
        <template v-slot:actions>
          <v-btn @click="dialog = false" color="indigo" variant="flat">閉じる</v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-card>
</template>
