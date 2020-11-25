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
          <td>
            <router-link :to="{ name: 'user', params: { id: user.id }}">{{ user.firstName }}</router-link>
          </td>
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
  name: 'List',
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
  beforeDestroy() {
    this.$store.commit('users/resetUsers')
  },
  created() {
    // this.loadUsers()
  },
  methods: {
    loadUsers() {
      const params = {
        _page: this.meta.current_page,
        _limit: this.meta.current_page === 1 ? 25: 10
      }
      this.$store.dispatch('users/users', params)
    }
  }
}
</script>
