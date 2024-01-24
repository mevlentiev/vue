<template>
  <select class="custom-select"
          v-model="modalValue"
          @change="changeOption">
    <option value="default" disabled>Choose the option</option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">{{ option.title }}</option>
  </select>
</template>

<script>
export default {
  name: "UiSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      modalValue: 'default'
    }
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modalValue", event.target.value);
    }
  }
}
</script>

<style scoped>
.custom-select {
  width: 100%; /* Full width */
  padding: 10px 15px; /* Comfortable padding */
  border-radius: 5px; /* Rounded corners */
  border: 1px solid #ccc; /* Subtle border */
  background-color: white; /* Background color */
  font-size: 16px; /* Readable font size */
  color: #333; /* Text color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  appearance: none; /* Remove default styling */
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>'); /* Custom dropdown arrow */
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer; /* Cursor pointer */
}

.custom-select:focus {
  outline: none; /* Remove focus outline */
  border-color: #4a90e2; /* Highlight color on focus */
}
</style>