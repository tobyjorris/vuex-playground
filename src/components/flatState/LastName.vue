<template>
  <div class="form-floating form-row mb-3">
    <input
        v-model="computedLastName"
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="Enter Your Name"
    >
    <label for="floatingInput">Last Name</label>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "LastName",
  computed: {
    computedLastName: {
      get() {
        return this.$store.state.name.lastName
      },
      set(value) {
        this.setLastName(value)
      }
    }
  },
  methods: {
    ...mapMutations('name', ['setLastName'])
  }
}
</script>

<style scoped>

</style>
