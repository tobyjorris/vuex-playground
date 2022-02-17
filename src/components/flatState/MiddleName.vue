<template>
  <div class="form-floating form-row mb-3">
    <input
        v-model="computedMiddleName"
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="Enter Your Name"
    >
    <label for="floatingInput">Middle Name</label>
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
