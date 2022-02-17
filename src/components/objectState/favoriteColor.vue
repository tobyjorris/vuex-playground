<template>
  <div class="form-row mb-3">
    <label for="colorSelect">Favorite Color</label>
    <v-select
        id="colorSelect"
        v-model="computedColor"
        :options="colorOptions"
        :reduce="color => color.id"
        type="text"
        placeholder="Choose Your Color"
     />
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "favoriteColor",
  computed: {
    computedColor: {
      get() {
        return this.$store.state.preferences.color
      },
      set: function (value) {
        this.updatePreferences({key: 'color', value: value})
      }
    }
  },
  data() {
    return {
      colorOptions: [
        {label: 'Red', id: '1'},
        {label: 'Orange', id: '2'},
        {label: 'Yellow', id: '3'},
        {label: 'Green', id: '4'},
        {label: 'Blue', id: '5'},
        {label: 'Indigo', id: '6'},
        {label: 'Violet', id: '7'},
      ]
    }
  },
  methods: {
    ...mapActions('preferences', ['updatePreferences'])
  }
}
</script>

<style scoped>

</style>
