<template>
  <ChipionaWeatherComponent :api="{baseUrl: apiUrl, path: apiPath}" />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ChipionaWeatherComponent from './components/ChipionaWeatherComponent.vue';

export default defineComponent({
  components: {
    ChipionaWeatherComponent,
  },

  setup() {
    const apiUrl = process.env.VUE_APP_API_URL ?? 'http://localhost:8000';
    const apiPath = process.env.VUE_APP_API_PATH ?? 'api/weatherstation/v1/resume';

    console.log(process.env.API_URL);

    return {
      apiUrl: apiUrl,
      apiPath: apiPath
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
