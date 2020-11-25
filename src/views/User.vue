<template>
  <div class="users-page section-page">
    <Header></Header>
    <div class="container">
      <h1>Detalhes do usuário</h1>
      <Details :user="user"></Details>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import Details from '../components/user/details'

export default {
  name: 'User',
  components: {
    Header,
    Details
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.getUser(this.$route.params.id)
  },
  methods: {
    getUser(id) {
      this.$store.dispatch('users/getUser', id)
        .then(response => {
          this.user = Object.assign({}, response)
        })
    }
  }
}
</script>
