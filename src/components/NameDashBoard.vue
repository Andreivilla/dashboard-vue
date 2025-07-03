<template>
  <div class="name-container">
    <form action="" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Digite seu nome" />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </form>

    <div class="map-container">
      <BrazilianMap></BrazilianMap>
    </div>
  </div>
</template>

<script setup>
  import BrazilianMap from './BrazilianMap.vue';
  const handleSubmit = () => {
    console.log('Formulário enviado!')
    // Você pode adicionar aqui a lógica que quiser ao enviar o formulário
  }


</script>

<style scoped>

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
  width: 70%;
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
</style>
