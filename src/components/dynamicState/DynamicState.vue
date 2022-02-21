<template>
  <div class="form-section">
    <h2
        @click="toggleIconColor"
        data-bs-toggle="collapse"
        data-bs-target="#dynamicDetails"
        aria-expanded="false"
        aria-controls="dynamicDetails"
    >
      'Dynamic' State
      <font-awesome-icon
          :style="iconColor"
          :icon="computedIcon"
          size="xs"
      />
    </h2>
    <div class="collapse mb-3" id="dynamicDetails">
      <div class="card card-body w-100">
        <div class="description">The state module for this group begins totally empty, like this:</div>
        <pre>
          <code>
            const state = () => ({
              //
            })
          </code>
        </pre>
        <div class="description">
          Using Axios Mock Adapter, a model of a basic contact form is returned from the 'server' that has this structure:
        </div>
        <pre>
          <code>
            form: {
              name: '',
              email: '',
              phone: '',
              contactMethod: '',
              department: '',
              message: ''
            }
          </code>
        </pre>
      </div>
    </div>
    <dynamic-state-form />
  </div>
</template>

<script>
import DynamicStateForm from "@/components/dynamicState/DynamicStateForm";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "DynamicState",
  components: {DynamicStateForm},
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
  async mounted() {
    await this.getData()
  },
  data() {
    return {
      showingDetails: false,
      axiosMock: new MockAdapter(axios),
      response: {
        form: {
          name: '',
          email: '',
          phone: '',
          contactMethod: '',
          department: '',
          message: ''
        }
      }
    }
  },
  methods: {
    toggleIconColor() {
      this.showingDetails = !this.showingDetails
    },
    getData() {
      this.axiosMock.onGet("/users").reply(200, this.response )

      const request = axios.get('/users')

      request
          .then(response => {
            this.setDynamicState(response.data)
          })
          .catch(error => console.log(error))

      return request
    },
    ...mapActions('dynamic', ['setDynamicState'])
  }
}
</script>
