let actual = 1;
const TOTAL_MODALES = 6;

const texto = `¡Feliz cumpleaños! 🤎🌸

Quería hacerte este pequeño detalle diferente
para recordarte lo especial que eres. Desearte un feliz cumple que Dios te siga bendiciendo espero este dia sea especial
y disfrutes con tu familia, que seas muy feliz y que cada sueño, meta este cada dia mas cerca para ti.

Gracias por permitirme compartir pequeños momentos contigo, soy malito diciendo y escribiendo pero
quiero que sepas que Te quiero, ultimamente te lo digo mucho, pero no esta de mas decirtelo una vez mas,
te has convertido en alguien muy especial para mi, espero seguir tratando de hacerte feliz, tratando de hacerte sacar una risa,
una sonrrisa u hacerte enojar jeje
y sobre todo hacerte sentir especial unica y la niña mas linda hermosaaa preciosa del mundo y gracias 
por tu alegría y por hacer mis días más lindos. 

¡Espero que hoy y siempre tengas un dia especial y la pases bien espero compartir muchos mas dias como este contigo mi sentido pesamee!!!!

ATT: Santiago`;

let i = 0;
let temporizadorTexto = null;

function validarFechaEspecial() {
    const selectDia = document.getElementById("diaFecha");
    const selectMes = document.getElementById("mesFecha");
    const msgFecha = document.getElementById("mensajeFecha");
    const bloqueFecha = document.getElementById("bloqueFecha");

    if (!selectDia || !selectMes) return true;

    const dia = parseInt(selectDia.value, 10);
    const mes = parseInt(selectMes.value, 10);

    if (!dia || !mes) {
        if (msgFecha) {
            msgFecha.textContent = "Elige el día y el mes para poder avanzar 📅✨";
            msgFecha.className = "mensaje-fecha error";
        }
        if (bloqueFecha) {
            bloqueFecha.classList.remove("sacudir");
            void bloqueFecha.offsetWidth;
            bloqueFecha.classList.add("sacudir");
        }
        return false;
    }

    if (dia === 28 && mes === 10) {
        if (msgFecha) {
            msgFecha.textContent = "¡Exacto! 28 de octubre, el día más especial 🤎🌸";
            msgFecha.className = "mensaje-fecha exito";
        }
        return true;
    } else {
        if (msgFecha) {
            msgFecha.textContent = "Mmm... ¡esa fecha no es! Pista: 28 de octubre 🤭🌸";
            msgFecha.className = "mensaje-fecha error";
        }
        if (bloqueFecha) {
            bloqueFecha.classList.remove("sacudir");
            void bloqueFecha.offsetWidth;
            bloqueFecha.classList.add("sacudir");
        }
        return false;
    }
}

function alCambiarFecha() {
    const selectDia = document.getElementById("diaFecha");
    const selectMes = document.getElementById("mesFecha");
    const msgFecha = document.getElementById("mensajeFecha");
    if (!selectDia || !selectMes || !msgFecha) return;

    const dia = parseInt(selectDia.value, 10);
    const mes = parseInt(selectMes.value, 10);

    if (dia === 28 && mes === 10) {
        msgFecha.textContent = "¡Fecha correcta! 28 de octubre ✨ Dale a Continuar 🤎";
        msgFecha.className = "mensaje-fecha exito";
    } else if (dia && mes) {
        msgFecha.textContent = "Esa fecha no es... intenta de nuevo 🤭";
        msgFecha.className = "mensaje-fecha error";
    } else {
        msgFecha.textContent = "";
        msgFecha.className = "mensaje-fecha";
    }
}

function mostrarModal(num) {
    for (let m = 1; m <= TOTAL_MODALES; m++) {
        const el = document.getElementById("modal" + m);
        if (el) {
            el.classList.toggle("activo", m === num);
        }
    }
    actual = num;
}

function siguiente(num) {
    if (num === 1) {
        if (!validarFechaEspecial()) {
            return;
        }
    }

    const modalActual = document.getElementById("modal" + num);
    if (modalActual) {
        modalActual.classList.remove("activo");
    }

    const proximo = document.getElementById("modal" + (num + 1));
    if (proximo) {
        proximo.classList.add("activo");
        actual = num + 1;
    } else {
        iniciarFinal();
    }
}

function anterior(num) {
    if (num <= 1) return;
    mostrarModal(num - 1);
}

function iniciarFinal() {
    const finalEl = document.getElementById("final");
    finalEl.classList.add("visible");
    window.scrollTo({ top: 0, behavior: "smooth" });
    lanzarDestellosCorazones(16);
    reiniciarEscritura();
}

function reiniciarEscritura() {
    if (temporizadorTexto) {
        clearTimeout(temporizadorTexto);
    }
    i = 0;
    const contenedorMensaje = document.getElementById("mensaje");
    if (contenedorMensaje) {
        contenedorMensaje.innerHTML = "";
    }
    escribirTexto();
}

function escribirTexto() {
    const contenedorMensaje = document.getElementById("mensaje");
    const hojaCarta = document.querySelector(".hoja-carta");
    if (!contenedorMensaje) return;

    if (i < texto.length) {
        contenedorMensaje.innerHTML += texto.charAt(i);
        i++;
        if (hojaCarta && i % 12 === 0) {
            hojaCarta.scrollTop = hojaCarta.scrollHeight;
        }
        temporizadorTexto = setTimeout(escribirTexto, 32);
    }
}

function destacarFoto(elementoTarjeta, leyenda) {
    const imgTarjeta = elementoTarjeta.querySelector("img");
    const fotoFinal = document.getElementById("fotoFinal");
    const leyendaPrincipal = document.getElementById("leyendaPrincipal");

    if (imgTarjeta && fotoFinal) {
        fotoFinal.style.opacity = "0.35";
        setTimeout(() => {
            fotoFinal.src = imgTarjeta.src;
            fotoFinal.style.opacity = "1";
        }, 140);
    }
    if (leyendaPrincipal && leyenda) {
        leyendaPrincipal.textContent = leyenda;
    }
    const contenedorFoto = document.querySelector(".contenedor-foto-principal");
    if (contenedorFoto) {
        contenedorFoto.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function volverAlInicio() {
    const finalEl = document.getElementById("final");
    if (finalEl) {
        finalEl.classList.remove("visible");
    }
    mostrarModal(1);
}

/* ==================== CORAZONES Y DETALLES PASTEL FLOTANTES ==================== */
function crearCorazonFlotante() {
    const contenedor = document.getElementById("contenedor-corazones");
    if (!contenedor) return;

    const simbolos = ["🤎", "🌸", "✨", "🌷", "🤍"];
    const item = document.createElement("span");
    item.className = "corazon-flotante";
    item.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    item.style.left = Math.random() * 94 + "vw";
    item.style.fontSize = (14 + Math.random() * 14) + "px";
    const duracion = 6 + Math.random() * 5;
    item.style.animationDuration = duracion + "s";

    contenedor.appendChild(item);
    setTimeout(() => {
        item.remove();
    }, duracion * 1000);
}

function lanzarDestellosCorazones(cantidad) {
    for (let k = 0; k < cantidad; k++) {
        setTimeout(crearCorazonFlotante, k * 160);
    }
}

setInterval(crearCorazonFlotante, 1300);
