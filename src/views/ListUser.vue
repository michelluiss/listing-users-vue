<template>
  <div class="list-users-page">
    <div class="container">
      <Header></Header>
      <List></List>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import List from '../components/user/list'

export default {
  name: 'Home',
  components: {
    Header,
    List
  },
  props: {
    msg: String
  }
}
</script>
