// 1 - Obtener formulario y almacenarlo en una variable js
const registerForm = document.querySelector('#register');
    //a - Obtener botón de submit
const registerBtn = document.getElementById('registerSubmit');

//2 Vamos a escuchar el elemento directamente en JS
registerForm.addEventListener('submit', (event)=>{console.log('Submit Event');
    //a- preventDefault
    event.preventDefault();
    //b- Tomar datos y armar el objeto usuario
    const el = event.target.elements;
    console.log(el);

    //d- Verificar que los datos ingresados de password y rpassword son exactamente iguales
    if (el.password.value !== el.rpassword.value){
        console.warn('El password no coincide');
        return;
    }

     // c- Verificar si hay en el localStorage algún usuario guardado ya con ese email.
     const users = JSON.parse(localStorage.getItem('users'));
        //I- Obtener los usuarios guardados en el localStorage
        //II-  Recorrer el array con forEach
        // distintos métodos
        // existe retorno y muestra un alerta, no existe y sigue con la sintaxis normal.                          


    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password.value
        /*email:
        gender:
        */
    }
   
    //e- Guardar en el localStorage
    //f- Limpiar el formulario o podemos llevar al usuario a la página de login

})