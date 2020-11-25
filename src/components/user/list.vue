<template>
  <div class="list"
    v-infinite-scroll="loadUsers"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Sobrenome</th>
          <th scope="col">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  props: {
    msg: String
  },
  data() {
    return {
      listUsers: []
    }
  },
  computed: {
    ...mapGetters('users', ['users']),
    ...mapGetters('users', ['meta']),
  },
  created() {
    // this.loadUsers()
  },
  watch: {
    users() {
      console.log(this.users)
    }
  },
  methods: {
    loadUsers() {
      const params = {
        _page: this.meta.current_page,
        _limit: 10
      }
      this.$store.dispatch('users/users', params)
    }
  }
}
</script>
