<template>
  <div class="form-section">
    <h2
        @click="toggleIconColor"
        data-bs-toggle="collapse"
        data-bs-target="#flatDetails"
        aria-expanded="false"
        aria-controls="flatDetails"
    >
      'Flat' State
      <font-awesome-icon
          :style="iconColor"
          :icon="computedIcon"
          size="xs"
      />
    </h2>
    <div class="collapse mb-3" id="flatDetails">
      <div class="card card-body w-100">
        <div class="description">The module holding the state used by this group of input components has a flat structure that looks like this:</div>
        <pre>
          <code>
            const state = () => ({
              firstName: '',
              middleName: '',
              lastName: ''
            })
          </code>
        </pre>
      </div>
    </div>
    <first-name />
    <middle-name />
    <last-name />
  </div>
</template>

<script>
import LastName from "@/components/flatState/LastName";
import MiddleName from "@/components/flatState/MiddleName";
import FirstName from "@/components/flatState/FirstName";

export default {
  name: "FlatState",
  components: {LastName, MiddleName, FirstName},
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
