<template>
  <div class="col" id="form-root">
    <div class="container-fluid w-50">
      <div class="row mb-3">
        <flat-state />
      </div>
      <div class="row">
        <object-state />
      </div>
    </div>
  </div>
</template>

<script>
import FlatState from "@/components/flatState/FlatState";
import ObjectState from "@/components/objectState/ObjectState";
export default {
  name: "FormRoot",
  components: {ObjectState, FlatState},
}
</script>

<style>
.form-section {
  border: 1px solid gray;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.form-row {
  width: 100%;
}
</style>
