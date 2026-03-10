function siguiente(num){
    const actual = document.getElementById("modal"+num)
    const siguienteModal = document.getElementById("modal"+(num+1))
    
    // Ocultar el modal actual
    actual.classList.add("oculto-modal")
    
    if(siguienteModal){
        // Mostrar siguiente modal
        siguienteModal.classList.remove("oculto-modal")
    } else {
        // Mostrar contenedor final solo al final
        const fondo = document.querySelector(".fondo")
        fondo.classList.remove("oculto-final")
        escribirMensaje()
    }
}

// Texto que se escribe
const texto = "Hoy cariño quiero deserte un feliz cumpleaños a esa mona linda, trabajadora, luchadora y mucho más. Que Dios te siga bendiciendo y te de mucha salud y felicidad. Quiero agradecerte por dejarme compartir un poquito de ti, que sepas que te quiero mucho mucho y eres muy importante para mí, una personita que quisiera al lado mío, y ya te lo he dicho pero estoy para ti, para sacarte una sonrisa, para robarte un beso y sobre todo para ayudarte y espero que hoy sea un día muy lindo para ti TE QUIERO MUCHOOOO💖"

let i = 0

function escribirMensaje(){
    const mensaje = document.getElementById("mensaje")
    const velocidad = 50
    
    function escribir(){
        if(i < texto.length){
            mensaje.innerHTML += texto.charAt(i)
            mensaje.scrollTop = mensaje.scrollHeight // scroll automático
            i++
            setTimeout(escribir, velocidad)
        }
    }
    
    escribir()
}