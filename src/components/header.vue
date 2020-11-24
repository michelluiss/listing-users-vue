<template>
  <div class="header">
    <ul>
      <li class="item-nav">
        <router-link :to="{ name: 'listUsers' }">Users</router-link>
      </li>
      <li class="item-nav">
        <router-link :to="{ name: 'registerUser' }">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
