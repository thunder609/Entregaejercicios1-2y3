import React from 'react';
import PropTypes from 'prop-types';
import ContactoComponent from '../pure/Contacto';
import { Contacto } from '../../models/Contactoclass';


const ContactlistComponent = () => {
    const defautlContacto = new Contacto('oswaldo', 'pacheco', 'pedro@pedro.com', false) ; 
        return (
        <div>
             <div>
                 <h1>
                     <ContactoComponent contacto={defautlContacto}></ContactoComponent>
                     
                 </h1>
             </div>
        </div>
    );
};





export default ContactlistComponent;
