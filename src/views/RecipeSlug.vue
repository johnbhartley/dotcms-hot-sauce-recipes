<template>
  <div class="recipe-slug container">
    <h1>{{ recipe.title }}</h1>
    <div v-html="recipe.recipeContent"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipe: '',
    };
  },
  computed: {
    slug() {
      // let title = '';
      let titleArray = [];
      // split by -
      titleArray = this.$route.params.slug.split('-');
      // join them together to form the lucene query
      titleArray = `+catchall:${titleArray.join('%20+catchall:')}`;
      return titleArray;
    },
  },
  name: 'recipe-slug',
  methods: {
    getRecipe() {
      axios
        .get(`http://localhost:8080/api/content/render/false/type/json/query/${this.slug}`)
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
