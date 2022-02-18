<template>
  <div class="form-row mb-3">
    <label for="lastName">Last Name</label>
    <input
        v-model="computedLastName"
        type="text"
        class="form-control"
        id="lastName"
        placeholder="Enter Your Last Name"
    >
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
