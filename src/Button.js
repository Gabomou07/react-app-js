import PropTypes from "prop-types"


////////////////////////////////////////////////////////////////////////////
//                       Propstype                                        //   
////////////////////////////////////////////////////////////////////////////
//Es para q le pases un  tipo de datos Array,String,booleano,numero o un  //
//objeto.                                                                 //
// Valor por defecto si se le pone el atributo en el componente, desestruc//
// turarlo                                                                //

export function Button({text,/*name="User"*/name}){
    console.log(text)
    if(!text){
        console.error("el texto es requerido")
    }
    return <button onClick={function (){
        console.log("Hola Mundo")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text:PropTypes.string.isRequired
}

//Otra forma de definir un valor por defecto

Button.defaultProps = {
    name: "Some User"
}


