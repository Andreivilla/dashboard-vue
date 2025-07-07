<template>
  <section class="bargraph-outer-section">
    <div
      v-for="(item, index) in data[0]?.res"
      :key="index"
      class="bar-graph-inner">
      <div class="bar-graph">
        <div
          class="bar-graph-fill"
          :style="{
            height: parseFloat(item.porcentagem) + '%',
            //backgroundColor: 'grey'
          }"
        ></div>
      </div>
      <div>
        <p>{{ item.frequencia }}</p>
        <p>{{ formatPeriodo( item.periodo) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    data: {
      type: Array,
      required: true
    }
  })

  function formatPeriodo(periodo) {
    return periodo
      .replace('[', '')
      .replace('[', '')
      .replace(']', '')
      .replace(',', ' - ')
  }
</script>

<style scoped>
  p {
    font-size: 16px;
    color: var(--primary-color);
  }

  .bar-graph-fill {
    background: var(--primary-color);
  }

  .bargraph-outer-section {
    padding: 10px;
    display: inline-block;
  }

  .bar-graph-inner {
    display: inline-block;
    padding: 0 15px;
    text-align: center;
  }

.bar-graph {
  width: 100%;
  height: 100px;
  background: var(--bg-secondary-color);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center; 
}

.bar-graph-fill {
  width: 20px; 
  background: var(--primary-gradient);
}

</style>
