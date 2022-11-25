window.addEventListener('load', function() {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    console.log('conexión exitosa');
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    let $ = (dato) => document.querySelector(dato)

    let title = $('#title')
    let rating = $('#rating')
    let awards = $('#awards')
    let release_date = $('#release_date')
    let length = $('#length')
    let genre_id = $('#genre_id')
    let divErrors = $('.errores')
    let btn = $('#btn')

    // Expresiones regulares
    let regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    let regExNumber = /^[+]?([0-9][0-9][0-9][0-9]?|0)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    // Funcion para validar el formulario
    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }
    let validation = {
        title: false,
        rating: false,
        awards: false,
        release_date: false,
        length: false,
        genre_id: false
    }

    title.focus()

    title.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                this.classList.add('is-invalid')
                validation.title = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#titleError').innerHTML = 'Este campo no debe estar vacio<br>'
                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validation.title = true
                $('#titleError').innerHTML = null
                divErrors.innerHTML = null
                break;
        }
        funcValidate(validation)
    })

    rating.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                this.classList.add('is-invalid')
                validation.rating = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#ratingError').innerHTML = 'Este campo no debe estar vacio<br>'
                break;
            case (this.value.trim()<0 || this.value.trim()>10):
                this.classList.add('is-invalid')
                validation.rating = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#ratingError').innerHTML = 'Solo se aceptan valores entre 0 y 10<br>'
                break
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validation.rating = true
                $('#ratingError').innerHTML = null
                divErrors.innerHTML = null
                break;
        }
        funcValidate(validation)
    })

    awards.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                this.classList.add('is-invalid')
                validation.awards = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#awardsError').innerHTML = 'Este campo no debe estar vacio<br>'
                break;
            case (this.value.trim()<0 || this.value.trim()>10):
                this.classList.add('is-invalid')
                validation.awards = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#awardsError').innerHTML = 'Solo se aceptan valores entre 0 y 10<br>'
                break

            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validation.awards = true
                $('#awardsError').innerHTML = null
                divErrors.innerHTML = null
                break;
        }
        funcValidate(validation)
    })

    release_date.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                this.classList.add('is-invalid')
                validation.release_date = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#release_dateError').innerHTML = 'Este campo no debe estar vacio<br>'
                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validation.release_date = true
                $('#release_dateError').innerHTML = null
                divErrors.innerHTML = null
                break;
        }
        funcValidate(validation)
    })

    length.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                this.classList.add('is-invalid')
                validation.length = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#lengthError').innerHTML = 'Este campo no debe estar vacio<br>'
                break;
            case (this.value.trim()<60 || this.value.trim()>360):
                this.classList.add('is-invalid')
                validation.length = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#lengthError').innerHTML = 'Solo se aceptan valores entre 60 y 360<br>'
                break
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validation.length = true
                $('#lengthError').innerHTML = null
                divErrors.innerHTML = null
                break;
        }
        funcValidate(validation)
    })

    genre_id.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                this.classList.add('is-invalid')
                validation.genre_id = false
                divErrors.classList.add('alert-warning')
                divErrors.innerHTML = 'Hay campos que contienen errores o no están completos'
                $('#genre_idError').innerHTML = 'Este campo no debe estar vacio<br>'
                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validation.genre_id = true
                $('#genre_idError').innerHTML = null
                divErrors.innerHTML = null
                break;
        }
        funcValidate(validation)
    })

})