<template>
  <div class="col form-section">
    <h2>
      'Flat' State
      <font-awesome-icon
          @click="toggleIconColor"
          :style="iconColor"
          icon="circle-question"
          size="xs"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
      />
    </h2>
    <div class="collapse mb-3" id="collapseExample">
      <div class="card card-body">
        <p>The module holding the state used by this group of input components has a flat structure that looks like this:</p>
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
