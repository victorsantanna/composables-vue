<template>
  <navbar />
 <estrutura-projeto />
</template>

<script>
import navbar from '@/components/navbar.vue';
import EstruturaProjeto from './components/EstruturaProjeto.vue';

export default {
  components:{
    navbar,
    EstruturaProjeto
  }
}

</script>