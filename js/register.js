// 1 - Obtener formulario y almacenarlo en una variable js
const registerForm = document.querySelector('#registerForm');
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
        showAlert('las password no coinciden','warning')
        console.warn('El password no coincide');
        return;
    }

     // c- Verificar si hay en el localStorage algún usuario guardado ya con ese email.
     
        //I- Obtener los usuarios guardados en el localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExist =checkIfUserExist(users,el.email.value);
        if(userExist){
            showAlert('Ese email ya se encuentra registrado','error')
            return;
        }


    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password.value,
        email: el.email.value,
        gender: el.gender.value,
        date: el.date.value
    }
    // insertar en array el nuevo objeto
    users.push(user);
    
    //e- Guardar en el localStorage
    localStorage.setItem('users',JSON.stringify(users));  // se guarda todo el array en el localStorage

    //f- Limpiar el formulario o podemos llevar al usuario a la página de login
    registerForm.reset();
    //window.location.href ='/pages/login/login.html'

})

function checkIfUserExist(users,emailtoSearch){
            // distintos 3 métodos
        // existe retorno y muestra un alerta, no existe y sigue con la sintaxis normal.                          
     /*  SOLUCION 1 SE REPITE EN TODO EL ARRAY
        let userEmailExist = false;
     users.forEach(usr => {
            if(usr.email === el.email.value){
                console.warn('El usuario ya existe');
                userEmailExist=true;
            }
        }); */
        // SOLUCION 2
/*    const userExist = users.find(user => {
        if (user.email=== el.email.value){
            return true;
        }
        return false // no es necesario pues retorna undefined solo para que quede mas claro
    })    
    if (userExist) {
        console.warn('El usuario ya existe find');
        return;
    }
*/
    // Solución 3
    const indexOfUser=users.findIndex(us =>{
        if (us.email=== emailtoSearch){
            return true; //solo trabaja dentro del findIndex
        }
    })
    if (indexOfUser >= 0) { //todo se pone así porque si el primer registro es el encontrado es cero y cero es falso

        console.warn('El usuario ya existe findIndex');
        //! ** retorno de mi función **
        return true;
    }
    return false;
}


// todo función que envia distintos mensajes de alerta a pantalla, pasando frase y tipo : error, warning, ok (por defecto)
function showAlert(text, type = 'sucess') {
    // * VAMOS A HACER NUESTRO ALERT CUSTOM
    // Crea unm elemento HTML Node
    
    const alertDialog = document.createElement('div');
    // Añade una clase
    alertDialog.classList.add('alert-dialog');
    alertDialog.innerText = text;
    document.body.appendChild(alertDialog);
    
    if(type === 'error') {
        alertDialog.style.backgroundColor = 'red';
    }
    if(type === 'warning') {
        alertDialog.style.backgroundColor =  'orangered'
    }
    // Para demorar su aparición luego de haberlo creado lineas anterior con document createElement
    setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)
        // window.location.href = '/pages/login/login.html'     
    }, 3000);

}