<template>
  <div class="register-users-form">
    <form action="">
      <h4>Dados pessoais</h4>
      <div class="personal-info">
        <div class="box-input pr-2">
          <label>Nome</label>
          <input type="text" v-model="user.firstName">
        </div>
        <div class="box-input pl-2">
          <label>Sobrenome</label>
          <input type="text" v-model="user.lastName">
        </div>
        <div class="box-input pr-2">
          <label>E-mail</label>
          <input type="text" v-model="user.email">
        </div>
        <div class="box-input pl-2">
          <label>Telefone</label>
          <input type="text" v-model="user.phone">
        </div>
      </div>
      <h4>Dados gerais</h4>
      <div class="general-info">
        <div class="box-input pr-2">
          <label>CEP</label>
          <input type="text" v-model="user.address.zipCode">
        </div>
        <div class="box-input pl-2">
          <label>Cidade</label>
          <input type="text" v-model="user.address.city">
        </div>
        <div class="box-input pr-2">
          <label>Rua</label>
          <input type="text" v-model="user.address.streetAddress">
        </div>
        <div class="box-input pl-2">
          <label>Estado</label>
          <input type="text" v-model="user.address.state">
        </div>
        <div class="box-input pr-2">
          <label>País</label>
          <input type="text" v-model="user.address.country">
        </div>
        <button type="submit" class="submit-button" @click="saveUser($event)">Salvar</button>
        <!-- <div class="box-input">
          <label></label>
          <input type="text" v-model="user.address.geo.latitude">
        </div>
        <div class="box-input">
          <label>Telefone</label>
          <input type="text" :value="user.address.geo.longitude">
        </div> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterUserForm',
  components: {
  },
  props: {
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: null,
        address: {
          zipCode: null,
          city: '',
          streetAddress: '',
          country: '',
          state: '',
          geo: {
            latitude: -20.467075,
            longitude: -45.427328
          }
        }
      }
    }
  },
  methods: {
    saveUser(e) {
      e.preventDefault()
      this.$store.dispatch('users/createUser', this.user)
    }
  }
}
</script>
