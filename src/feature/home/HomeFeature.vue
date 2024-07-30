<template>
  <Navbar />
  <div class="container">
    <definicao-composables />
  </div>
</template>

<script>
import Navbar from '../../components/navbar.vue'
import DefinicaoComposables from './components/DefinicaoComposables.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    DefinicaoComposables,
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
