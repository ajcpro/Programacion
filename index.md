---
title: "Programación"
css: ["../estilos/estilo.css"]
---

<style>
.layout-dos-columnas {
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 0; /* Sin espaciado superior cuando colapsa en vertical */
}

.columna-indice {
    flex: 1 1 10;
}

.columna-texto {
    flex: 1 1;
    min-width: 320x;
    /* Alineación inferior en el contenedor flex */
    align-self: flex-end; 
}

/* Solo aplicamos la posición pegajosa (sticky) cuando la pantalla 
   es lo bastante ancha para que no colapse a una sola columna */
@media (min-width: 680px) {
    .columna-texto {
        position: sticky;
        bottom: 2rem;
    }
}

blockquote.cita-dijkstra {
    text-align: right;
    font-style: italic;
    border-left: none; /* Elimina la línea lateral típica de los blockquotes */
    padding: 0;
    /* width restringe el ancho; margin-left: auto empuja el bloque a la derecha */
    width: 65%;
    margin: 2rem 0 0 auto;
}

blockquote.cita-dijkstra .autor {
    display: block;
    font-style: normal;
    font-weight: bold;
    margin-top: 0.5rem;
}
</style>

<div class="layout-dos-columnas">

<div class="columna-indice">

# Índice

<nav>

* [Tema 01: Lenguajes y técnicas de programación](temas/tema_01.html)
* [Tema 02: Entrada, salida y metodología de diseño](temas/tema_02.html)
* [Tema 03: Estructuras de programación](temas/tema_03.html)
* Tema 04: Fundamentos de la POO
* Tema 05: Gestión de errores y excepciones
* Tema 06: Desarrollo de clases y paquetes
* Tema 07: Estructuras: Vectores y matrices
* Tema 08: Manejo de cadenas y expresiones regulares
* Tema 09: Herencia y polimorfismo
* Tema 10: Interfaces y composición
* Tema 11: Colecciones y genéricos
* Tema 12: Persistencia en ficheros
* Tema 13: Interfaces Gráficas de Usuario (GUI)
* Tema 14: Documentos de intercambio (XML/JSON)
* Tema 15: Bases de datos relacionales (JDBC)
* Tema 16: Bases de datos orientadas a objetos

</nav>

</div>

<div class="columna-texto">

Apuntes del módulo programación.

<blockquote class="cita-dijkstra">
  «En cuanto a la ausencia de bibliografía, no ofrezco ni explicaciones ni disculpas»
  <span class="autor">— Edsger Dijkstra</span>
</blockquote>

</div>

</div>
