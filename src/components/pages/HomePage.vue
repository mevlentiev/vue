<template>
  <div class="container">
    <h1>Home Page</h1>
    <ul>
      <li>
        <router-link to="/blog-posts">Look Posts</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>