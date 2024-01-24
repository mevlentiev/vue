<template>
  <div class="pagination-wrapper">
    <UiButton @click="prevPage">
      <template v-slot:text>
        Previous
      </template>
    </UiButton>
    <div class="pagination">
      <div v-for="page in totalPages"
           :class="{ active: page === currentPage }"
           @click="setCurrentPage(page)"
           :key="page">
        {{ page }}
      </div>
    </div>
    <UiButton @click="nextPage">
      <template v-slot:text>
        Next
      </template>
    </UiButton>
  </div>
</template>

<script>
export default {
  name: "PostPagination",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },

  methods: {
    prevPage() {
      this.$emit("prevPage");
    },
    nextPage() {
      this.$emit("nextPage");
    },
    setCurrentPage(page) {
      this.$emit("setCurrentPage", page);
    }
  }
}
</script>


<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0; /* Padding for the entire wrapper */
}

.pagination {
  display: flex;
  align-items: center;
}

.pagination div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px; /* Minimum width for pagination numbers */
  height: 30px;
  margin: 0 8px; /* Increased margin for separation */
  border: 1px solid #ddd; /* Border for pagination numbers */
  border-radius: 15px; /* Rounded corners */
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for hover and active states */
  font-weight: bold; /* Bold font for numbers */
}

.pagination div:hover {
  background-color: #f0f0f0; /* Lighter shade on hover */
  transform: scale(1.1); /* Slight increase in size on hover */
}

.pagination div.active {
  background-color: #4CAF50; /* Distinct color for the active page */
  color: white; /* White text for better visibility */
  transform: scale(1.2); /* Slightly larger active page number */
}
</style>