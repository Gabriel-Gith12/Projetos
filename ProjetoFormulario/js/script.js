const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".senha"),
      cadastro = document.querySelector(".cadastro-link"),
      usuario = document.querySelector(".usuario-link");

    // Navegar entre as abas Usuario e Cadastro
    cadastro.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    usuario.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    // Mostra e Ocultar a Senha
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })