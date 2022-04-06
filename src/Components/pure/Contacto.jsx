import React, {useState} from 'react';

import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contactoclass';



const ContactoComponent = ({contacto}) => {
     
 
        const [stateCone, setIsCone] = useState(false);
      
        const fconectado=()=>{
            setIsCone(!stateCone);
        }
    
 
    return (
        <div>
       <h3>Nombre : { contacto.nombre }</h3>
       <h3>Apellido : { contacto.apellido }</h3>
       <h3>Corre : { contacto.correo }</h3>
       <button onClick={ fconectado }> { stateCone? "Esta Conectado":"No esta Conectadp"} </button>
       
        </div>
    );
};

  

ContactoComponent.propTypes = {
         contacto : PropTypes.instanceOf(Contacto)
};


export default ContactoComponent ;
