// =============================
//  1. FETCH GET
//  - Haz una petición GET a https://reqres.in/api/users
//  - Usa la respuesta de la promesa para mostrar en consola los nombres de 
//    los usuarios 
// =============================

fetch('https://reqres.in/api/users')
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach(user => {
      console.log(user.first_name);
    })
  })
  .catch((error) => console.log(error))

// =============================
//  2. FETCH GET
//  - Haz una petición GET a una url incorrecta https://reqres.in/kjdnwcojwn
//  - Usa la respuesta de la promesa para mostrar en consola el error
// =============================

fetch('https://reqres.in/lkjwdcnwk')
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
    else {
      throw new Error('Error en la petición');
    }
  })
  .then((response) => { console.log(response)})
  .catch((error) => console.log(error))

// =============================
// 3. FETCH POST
// - Haz una petición POST a https://reqres.in/api/users
// - Envía el body { name: 'Joe', surname: 'Smith': age: 32 }
// =============================

const user = {
  name: 'Joe',
  surname: 'Smith',
  age: 32
}

fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then((response) => response.json())
.then((response) => console.log(response))
.catch((error) => console.log(error))