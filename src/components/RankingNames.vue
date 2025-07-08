<template>
  <div class="ranking-container">
    <ul>
      <li v-for="item in data[0].res" :key="item.ranking">
        <strong>{{ item.ranking }}</strong>  {{ item.nome }} {{ item.frequencia.toLocaleString('pt-BR') }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  defineProps({
    data: {
      type: Array,
      required: true
    }
  })
</script>

<style scoped>
  li {
    font-family: var(--primary-font-family);
    font-weight: 500; 
    font-size: 14px;
  }
  .ranking-container ul {
    list-style: none;
    padding: 0;
    max-height: 500px;
    overflow-y: auto;  
  }

  .ranking-container h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  .ranking-container ul {
    list-style: none;
    padding: 0;
  }
  .ranking-container li {
    padding: 0.5rem 0;
    
    color: var(--primary-color);
  }
</style>
