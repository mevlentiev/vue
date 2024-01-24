<template>
  <div class="navbar">
    <ul class="nav">
      <li @click="$router.push('/blog-posts')">Look Posts</li>
      <li @click="$router.push('/blog-posts-vuex')">Look Posts Vuex</li>
      <li @click="$router.push('/blog-posts-composition')">Look Posts Composition API</li>
      <li @click="$router.push('/about')">About us</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px; /* Increased height for better visual */
  background-color: #333; /* Darker background for modern look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0; /* Remove default padding */
}

.nav li {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Light text color for contrast */
  font-size: 16px; /* Readable font size */
  font-weight: bold; /* Bold font for navigation items */
  transition: color 0.2s; /* Smooth transition for hover effect */
}

.nav li:hover {
  color: #4CAF50; /* Green color on hover for interactive effect */
}
</style>