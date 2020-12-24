#### Sobre a API onde os dados serão consumidos e salvos:

Nesse repositório existe uma pasta server onde se encontra a API que será utilizada para consumo dos dados e cadastro do usuário.

Essa API roda no endereço http://localhost:3000 e o único recurso que possui é o de Users.

| MÉTODO | URI         | AÇÃO                      |
| ------ | ----------- | ------------------------- |
| GET    | /users      | Lista todos os usuários   |
| GET    | /users/{id} | Lista um usuário pelo Id  |
| POST   | /users      | Cria um usuário           |
| PUT    | /users/{id} | Edita um usuário pelo Id  |
| DELETE | /users/{id} | Deleta um usuário pelo Id |

Essa API foi desenvolvida utilizado a biblioteca **json-server** toda a documentação está disponível no seguinte endereço: https://github.com/typicode/json-server. Na documentação dela você encontrar a descrição de como realizar paginação e ordenação dos dados.

Todos os dados são Fake e a nível de exemplo, a cada vez que você mata e executa novamente o servidor eles mudam.

###### Exemplo para a chamada GET http://localhost:3000/users/1 .

```json
{
  "id": 1,
  "firstName": "Tertuliano",
  "lastName": "Macedo",
  "email": "Feliciano.Santos84@gmail.com",
  "phone": "+55 (37) 7839-4248",
  "address": {
    "zipCode": "24226",
    "city": "Município de Talita",
    "streetAddress": "9654 Carvalho Avenida",
    "country": "Svalbard & Jan Mayen Islands",
    "state": "Amazonas",
    "geo": {
      "latitude": "-54.5261",
      "longitude": "-150.6626"
    }
  }
}
```

###### Para executar o servidor:

```bash
cd server
npm install
npm start
```
