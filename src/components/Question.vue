<template>
  <div class="question">
    <h1 class="text-primary text-center">{{ id }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'question',
    data () {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>
