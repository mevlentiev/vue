<template>
  <input type="text"
         class="ui-input"
         :value="modelValue"
         @input="updateInput" >
</template>

<script>
export default {
  name: "UiInput",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
}
</script>

<style scoped>
.ui-input {
  display: block;
  width: 100%; /* Full width */
  margin: 10px 0;
  padding: 12px 20px; /* Comfortable padding */
  border: 2px solid #ccc; /* Border styling */
  border-radius: 4px; /* Rounded corners */
  box-sizing: border-box; /* Box sizing to include padding */
  font-size: 16px; /* Readable font size */
  background-color: white; /* Background color */
  transition: border-color 0.3s ease-in-out; /* Smooth transition for border color */
}

.ui-input:focus {
  outline: none; /* Remove default focus outline */
  border-color: #4a90e2; /* Highlight color on focus */
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); /* Subtle shadow for depth */
}
</style>