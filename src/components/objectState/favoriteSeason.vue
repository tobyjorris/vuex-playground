<template>
  <div class="form-row mb-3">
    <label for="seasonSelect">Favorite Season</label>
    <v-select
        id="seasonSelect"
        v-model="computedSeason"
        :options="seasonOptions"
        type="text"
        placeholder="Choose Your Season"
    />
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "favoriteSeason",
  computed: {
    computedSeason: {
      get() {
        return this.$store.state.preferences.season
      },
      set(value) {
        this.updatePreferences({key: 'season', value: value})
      }
    }
  },
  data() {
    return {
      seasonOptions: [
        {label: 'Spring', id: '1'},
        {label: 'Summer', id: '2'},
        {label: 'Fall', id: '3'},
        {label: 'Winter', id: '4'},
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
