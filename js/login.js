// 1a - guardo el formulario
const loginForm = document.getElementById('loginForm');
// 1b - Obtener los datos del formulario
loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const {email, password} = loginForm.nextElements;

    // 2 Chequear usuarios almacenados
    const users = JSON.parse(localStorage.getItem('users'))||[];

    const user = users.find((usr)=>{
        if (usr.email===email.value){
            return true;
        }
        return false;
    })
    if(!user || user.password !== password.value){
        alert('Los datos ingresados no son correctos');
        return;
    }
    localStorage.setItem('currentUser',JSON.stringify(user));
    alert('Login correcto');

}); 