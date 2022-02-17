<template>
    <div class="form-row mb-3">
      <label for="foodSelect">Favorite Foods</label>
      <v-select
          multiple
          id="foodSelect"
          v-model="computedFoods"
          :options="foodOptions"
          type="text"
          placeholder="Select All Your Favorite Foods"
      />
    </div>
  </template>

  <script>
    import {mapActions} from 'vuex'

    export default {
      name: "favoriteFoods",
      computed: {
        computedFoods: {
          get() {
            return this.$store.state.preferences.foods
          },
          set: function (value) {
            this.updatePreferences({key: 'foods', value: value})
          }
        }
      },
      data() {
        return {
          foodOptions: [
            'Burgers',
            'Pizza',
            'Pasta',
            'Tacos',
            'Hot Dogs',
            'Steak',
            'Chicken',
            'Fish',
          ],
        }
      },
      methods: {
        ...mapActions('preferences', ['updatePreferences'])
      }
    }
  </script>

  <style scoped>

  </style>

