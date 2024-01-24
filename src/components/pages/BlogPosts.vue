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
      <UiSelect v-model="selectedOption"
                :options="options" />

      <UiInput v-model="searchQuery"
               class="search"
               placeholder="Search By Title" />
    </div>
    <PostForm @addPost="addPost" @close="closeModal" :openModal="openModal"></PostForm>
    <PostList :posts="filteredPosts" :isLoading="isLoading" @removePost="removePost"></PostList>
    <PostPagination v-if="!infinityScrollMode"
                    :currentPage="page"
                    :totalPages="totalPages"
                    @setCurrentPage="setCurrentPage"
                    @nextPage="nextPage"
                    @prevPage="prevPage"/>
    <div v-intersection="LoadMorePosts"
         v-if="infinityScrollMode && page <= totalPages"
         class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
    PostPagination
  },
  data() {
    return {
      posts: [],
      isLoading: false,
      options: [
        {
          value: 'title',
          title: "Sorting by title"
        },
        {
          value: 'body',
          title: "Sorting by text"
        }
      ],
      openModal: false,
      infinityScrollMode: false,
      selectedOption: 'default',
      searchQuery: '',
      limit: 10,
      page: 1,
      totalPages: 0,
    }
  },
  mounted() {
    this.fetchPosts();
  },

  methods: {
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
    },

    async fetchPosts() {
      this.isLoading = true;

      await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: this.limit,
          _page: this.page
        }
      })
          .then(response => {
            this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
            this.posts = response.data;
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => this.isLoading = false);
    },
    async LoadMorePosts() {
      this.page = this.page + 1;

      await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: this.limit,
          _page: this.page
        }
      })
          .then(response => {
            this.posts = [...this.posts, ...response.data];
          })
          .catch(error => {
            console.log(error)
          });
    }
  },

  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

  watch: {
    selectedOption(val) {
      this.posts.sort((post1, post2) => {
        return post1[val]?.localeCompare(post2[val])
      })
    },
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