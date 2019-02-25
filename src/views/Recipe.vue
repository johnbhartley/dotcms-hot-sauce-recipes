<template>
  <div class="recipe container">
    <h1>{{ recipe.title }}</h1>
    <div v-html="recipe.recipeContent"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipe: {},
    };
  },
  name: 'recipe-id',
  methods: {
    getRecipe() {
      axios
        .get(`http://localhost:8080/api/content/id/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data.contentlets);
          this.recipe = response.data.contentlets[0]; // eslint-disable-line
        });
    },
  },
  created() {
    this.getRecipe();
  },
};
</script>
