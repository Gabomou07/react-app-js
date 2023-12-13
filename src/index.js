import React from 'react';
import ReactDOM from 'react-dom/client';

/////////////////////////////////////////////
//        Import                           //
/////////////////////////////////////////////
//Exportaciones individuales del componente//
/////////////////////////////////////////////

import { Greeting, UserCard } from '../src/Greeting';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
import { Posts } from './Posts';
import { Counter, Save } from './Counter';
import { Arrays } from './Arrays';

////////////////////////////////////////////////////////////////////
//     Import por defecto e individualeS                          //
////////////////////////////////////////////////////////////////////
//-Se nombra despues del importe por defecto                      //
//-El export default de nombra asi mismo y se exporta internamente//
//-Se pude llamar el nombre de la función  funcion ,{FIndividual} //
////////////////////////////////////////////////////////////////////

import Product, { Navbar } from '../src/Product';
import { Button } from '../src/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

///////////////////////////////////////////////////////////////////////////
//                      JSX                                              //
///////////////////////////////////////////////////////////////////////////
//-Los componentes de JSX simpre comienzan con la letra mayuscula        //
//-Pascal case es con la letra mayuscula al inicio                       //
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
//                                  Props                                //
///////////////////////////////////////////////////////////////////////////
//-Nos ayuda a como cambiar de manera internamente en un componente      //
//-Pascal case es con la letra mayuscula al inicio                       //
//-Para pasarle un parametro tengo q pasarle un atributo al tag del      //
//componente                                                             //
///////////////////////////////////////////////////////////////////////////

//las llavesitas son para interpretar codigo puede ser booleano,numero,string o un arreglo

//si hacemos una busqueda en el buscador como "Toogle Blockcomment" comentara todo lo seleccionado

//Función con los eventhandler

const HandleChange = e => {
  console.log(e.target.value);
};

const HandleSubmit = e => {
  console.log('enviando datos del form');
};

root.render(
  <>
    <Save />
    <Counter />
    <Arrays />
    <Posts />
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log('enviado');
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Send</button>
    </form>
    <TaskCard ready={true} />
    <Saludar />
    <input
      id="hola"
      onChange={
        HandleChange /*function*/
        //console.log(e)
        //console.log(e.target.value)
        //console.log("escribiendo en el input")
      }
    />
    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="Hola" name="Joel" />
    <Greeting title="Hola Mundo" name="Joe" />
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: '123 Main Street', city: 'New York' }}
      greet={function () {
        alert('Hello');
      }}
    />
    <UserCard
      name="Gabo Mou"
      amount={4000}
      married={false}
      points={[99, 33.3, 22.2]}
      address={{ street: 'Av.Las Gaviotas', city: 'Q importa' }}
      greet={function () {
        alert('Adios');
      }}
    />
  </>,
);
