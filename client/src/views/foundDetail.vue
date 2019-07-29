<template>
  <div class="foundDetail">
    视图详情
    <!-- {{ $route.params.id }} -->
    {{ $route.query.id }}
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  mounted() {
    // console.log(this.$route.params.id)
    console.log(this.$route.query.id)
  }
 }
</script>

<style lang="" scoped>
  .foundDetail{

  }
</style>