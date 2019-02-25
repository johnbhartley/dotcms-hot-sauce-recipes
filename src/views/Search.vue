<template>
  <div class="recipes container">
    <h1>Search</h1>
    <form @submit.prevent="search">
      <input type="search" v-model="searchTerm">
      <button>Search</button>
    </form>
    <div v-if="results">
      <ul>
        <li v-for="(recipe, index) in results" v-bind:key="index"
          :style="{ backgroundImage: 'url(http://localhost:8080/contentAsset/image/' + recipe.featuredImage + '/fileAsset/filter/Resize,Jpeg/resize_w/300/jpeg_p)' }">
          <div>
            <em>{{recipe.spicinessLevel}}/7<br>
            {{ recipe.subtitle }}</em>
          </div>
          <h2>{{ recipe.title }}</h2>
          <!-- eslint-disable-next-line -->
          <router-link :to="`/recipes/${recipe.identifier}`">By ID</router-link>
          <!-- eslint-disable-next-line -->
          <router-link :to="`/recipe/${slugify(recipe.title)}`">By Slug</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipe: '',
      searchTerm: '',
      results: [],
    };
  },
  computed: {
    searchBy() {
      if (this.searchTerm !== '') {
        let search = '';
        // let title = '';
        let searchArray = [];
        // split by space
        searchArray = this.searchTerm.split(' ');
        // join them together to form the lucene query
        for (let i = 0; i < searchArray.length; i += 1) {
          search += `+catchall:${searchArray[i]}* `;
        }
        return search;
      }
      return '';
    },
  },
  name: 'search',
  methods: {
    slugify(value) {
      let slug = '';
      slug = value.toLowerCase();
      slug = slug.replace(' ', '-');
      return slug;
    },
    search() {
      axios
        .get(`http://localhost:8080/api/content/render/false/type/json/query/+contentType:Recipe ${this.searchBy}`)
        .then((response) => {
          console.log(response.data.contentlets);
          this.results = response.data.contentlets; // eslint-disable-line
        });
    },
  },
  created() {
    // this.getRecipes();
  },
};
</script>
