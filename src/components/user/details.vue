<template>
  <div class="user-details">
    <table class="table table-striped">
      <tbody>
        <tr>
          <th scope="row">Nome: </th>
          <td>{{ user.firstName + ' ' + user.lastName }}</td>
        </tr>
        <tr>
          <th scope="row">E-mail: </th>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <th scope="row">Telefone: </th>
          <td>{{ user.phone }}</td>
        </tr>
        <tr>
          <th scope="row">Cep: </th>
          <td>{{ user.address.zipCode }}</td>
        </tr>
        <tr>
          <th scope="row">Cidade: </th>
          <td>{{ user.address.city }}</td>
        </tr>
        <tr>
          <th scope="row">Rua: </th>
          <td>{{ user.address.streetAddress }}</td>
        </tr>
        <tr>
          <th scope="row">Estado: </th>
          <td>{{ user.address.state }}</td>
        </tr>
        <tr>
          <th scope="row">País: </th>
          <td>{{ user.address.country }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'UserDetails',
  components: {
  },
  props: {
    user: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  }
}
</script>
