<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="container">
    <div class="actions">
      <UiButton @click="toggleModal">
        <template v-slot:text>
          Open modal
        </template>
      </UiButton>
      <UiButton @click="toggleinfinityScrollMode">
        <template v-slot:text>
          Toggle infinity scrolling
        </template>
      </UiButton>
      <UiSelect :model-value="selectedOption"
                @update:model-value="setSelectedOption"
                :options="options" />

      <UiInput :model-value="searchQuery"
               @update:model-value="setSearchQuery"
               class="search"
               placeholder="Search By Title" />
    </div>
    <PostForm @addPost="addPost" @close="closeModal" :openModal="openModal"></PostForm>
    <PostList :posts="sortedAndSearchedPosts" :isLoading="isLoading" @removePost="removePost"></PostList>
    <PostPagination v-if="!infinityScrollMode"
                    :currentPage="page"
                    :totalPages="totalPages"
                    @setCurrentPage="setCurrentPage"
                    @nextPage="nextPage"
                    @prevPage="prevPage"/>
    <div v-intersection="loadMorePosts"
         v-if="infinityScrollMode && page <= totalPages"
         class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
  name: "BlogPostsWithVuex",
  components: {
    PostForm,
    PostList,
    PostPagination
  },
  data() {
    return {
      openModal: false,
      infinityScrollMode: false,
    }
  },
  mounted() {
    this.fetchPosts();
  },

  methods: {
    ...mapMutations({
      setPage: 'posts/setPage',
      setSearchQuery: 'posts/setSearchQuery',
      setSelectedOption: 'posts/setSelectedOption'
    }),
    ...mapActions({
      fetchPosts: 'posts/fetchPosts',
      loadMorePosts: 'posts/loadMorePosts',
    }),
    addPost(post) {
      this.posts.unshift(post)
    },
    removePost(removedPost) {
      this.posts = this.posts.filter(post => post.id!== removedPost.id)
    },
    toggleModal () {
      this.openModal =!this.openModal;
    },

    closeModal () {
      this.openModal = false;
    },

    toggleinfinityScrollMode () {
      this.infinityScrollMode =!this.infinityScrollMode;
    },

    prevPage () {
      if (this.page !== 1) {
        this.page--;
      }
    },

    nextPage () {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },

    setCurrentPage (page) {
      this.page = page;
    }
  },

  computed: {
    ...mapState({
      posts: state => state.posts.posts,
      options: state => state.posts.options,
      selectedOption: state => state.posts.selectedOption,
      searchQuery: state => state.posts.searchQuery,
      limit: state => state.posts.limit,
      page: state => state.posts.page,
      totalPages: state => state.posts.totalPages,
      isLoading: state => state.posts.isLoading,
    }),
    ...mapGetters({
      filteredPosts: 'posts/filteredPosts',
      sortedAndSearchedPosts: 'posts/sortedAndSearchedPosts'
    })
  },

  watch: {
    page() {
      if (!this.infinityScrollMode) {
        this.fetchPosts()
      }
    }
  }
}

</script>

<style scoped>
.search {
  width: 100%;
}
</style>