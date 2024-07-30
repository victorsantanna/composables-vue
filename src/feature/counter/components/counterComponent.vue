<template>
  <div class="container">
    <div class="secao-conteudo">
      <p>Contador: {{ count }}</p>
      <div class="secao-btn">
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
      </div>

    </div>

  </div>
</template>

<script>
import { useCounter } from '../composables/useCounter';

export default {
  setup() {
    const { count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
 
}

.secao-conteudo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #06004F;
  width: 300px;
  height: 300px;
  border-radius: 5px;
}

button {
  width: 200px;
  height: 40px;
  margin: 10px;
  color: #06004F;
  background-color: transparent;
  border: 1px solid #06004F;
  border-radius: 4px;
  cursor: pointer;
  
}

p {
  font-size: 20px;
  font-weight: bold;
}

.secao-btn {
  display: flex;
  flex-direction: column;
}
</style>
