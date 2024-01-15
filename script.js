/*
axios.get('url')
axios.delete('url')
axios.head('url')
axios.options('url')
axios.post('url', { ...dados })
axios.put('url', { ...dados })
axios.patch('url', { ...dados })
*/

// todos 
function getAllPubli(){
  axios.get('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => {
    // console.log(response.data)
  })
  .catch((error) => console.log(error))
}
getAllPubli()

// específico
function getPubli1(){
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    // console.log(response.data)
  })
  .catch((error) => console.log(error))
}
getPubli1()

// POST
function postPubli(){
  axios.post('https://jsonplaceholder.typicode.com/posts/', {
    userId: 1,
    title: 'teste title',
    body: 'teste body',
  })
  .then((response) => {
    // se tudo der certo, vai ser criado!
  })
  .catch((error) => console.log(error))
}
postPubli()

// alterar
function putPubli(){
  // dependendo da API, pode ser um PATCH ao invés do PUT
  axios.patch('https://jsonplaceholder.typicode.com/posts/2',{ 
  title: 'teste 2 title',
  body: 'teste 2 body',
  }) 
  .then((response) => {
    // se tudo der certo, vai ser atualizado!
  })
  .catch((error) => console.log(error))
}
putPubli()

// deletar 
function delPubli(){
  axios.delete('https://jsonplaceholder.typicode.com/posts/4',{
  }) 
  .then((response) => {
    // se tudo der certo, vai ser removido!
  })
  .catch((error) => console.log(error))
}
