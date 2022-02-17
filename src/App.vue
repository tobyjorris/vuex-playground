<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
    </div>
    <div class="row">
        <form-root />
    </div>
  </div>
</template>

<script>
import FormRoot from "@/pages/FormRoot";
export default {
  name: 'App',
  components: {
    FormRoot,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
