import './Task.scss';
////////////////////////////////////////////////////////////
//                  Estilos en linea                      //
////////////////////////////////////////////////////////////
// Los primeros estilos en ser aplicados                  //
// Pueden entrar todos los estilos posibles               //
// Formas de agregar estilos                              //
//webpack hace cargar los estilos e imagenes dentro de    //
//javascript                                              //
//No te olvides de instalar el Sass con npm install sass  //
////////////////////////////////////////////////////////////

export function TaskCard({ ready }) {
  //   const CardStyles = {background:"#000000",color:"#fff",padding:"20px"}

  //    const titleStyle = {fontWeight:"lighter"}

  return (
    <div className="card" /*style={CardStyles}*/>
      <h1 /*style={titleStyle}*/>Mi primer tarea</h1>
      <span
        className={ready ? 'bg-green' : 'bg-red'}
        //style={ready ? {background:"green"} : {background:"red"}}*/
      >
        {ready ? 'Tarea Realizada' : 'Tarea Pendiente'}
      </span>
    </div>
  );
}
