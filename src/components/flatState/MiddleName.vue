<template>
  <div class="form-row mb-3">
    <label for="middleName">Middle Name</label>
    <input
        v-model="computedMiddleName"
        type="text"
        class="form-control"
        id="middleName"
        placeholder="Enter Your Middle Name"
    >
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "MiddleName",
  computed: {
    computedMiddleName: {
      get() {
        return this.$store.state.name.middleName
      },
      set(value) {
        this.setMiddleName(value)
      }
    }
  },
  methods: {
    ...mapMutations('name', ['setMiddleName'])
  }
}
</script>

<style scoped>

</style>
