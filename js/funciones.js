'use strict';

//Funcion que guarda un contacto
function guardarContacto(db, contacto){
    db.setItem(contacto.id, JSON.stringify(contacto));

    window.location.href='/'
}

//Funcion que carga contactos
function cargarContatos(db, parentNode){
    let claves = Object.keys(db);
    let clave;

    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave));

        crearContacto(parentNode, contacto, db);
    }
}

//Función crear listado
function crearContacto(parentNode, contacto, db){

    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('contacto');
    iconoBorrar.classList.add('material-icons', 'icono');

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);
    
    //Damos al boton borrar funcionalidad
    iconoBorrar.addEventListener('click', () => {
        db.removeItem(contacto.id);
        window.location.href = '/';
    });
}
