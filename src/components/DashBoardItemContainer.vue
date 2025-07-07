<template>
  <div class="DashBoardContainer">
    <div class="name-container">
      <h2>{{ windowName }}</h2>
    </div>
    <div class="content-container">
      <component :is="childComponent" v-bind="childProps" />
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    childComponent: {
      type: Object,
      required: true
    },
    windowName: {
      type: String,
      required: true
    },
    childProps: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  h2 {
    color: var(--primary-color);
  }

  .DashBoardContainer {
    border-radius: 8px;
    background: var(--bg-secondary-color);
    box-shadow: var(--box-shadow);
    padding: 8px;
    margin: 12px;

  } 
  .name-container {
    background: var(--bg-secondary-color);
    box-shadow: var(--box-shadow);
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 18px;
  }
  
</style>