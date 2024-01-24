<template>
  <div v-if="!isLoading">
    <TransitionGroup name="posts" tag="ul" v-if="posts.length !== 0">
      <post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @removePost="removePost" />
    </TransitionGroup>
    <div v-else>
      <h2 style="color: red">No posts yet</h2>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>

import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    removePost(post) {
      this.$emit("removePost", post);
    }
  }
}
</script>

<style scoped>
.posts-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.posts-list-item {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.posts-list-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.no-posts {
  color: #cc0000;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
}

.loading {
  text-align: center;
  color: #555;
  font-size: 1.5rem;
  margin-top: 20px;
}

/* Transition Group Styles */
.posts-move,
.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}

.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.posts-leave-active {
  position: absolute;
}
</style>