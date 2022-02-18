<template>
  <div class="form-section">
    <h2
        @click="toggleIconColor"
        data-bs-toggle="collapse"
        data-bs-target="#objectDetails"
        aria-expanded="false"
        aria-controls="objectDetails"
    >
      'Object' State
      <font-awesome-icon
          :style="iconColor"
          :icon="computedIcon"
          size="xs"
      />
    </h2>
    <div class="collapse mb-3" id="objectDetails">
      <div class="card card-body">
        <div class="description">The module holding the state used by this group of input components has an object oriented structure that looks like this:</div>
        <pre>
            <code>
              const state = () => ({
                favorites: {
                  color: '',
                  season: {},
                  foods: []
                }
              })
            </code>
          </pre>
      </div>
    </div>
    <!--Input Components Here-->
    <favorite-color />
    <favorite-season />
    <favorite-foods />
  </div>
</template>

<script>
import FavoriteColor from "@/components/objectState/favoriteColor";
import FavoriteSeason from "@/components/objectState/favoriteSeason";
import FavoriteFoods from "@/components/objectState/favoriteFoods";
export default {
  name: "ObjectState",
  components: {FavoriteFoods, FavoriteSeason, FavoriteColor},
  computed: {
    iconColor() {
      if (this.showingDetails) {
        return {color: 'green'}
      } else {
        return {color: 'black'}
      }
    },
    computedIcon() {
      if (this.showingDetails) {
        return 'caret-up'
      } else {
        return 'caret-down'
      }
    },
  },
  data() {
    return {
      showingDetails: false
    }
  },
  methods: {
    toggleIconColor() {
      this.showingDetails = !this.showingDetails
    }
  }
}
</script>

<style scoped>

</style>
