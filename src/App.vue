<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import header from './components/header';

export default {
  name: 'app',
  components: {
    'v-header': header
  }
};
</script>

<style lang="scss">

</style>
