<template>
  <div class="recipes container">
    <h1>Recipes</h1>
    <ul>
      <li v-for="(recipe, index) in recipes" v-bind:key="index"
        :style="{ backgroundImage: 'url(http://localhost:8080/contentAsset/image/' + recipe.featuredImage + '/fileAsset/filter/Resize,Jpeg/resize_w/300/jpeg_p)' }">
        <div>
          {{recipe.spicinessLevel}}/7<br>
          <em>{{ recipe.subtitle }}</em>
        </div>
        <h2>{{ recipe.title }}</h2>
        <!-- eslint-disable-next-line -->
        <router-link :to="`/recipes/${recipe.identifier}`">By ID</router-link>
        <!-- eslint-disable-next-line -->
        <router-link :to="`/recipe/${slugify(recipe.title)}`">By Slug</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { ResponsiveDirective } from 'vue-responsive-components';

export default {
  data() {
    return {
      recipes: [],
    };
  },
  directives: {
    responsive: ResponsiveDirective,
  },
  name: 'recipes',
  methods: {
    slugify(value) {
      let slug = '';
      slug = value.toLowerCase();
      slug = slug.replace(' ', '-');
      return slug;
    },
    getRecipes() {
      axios
        .get('http://localhost:8080/api/content/render/false/type/json/query/+contentType:Recipe')
        .then((response) => {
          console.log(response.data.contentlets);
          this.recipes = response.data.contentlets;
        });
    },
  },
  created() {
    this.getRecipes();
  },
};
</script>
