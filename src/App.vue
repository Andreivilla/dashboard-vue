<template>
  <div class="container">
    <SideBar />
    <main class="content">
      <NameDashBoard/>
    </main>
  </div>
</template>

<script setup>
  import SideBar from './components/SideBar.vue';
  import NameDashBoard from './components/NameDashBoard.vue';
</script>

<style>
  body {
    margin: 0;
    background: var(--bg-main-color);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 16px; /* Espaço entre sidebar e conteúdo */
    padding: 16px;
    box-sizing: border-box;
  }

  .content {
    flex: 1;
  }
</style>
