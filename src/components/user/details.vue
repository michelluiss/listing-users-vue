<template>
  <div class="user-details">
    <div class="box-field">
      <label>Nome: {{ user.firstName }}</label>
    </div>
    <div class="box-field">
      <label>E-mail: {{ user.email }}</label>
    </div>
    <div class="box-field">
      <label>Telefone: {{ user.phone }}</label>
    </div>
    <div class="box-field">
      <label>Cep: {{ user.address.zipCode }}</label>
    </div>
    <div class="box-field">
      <label>Cidade: {{ user.address.city }}</label>
    </div>
    <div class="box-field">
      <label>Rua: {{ user.address.streetAddress }}</label>
    </div>
    <div class="box-field">
      <label>Estado: {{ user.address.state }}</label>
    </div>
    <div class="box-field">
      <label>País: {{ user.address.country }}</label>
    </div>
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
