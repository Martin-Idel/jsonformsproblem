<template>
  <v-app id="inspire">
    <v-navigation-drawer app :permanent="true">
      <v-sheet class="bg-grey-lighten-4 pa-4 text-center"> My tool </v-sheet>
    </v-navigation-drawer>
    <v-main>
      <v-container :fluid="true">
        <my-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import MyView from "@/views/MyView.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
</style>
