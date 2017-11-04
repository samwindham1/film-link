<template>
  <main id="recommend">
    <h2>{{ temp }}</h2>
  </main>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {
      temp: 'Recommend'
    };
  }
};
</script>


<style lang="scss" scoped>
  @import "~styles/components/recommend";
</style>
