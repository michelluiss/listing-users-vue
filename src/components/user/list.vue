<template>
  <div class="list">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Sobrenome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>37 99999-9999</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>37 99999-9999</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>37 99999-9999</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  props: {
    msg: String
  }
}
</script>
