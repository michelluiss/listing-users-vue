<template>
  <div class="register-users-page">
    <Header></Header>
    <div class="container">
      <h1>Registro de Usuários</h1>
      <Register></Register>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import Register from '../components/user/register'

export default {
  name: 'RegisterUser',
  components: {
    Header,
    Register
  },
  props: {
    msg: String
  }
}
</script>
