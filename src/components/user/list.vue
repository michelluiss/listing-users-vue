<template>
  <div class="list"
    v-infinite-scroll="loadUsers"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="40"
  >
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID
            <img
              :src="orderImg"
              alt=""
              @click="orderId()"
              :class="idOrder === 'asc' ? 'asc' : 'desc'"
            >
          </th>
          <th scope="col">Nome
            <img
              :src="orderImg"
              alt=""
              @click="orderName()"
              :class="nameOrder === 'asc' ? 'asc' : 'desc'"
            >
          </th>
          <th scope="col">Sobrenome</th>
          <th scope="col">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td class="name-user">
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
  data() {
    return {
      orderImg: require('../../assets/order.png'),
      idOrder: '',
      nameOrder: ''
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
    },
    orderId() {
      if (this.idOrder === '') {
        this.idOrder = 'asc'
        this.$store.commit('users/orderById', 'asc')
      } else if (this.idOrder === 'asc') {
        this.idOrder = 'desc'
        this.$store.commit('users/orderById', 'desc')
      } else if (this.idOrder === 'desc') {
        this.idOrder = ''
        this.$store.commit('users/orderById', '')
      }
    },
    orderName() {
      if (this.nameOrder === '') {
        this.nameOrder = 'asc'
        this.$store.commit('users/orderByName', 'asc')
      } else if (this.nameOrder === 'asc') {
        this.nameOrder = 'desc'
        this.$store.commit('users/orderByName', 'desc')
      } else if (this.nameOrder === 'desc') {
        this.nameOrder = ''
        this.$store.commit('users/orderByName', '')
      }
    }
  }
}
</script>
