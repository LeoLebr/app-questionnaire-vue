<template>
  <form class="questionnaire">
    <input type="text" placeholder="Nom">
    <input type="text" placeholder="Prénom">
    <input type="text" placeholder="Nom de la société">
    <!--<router-link to="/question" tag="button">Commencer le test</router-link>-->
    <button @click="nextQ(2)">Commencer le test</button>
    <div class="test">
      <div v-for="q in quest">
        <p>{{ q.q }}</p>
      </div>
    </div>
  </form>
</template>

<script>
import questions from './json/questions.json'
export default {
  name: 'test',
  data () {
    return {
      quest: questions
    }
  },
  methods: {
    nextQ(id) {
      this.$router.push({name:'question', params:{id:id}})
    }
  }
}
</script>
