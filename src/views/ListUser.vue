<template>
  <div class="hello">
    <h1>Home</h1>
    <li class="item-nav">
      <router-link :to="{ name: 'listUsers' }">Users</router-link>
    </li>
    <li class="item-nav">
      <router-link :to="{ name: 'registerUser' }">Register</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>
