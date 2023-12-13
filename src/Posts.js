/////////////////////////////////////////////////////////////////////
//                            Fetch Api                            //
/////////////////////////////////////////////////////////////////////
// 1)Realizar Solicitudes HTTP: Fetch se utiliza principalmentepara//
// realizar solicitudes HTTP a recursos externos, como un servidor //
//Puedes usarlo para obtener datos, enviar datos, actualizar       //
//recursos, o eliminar recursos a través de los diferentes métodos //
//HTTP (GET, POST, PUT, DELETE, etc.).                             //
// Ejemplo:                                                        //
//  fetch('https://api.example.com/data')                          //
//  .then(response => response.json())                             //
//  .then(data => {                                                //
//   Hacer algo con los datos                                      //
//  })                                                             //
//  .catch(error => {                                              //
// Manejar errores                                                 //
//  });                                                            //
/////////////////////////////////////////////////////////////////////
//2)Configuración de Opciones: Puedes configurar opciones como el  //
//método HTTP, encabezados, y el cuerpo de la solicitud utilizando //
// un objeto de opciones como el segundo parámetro de la función   //
// fetch.                                                          //
//                 Ejemplo                                         //
//fetch('https://api.example.com/data', {                          //
//    method: 'POST',                                              //
//    headers: {                                                   //
//       'Content-Type': 'application/json',                       //
//       // Otros encabezados                                      //
//     },                                                          //
//     body: JSON.stringify({ key: 'value' }),                     //
//   })                                                            //
//     .then(response => response.json())                          //
//     .then(data => {                                             //
// Hacer algo con los datos                                        //
//     })                                                          //
//     .catch(error => {                                           //
// Manejar errores                                                 //
//     });                                                         //
/////////////////////////////////////////////////////////////////////
//3)Interactuar con JSON: Fetch facilita la interacción con datos  //
//en formato JSON. Puedes usar el método json() del objeto Response//
//para obtener y parsear automáticamente los datos JSON.           //
//                            Ejemplo                              //
//fetch('https://api.example.com/data')                            //
//  .then(response => response.json())                             //
//  .then(data => {                                                //
// Hacer algo con los datos JSON                                   //
//  })                                                             //
//  .catch(error => {                                              //
// Manejar errores                                                 //
//  });                                                            //
/////////////////////////////////////////////////////////////////////
//Aprendete Async Away y Callbacks si quieres saber est de pie a cabeza

import { VscBug } from "react-icons/vsc";

export const Posts = () => {
  return (
  <button onClick={HandlerDatosAPI}>
    <VscBug/>
    Traer Datos
    </button>
    )
}

const HandlerDatosAPI = (e) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}
