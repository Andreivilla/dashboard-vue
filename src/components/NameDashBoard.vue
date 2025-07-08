<template>
  <div class="name-container">
    <form action="" @submit.prevent="nameSubmit">
      <input v-model="name" type="text" placeholder="Digite seu nome" />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </form>

    <div class="top-dashboard">
      <DashBoardItemContainer 
        :childComponent="BrazilianMap" 
        windowName="Mapa" 
        class="map-container"
      />
      <div class="rankings-container">
        <DashBoardItemContainer v-if="resutRankingGeral"
          :childComponent="RankingNames" 
          windowName="Ranking geral" 
          class="ranking" 
          :childProps="{data:resutRankingGeral}"
        />
        <DashBoardItemContainer v-if="resutRankingSelect"
          :childComponent="RankingNames" 
          :windowName="`Ranking de nomes em ${selectStatename}`"
          class="ranking" 
          :childProps="{data:resutRankingSelect}"
        />
      </div>

    </div>

    <div class="bottom-dashboard">
      <div v-if="resultName">
        <DashBoardItemContainer 
          :childComponent="BarGraph" 
          windowName="Grafico histórico" 
          class="graph-container"
          :childProps="{ data:resultName }"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
  import { eventBus } from '@/eventBus'
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import BrazilianMap from './BrazilianMap.vue';
  import DashBoardItemContainer from './DashBoardItemContainer.vue';
  import BarGraph from './BarGraph.vue';
  import { getNameFreq, addPercentFreq, getNameRankingGeral, getNameRankingUF } from '@/services/ibgeService';
  import RankingNames from './RankingNames.vue';

  const name = ref('');
  const resultName = ref(null);//pode me apagar dps e tudo que envolve tem que passar direto pro graph
  const resutRankingGeral = ref(null);

  const selectState = ref(null);
  const selectStatename = ref(null);
  const resutRankingSelect = ref(null);

  async function getFreq() {
    try {
      const data = await getNameFreq(name.value);
      resultName.value = addPercentFreq(data); // <- salva os dados aqui
      return data;
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      return null;
    }
  }

  async function nameSubmit() {
    const resultName = await getFreq(); // <-- AQUI você espera o valor real
    console.log('ResultName final:', resultName);
  }

  async function getNameRankingGeralFront() {
    try{
      resutRankingGeral.value = await getNameRankingGeral();
    } catch (error){
      console.error('Erro ao buscar dado', error);
    }
  }

  async function getNameRankingStateFront() {
    try{
      resutRankingSelect.value = await getNameRankingUF(selectState.value.cod);
      console.log('ranking select:', resutRankingSelect)
    } catch (error){
      console.error('Erro ao buscar dado', error);
    }
  }
  
  onMounted(() =>{
    getNameRankingGeralFront();
    eventBus.on('estadoSelecionado', lidarComUF)
  })

  onBeforeUnmount(() => {
    eventBus.off('estadoSelecionado', lidarComUF)
  })

  function lidarComUF(uf) {
    selectState.value = uf;
    console.log('Outro componente recebeu o UF:', selectState.value.cod)
    console.log('Outro componente recebeu o name:', selectState.value.name)
    selectStatename.value = selectState.value.name;
    getNameRankingStateFront();
  }

</script>

<style scoped>
  .ranking {
    width: 200px;
  }

  .rankings-container {
    display: flex;
  }

  .name-container {
    display: flex;
    flex-direction: column;
  }

  .top-dashboard{
    display: flex;
    flex-direction: row;
  }

  .map-container {
    height: 560px;
    width: 500px;
    padding-bottom: 28px;
  }

  .graph-container {
    height: 100%;
    margin-bottom: 0;
  }

  form {
    display: flex;
    gap: 10px;
  }

  input {
    all: unset;
    padding: 8px;
    font-size: 16px;
    background-color: var(--bg-secondary-color);
    border-color: var(--bg-secondary-color);
    border-radius: 25px;
    color: var(--primary-color);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    width: 40%;
  }

  button {
    all: unset;
    border: none;
    cursor: pointer;  
  }
  button:hover {
    transform: translateY(-3px) scale(1.05);
  }

  svg {
    fill: var(--primary-color);
    height: 32px;
    width: 32px;
  }

  @media (max-width: 768px) {
  /* Regras para mobile e tablets */
    .top-dashboard {
      flex-direction: column;
    }
    
  }
</style>
