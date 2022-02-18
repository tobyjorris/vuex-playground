<template>
  <div class="form-row mb-3">
    <label for="firstName">First Name</label>
    <input
        :value="getFirstName"
        @input="setFirstName($event.target.value)"
        type="text"
        class="form-control"
        id="firstName"
        placeholder="Enter Your First Name"
    >
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "FirstName",
  computed: {
    ...mapGetters('name', ['getFirstName'])
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
