<template>
  <div class="sticky-top state-inspection">
    <h2>State Object</h2>
    <div class="data-entry" v-for="(key, index) in Object.keys(nameModule)" :key="'name-' + index" >
      <span class="key-name">'{{key}}'</span>: {{nameModule[key]}}
    </div>
    <div  class="data-entry" v-for="(key, index) in Object.keys(preferencesModule)" :key="'preferences-' + index">
      <span class="key-name">'{{key}}'</span>: {
        <div style="margin-left: 15px" v-for="(value, index) in preferencesModule[key]" :key="'value-' + index">
          <span class="key-name">'{{ index }}'</span>
           : {{value}}
        </div>
      }
    </div>
  </div>
</template>

<script>
export default {
  name: "StateInspector",
  computed: {
    nameModule() {
      return this.$store.state.name
    },
    preferencesModule() {
      return this.$store.state.preferences
    },
  },
}
</script>

<style scoped>
.state-inspection {
  border-right: 2px solid gray;
}

.data-entry {
  margin-bottom: 8px;
}

.key-name {
  font-weight: 500
}

.modal-backdrop .fade .show {
  z-index: 1!important;
}
</style>
