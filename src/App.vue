<template>
  <div id="app">
    <div id="nav">
      <router-link to="/timers">Task Timers</router-link> |
      <router-link to="/sprints">Sprints</router-link>
    </div>
    <div id="view-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#view-container {
  flex: 1;
}
</style>
