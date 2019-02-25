<template>
  <div>
    <div id="nav">
      <router-link to="/"><img src="https://cdn4.iconfinder.com/data/icons/fruits-and-veggies-2/280/fruits-and-veggies-icons_chilli-pepper-512.png" alt="Go To Home Page"></router-link>
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/recipes">Recipes</router-link>
        <router-link to="/search">Search</router-link>
      </nav>
    </div>
    <div class="content">
    <transition
        name="fade"
        mode="out-in"
      >
      <router-view/>
    </transition>
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'karmina', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-wrap: nowrap;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-family: 'brandon-grotesque', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  img {
    max-width: 100px;
    padding-right: 30px;
  }
}

nav a {
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.container {
  width: 800px;
  max-width: 90%;
  margin: 2em auto;
}

.recipes {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-end;
    width: 100%;
    margin: 10px;
    background-position: center center;
    background-size: cover;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    color: white;

    &:before {
      display: block;
      height: 150px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      z-index: 0;
      background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#99000000',GradientType=0 ); /* IE6-9 */
    }

    @media (min-width: 601px) {
      width: calc(50% - 20px);
    }

    @media (min-width: 769px) {
      width: calc(33% - 20px);
    }

    h2 {
      width: 100%;
      color: white;
      font-family: 'brandon-grotesque', sans-serif;
      text-transform: uppercase;
      margin: 5px 0;
      z-index: 1;
      line-height: 1;
    }

    div {
      z-index: 1;
    }
  }

  a {
    color: red;
    z-index: 1;
  }
}

img {
  max-width: 100%;
}
</style>
