////////////////////////////////////////////////////////////////////////
//Forma n1 de exportar componentes y crear funciones dentro de otras  //
////////////////////////////////////////////////////////////////////////

export function Greeting({ title, name }) {
  ///////////////////////////////////////////////////////////////////////////
  //                         console.log()                                 //
  ///////////////////////////////////////////////////////////////////////////
  //1.Depuración: Puedes imprimir valores de variables o expresiones       //
  //para comprender su estado o sus valores en un momento específico.      //
  // Ejemplo:  let x = 10; console.log("El valor de x es:", x);            //
  ///////////////////////////////////////////////////////////////////////////
  //2.Seguimiento del Flujo de Ejecución: Puedes utilizar console.log()    //
  //para seguir el flujo de ejecución de tu programa y  ver en qué parte   //
  // del código se encuentra.                                              //
  // Ejemplo:  console.log("Iniciando la función principal");              //
  //           console.log("Finalizando la función principal");            //
  ///////////////////////////////////////////////////////////////////////////
  //3.Mensajes de Confirmación: Puedes utilizar console.log() para         //
  //imprimir mensajes que confirmen que ciertas partes de tu código se     //
  //están ejecutando correctamente.                                        //
  // function processData(data) {                                          //
  //  console.log("Datos recibidos:", data);                               //
  // ... código para procesar los datos ...                                //
  //               }                                                       //
  ///////////////////////////////////////////////////////////////////////////
  //4.Pruebas Rápidas: Puedes usar console.log() para realizar pruebas     //
  //para seguir el flujo de ejecución de tu programa y  ver en qué parte   //
  // verificar si tu código está produciendo los resultados esperados.     //
  // Ejemplo: function sum(a, b) {console.log("Sumando:", a, "+", b);      //
  //  return a + b;}                                                       //
  ///////////////////////////////////////////////////////////////////////////

  console.log(title, (name = 'User'));

  const user = {
    // firstname: 'Gabriel',
    // lastname: 'Vega',
  };

  //se puede tener funciones dentro de funciones

  function add(x, y) {
    return x + y;
  }

  const married = true;

  return (
    // <div>
    //   <h1>{married.toString()}</h1>
    //   <span>{add(10, 30)}</span>
    //   <p>Componente de REACT</p>
    // </div>
    <h1>
      {title} {''},dice {name}
    </h1>
  );

  //to string para cambiar booleanos a texto

  /*const married = true;
    return <h1>{married ? 'estoy casado 🥵' : 'no estoy casado'}</h1>;*/
}

export function UserCard({name,amount,address,married,points,greet}) {
    console.log("Aqui estoy",name,amount,address,married,points,greet)
  const user = {
    firstname: 'Gabriel',
    lastname: 'Vega',
  };
  return (
    <div>
      <p>{user.firstname}</p>
      <span>{user.lastname}</span>
      <h1>{name}</h1>
      <h2>{amount}</h2>
      <h3>{married ? "married":"Single"}</h3>
      <h4>{points}</h4>
      <ul>
        <li>Street: {address.street}</li>
        <li>City: {address.city}</li>
      </ul>
    </div>
  );
}
