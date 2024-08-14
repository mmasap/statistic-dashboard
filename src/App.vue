<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <v-app>
    <v-container>
      <the-header></the-header>
      <v-main>
        <router-view :key="route.path" />
      </v-main>
    </v-container>
  </v-app>
</template>

<style scoped></style>
