<template>
  <form @submit.prevent>
    <label for="firstName">Name</label>
    <input
        :value="getFormFields['name']"
        @input="updateDynamicState({key: 'name', value: $event.target.value})"
        type="text"
        class="form-control"
        id="firstName"
        placeholder="Enter Your First Name"
    >
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "DynamicStateForm",
  computed: {
    ...mapGetters('dynamic', ['getFormFields'])
  },
  methods: {
    ...mapActions('dynamic', ['updateDynamicState'])
  }
}
</script>

<style scoped>

</style>
