<template>
  <div class="header">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      message: 'Hello World!'
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/components/Header';
</style>
