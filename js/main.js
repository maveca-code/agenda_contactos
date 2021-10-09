'use strict'

window.addEventListener('load', () => {
    const nombre = document.querySelector('.nombre');
    const numero = document.querySelector('.numero');
    const direccion = document.querySelector('.direccion');
    const btnAgregarTarea = document.querySelector('.agregar-tarea')

    const listado = document.querySelector('.listado');

    const db = window.localStorage

    //Al hacer click en el boton genera un JSON con la información del listado
    btnAgregarTarea.addEventListener('click', () => {
        let contacto = {
            id: Math.random(1, 100),
            nombre: nombre.value,
            numero: numero.value,
            direccion: direccion.value
        }

        //Llamamos a la función que guardara la informacion
        guardarContacto(db, contacto);
    });

    if (db.length == 0) {
        let divContacto = document.createElement('div');
        let info = document.createElement('h3');

        info.innerHTML = "NO HAS AGREGADO NINGÚN CONTACTO";
        divContacto.classList.add('info');

        divContacto.appendChild(info);
        listado.appendChild(divContacto);
    } else {
        //Llamamos a la función que carga los contactos
        cargarContatos(db, listado);
    }

});