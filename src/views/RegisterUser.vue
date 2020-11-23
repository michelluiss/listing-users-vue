<template>
  <div class="hello">
    <h1>Register User</h1>
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
  name: 'RegisterUser',
  props: {
    msg: String
  }
}
</script>
