<template>
    <div class="col-8" id="form-root">
      <flat-state />
      <object-state />
      <dynamic-state />
    </div>
</template>

<script>
import FlatState from "@/components/flatState/FlatState";
import ObjectState from "@/components/objectState/ObjectState";
import DynamicState from "@/components/dynamicState/DynamicState";
export default {
  name: "FormRoot",
  components: {DynamicState, ObjectState, FlatState},
}
</script>

<style>
.form-section {
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid gray;
  border-radius: .5rem;
  padding: 2rem;
}

.description {
  white-space: pre-line;
}

.form-row {
  width: 100%;
}
</style>
