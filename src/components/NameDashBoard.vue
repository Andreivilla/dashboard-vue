<template>
  <div>
    <form action="" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Digite algo..." />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  console.log('Formulário enviado!')
  // Você pode adicionar aqui a lógica que quiser ao enviar o formulário
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 8px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
