<template>
  <form @submit.prevent>
    <div class="form-row mb-3" v-for="(value, key) in getFormFields" :key="'dynamic-form-' + key">
      <label for="firstName">{{ formatKeyName(key) }}</label>
      <input
          :value="value"
          @input="updateDynamicState({form: 'form', key: key, value: $event.target.value})"
          type="text"
          class="form-control"
          id="firstName"
          :placeholder="`Enter your ${formatKeyName(key)} here`"
      >
    </div>
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
    debug(print) {
      console.log(print)
    },
    formatKeyName(keyName) {
      const capitalized = keyName.charAt(0).toUpperCase() + keyName.slice(1)

      return capitalized.split(/(?=[A-Z])/).join(' ')
    },
    ...mapActions('dynamic', ['updateDynamicState'])
  }
}
</script>

<style scoped>

</style>
