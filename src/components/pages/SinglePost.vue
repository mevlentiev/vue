<template>
  <div>
    <h1>Post id: {{ $route.params.id }}</h1>
    <div class="post-data">
      <h2>Titele: {{ post.title }}</h2>
      <p>Content: {{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SinglePost',

  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    }
  },

  mounted() {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(res => {
        this.post = res.data
      })
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
div {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  padding: 20px;
  margin: auto;
  max-width: 800px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.post-data {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #1a1a1a;
  margin-bottom: 10px;
}

p {
  color: #4a4a4a;
  font-size: 16px;
}
</style>