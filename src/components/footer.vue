<template>
  <footer id="footer">
    <p>{{ temp }}</p>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      temp: 'Footer'
    };
  }
};
</script>


<style lang="scss" scoped>
  @import "~styles/components/footer";
</style>
