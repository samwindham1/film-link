<template>
  <main id="link">
    <!-- Search Component -->
    <search></search>

    <div class="divider"></div>

    <!-- Home Page Animation -->
    <div id="neural-animation"></div>

  </main>
</template>

<script>
import search from './search';

export default {
  name: 'link',
  components: {
    search,
  },
};
</script>


<style lang="scss">
  @import "~styles/components/link";
</style>

