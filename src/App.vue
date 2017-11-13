<template>
  <div id="app" class="text-center">
    <v-header/>
    <v-main/>
    <v-footer/>
  </div>
</template>

<script>
import header from '@/components/header';
import footer from '@/components/footer';
import link from '@/components/link/link';

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-main': link,
    'v-footer': footer
  }
};
</script>

<style lang="scss">
  @import "~styles/app";
</style>

