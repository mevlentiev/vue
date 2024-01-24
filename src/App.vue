<template>
  <NavBar></NavBar>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from '@/components/UI/NavBar';
export default {
  name: 'App',
  components: {
    NavBar: NavigationBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif; /* Modern font */
}

.container {
  padding: 20px; /* Consistent padding */
  margin-top: 60px; /* Space for NavBar */
  background-color: #f5f5f5; /* Light background for the content area */
  min-height: calc(100vh - 60px); /* Full height minus NavBar height */
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px; /* Gap between elements */
}
</style>