// instalaremos axios para hacer llamadas a servicios externos
//axios llama apis

import axios from 'axios'

axios.get('https://pokeapi.co/api/v2/pokemon/gorka')
  .then(function (response) {
    // handle success
    console.log("success!!!!")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!!")
    console.log(error);
  })