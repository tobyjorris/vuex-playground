<template>
  <div class="col form-section">
    <h2>
      'Object' State
      <font-awesome-icon
          @click="toggleIconColor"
          :style="iconColor"
          icon="circle-question"
          size="xs"
          data-bs-toggle="collapse"
          data-bs-target="#objectDetails"
          aria-expanded="false"
          aria-controls="objectDetails"
      />
    </h2>
    <div class="collapse mb-3" id="objectDetails">
      <div class="card card-body">
        <p>The module holding the state used by this group of input components has a object oriented structure that looks like this:</p>
        <pre>
            <code>
              const state = () => ({
                preferences: {
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
    }
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
