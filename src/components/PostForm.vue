<template>
  <UiModal :IsShown="openModal" @close="closeModal">
    <template v-slot:modal-body>
      <form>
        <UiInput
            placeholder="Post Title"
            v-focus
            v-model="post.title"/>
        <UiInput
            placeholder="Post Body"
            v-model="post.body" />
        <UiButton @click.prevent="addPost">
          <template v-slot:text>
            Add Post
          </template>
        </UiButton>
      </form>
    </template>
    <template v-slot:modal-title>
      <h2>Create a post</h2>
    </template>
  </UiModal>

</template>

<script>
export default {
  name: "PostForm",
  props: {
    openModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      post: {
        title: "",
        body: ""
      },
    };
  },
  methods: {
    addPost() {
      if (this.post.title !== '' && this.post.body !== '') {
        this.post.id = Date.now();
        this.$emit("addPost", this.post);

        this.post = {
          title: "",
          body: ""
        };

        this.$emit("close");
      }
    },
    closeModal () {
      this.$emit("close");
    },
  }
}
</script>

<style scoped>

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>