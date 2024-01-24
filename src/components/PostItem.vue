<template>
  <div class="post">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-body">{{ post.body }}</p>
    <div class="post-actions">
      <UiButton @click="removePost">
        <template v-slot:text>
          Remove Post
        </template>
      </UiButton>
      <UiButton @click="$router.push(`/post/${post.id}`)">
        <template v-slot:text>
          Open Post
        </template>
      </UiButton>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    removePost() {
      this.$emit("removePost", this.post);
    },
    editPost() {
      this.$emit("editPost", this.post);
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid #ddd; /* Lighter border */
  padding: 20px;
  margin: 20px 0;
  background-color: #f9f9f9; /* Light background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.post-title {
  margin-top: 0;
  color: #333; /* Dark text for title */
  font-size: 24px; /* Larger font size for title */
}

.post-body {
  color: #444; /* Dark text for body */
  line-height: 1.6; /* Improved line spacing */
}

.post-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px; /* Space above buttons */
}

.post-actions button {
  margin-right: 10px;
  padding: 8px 15px; /* Button padding */
  cursor: pointer; /* Pointer cursor on hover */
}
</style>