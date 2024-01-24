<template>
  <button>
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
}
</script>

<style scoped>
button {
  cursor: pointer;
  background: linear-gradient(to right, #6e45e2, #88d3ce); /* Gradient background */
  color: white; /* Text color */
  padding: 10px 20px; /* Increased padding for better visual */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Font weight */
  letter-spacing: 0.5px; /* Letter spacing for better readability */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for interaction */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  outline: none; /* Remove outline */
}

button:hover {
  transform: translateY(-2px); /* Slight raise effect on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
}

button:active {
  transform: translateY(1px); /* Pressed effect on active */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); /* Diminished shadow on active */
}
</style>