<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
    </div>
    <div class="row">
        <div class="col-4">
          <state-inspector />
        </div>
        <form-root />
    </div>
  </div>
</template>

<script>
import FormRoot from "@/pages/FormRoot";
import StateInspector from "@/components/stateInspector/StateInspector";
export default {
  name: 'App',
  components: {
    StateInspector,
    FormRoot,
  },
}
</script>

<style>
pre {
  background-color: #E0E0E0;
}

h2:hover {
  cursor: pointer;
}
</style>
