<template>
  <div id="app" class="text-center">
    <v-header/>
    <v-main/>
    <v-footer/>
  </div>
</template>

<script>
import header from './components/header';
import recommend from './components/recommend';
import footer from './components/footer';

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-main': recommend,
    'v-footer': footer
  }
};
</script>

<style lang="scss">
  @import "~styles/app";
</style>

