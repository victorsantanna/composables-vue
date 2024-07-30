/* eslint-disable */
<template>
  <Navbar />
  <CounterComponent />
</template>

<script>
import Navbar from '../../components/navbar.vue'
import CounterComponent from './components/counterComponent.vue';

export default {
  components: {
    CounterComponent,
    Navbar
  }
};
</script>