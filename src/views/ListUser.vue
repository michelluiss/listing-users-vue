<template>
  <div class="list-users-page section-page">
    <Header></Header>
    <div class="container">
      <h1>Usuários</h1>
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
