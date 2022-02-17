<template>
  <div class="form-floating form-row mb-3">
    <input
        v-model="computedFirstName"
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="Enter Your Name"
    >
    <label for="floatingInput">First Name</label>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "FirstName",
  computed: {
    computedFirstName: {
      get() {
        return this.$store.state.name.firstName
      },
      set(value) {
        this.setFirstName(value)
      }
    }
  },
  mounted() {
    this.setFirstName('First Name Set On Mount')
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations('name', ['setFirstName'])
  }
}
</script>

<style scoped>

</style>
