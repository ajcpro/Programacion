---
title: "Tema 02: Entrada, salida y metodología de diseño"
css: ["../estilos/estilo.css", "../estilos/tema_02.css"]
---

# Entrada, salida y metodología de diseño

<a href="../pdf/tema_02.pdf" target="_blank" class="boton-descarga-top">📥 PDF</a>

<nav class="menu-flotante">
<input type="checkbox" id="menu-toggle" class="menu-checkbox">
<label for="menu-toggle" class="menu-boton">☰</label>
<div class="menu-contenido">
<h3>Contenido</h3>
<ul>
<li><a href="#el-lenguaje-java">El lenguaje Java</a></li>
<li><a href="#qué-necesitamos">Qué necesitamos</a></li>
<li><a href="#mi-primer-programa-en-java">Mi primer programa en Java</a></li>
<li><a href="#entorno-integrado-de-desarrollo">Entorno integrado de desarrollo</a></li>
<li><a href="#elementos-básicos-de-un-programa">Elementos básicos de un programa</a></li>
</ul>
</div>
</nav>

<section class="objetivos">
<h2>Objetivos</h2>

* Generar el entorno de desarrollo</li>
* Reconocer la estructura básica de un programa en Java</li>
* Comprender la diferencia entre sintaxis y semántica</li>
* Entender el uso de plantillas sintácticas</li>
* Ver la importancia de utilizar identificadores significativos</li>
* Reconocer los tipos primitivos</li>
* Conocer por qué hay diferentes tipos de datos numéricos con distintos rangos de valores</li>
* Apreciar la diferencia entre una clase en sentido abstracto y como construcción de Java</li>
* Ver la diferencia entre los objetos, en general, y su uso en Java</li>
* Reconocer la diferencia entre los tipos carácter y cadena y cómo se relacionan</li>
* Reconocer la diferencia entre constante y variable</li>
* Saber qué es una asignación</li>
* Comprender qué sucede cuando se invoca un método</li>
* Conocer qué es una biblioteca</li>
* Distinguir entre función y procedimiento</li>
* Escribir sentencias sencillas de entrada y salida en Java</li>

</section>

<section class="toc">
<h2>Contenido</h2>

* [El lenguaje Java]("#el-lenguaje-java"El lenguaje Java)
* [Qué necesitamos](#qué-necesitamos")
* [Mi primer programa en Java](#mi-primer-programa-en-java)
* [Entorno integrado de desarrollo]("#entorno-integrado-de-desarrollo")
* [Elementos básicos de un programa]("#elementos-básicos-de-un-programa")
  
</section>

---

## El lenguaje Java

A la hora de elegir un lenguaje de programación para aprender esta disciplina encontramos muchas y variadas opciones. Hoy en día se podría considerar que, como los lenguajes más populares son Python o JavaScript, estos deberían ser nuestros principales candidatos. De hecho, Python es reconocido como un lenguaje de programación ideal para principiantes por tener una sintaxis clara y legible...

Los siguientes enlaces lo son a diferentes listas elaboradas a partir de su popularidad:
* [Índice TIOBE](https://www.tiobe.com/tiobe-index/)
* [Índice PYPL](https://pypl.github.io/PYPL.html)

Como se puede ver, Java se encuentra en el Top 10 de la mayoría de clasificaciones. ¿Qué tiene Java de especial?

* **Tiene una sintaxis clara y legible:** Java es claro y fácil de entender...
* **Orientado a objetos:** Java es un lenguaje de programación orientado a objetos (OOP) donde los conceptos de objetos y clases son fundamentales.
* **Portabilidad:** Denominada *WORA* (Write Once, Run Anywhere).

---

## Qué necesitamos

Para hacer un programa, en cualquier lenguaje de programación, necesitamos un editor de textos y un compilador o intérprete. En el caso de Java, necesitamos instalar el **JDK (Java Development Kit)**.

Tras la instalación, abre una consola o terminal y comprueba la versión ejecutando:

<pre class="codigo-fuente">
java -version
</pre>

### Configuración de variables de entorno

Si el terminal no reconoce el comando, sigue estos pasos según tu sistema operativo:

#### Windows
1. Abre las *Propiedades del sistema*.
2. Haz clic en *Variables de entorno*.
3. Selecciona la variable `Path` y haz clic en *Editar*.
4. Agrega la ruta al directorio binario del JDK al final de la lista.

#### Linux y MacOS
Edita el fichero `~/.bash_profile` o `.profile` y añade:

<pre class="codigo-fuente">
export PATH=/ruta/al/JDK/bin:$PATH
</pre>

Ejecuta en tu terminal:
<pre class="codigo-fuente">
source ~/.bash_profile
</pre>

---

## Mi primer programa en Java

Abre tu editor de textos y escribe el siguiente código fuente:

<pre class="codigo-fuente">
public class MiPrimerPrograma {
    public static void main ( String[] args ) {
        System.out.println("Mi primer programa Java");
    }
}
</pre>

Guárdalo con el nombre exacto `MiPrimerPrograma.java`. Desde la terminal, navega hasta la carpeta y compílalo:

<pre class="codigo-fuente">
javac MiPrimerPrograma.java
</pre>

Para ejecutar el bytecode generado (`MiPrimerPrograma.class`), escribe:

<pre class="codigo-fuente">
java MiPrimerPrograma
</pre>

---

## Elementos básicos de un programa

## Sintaxis y semántica

Un lenguaje de programación es un conjunto de reglas, símbolos y palabras especiales.

<aside class="definicion">

  **Sintaxis:** Reglas formales que determinan la construcción de sentencias válidas en un lenguaje.

  **Semántica:** El conjunto de reglas que dan el significado de una sentencia del lenguaje.
  
  **Metalenguaje:** Lenguaje utilizado para describir las reglas sintácticas de otro lenguaje.

</aside>

---

### Plantillas sintácticas

Una plantilla sintáctica es un ejemplo genérico de la construcción lingüística que se está definiendo. Veamos una posible plantilla sintáctica para un programa en Java:

<pre class="plantilla-sintactica">
Programa:
{ImportDeclaration}{ClassDeclaration}

ClassDeclaration:
{ClassModifier} <span class="terminal">class</span> Identifier <span class="terminal">{</span> {ClassBodyDeclaration} <span class="terminal">}</span>
</pre>

Los datos en cursiva indican que son *no terminales*. Si un símbolo no está en bastardilla y aparece en rojo, significa que es un *símbolo terminal*, como la palabra clave <span class="terminal">class</span> y las llaves <span class="terminal">{ }</span>.

Echemos un vistazo a cómo se define un identificador en el metalenguaje:

<pre class="plantilla-sintactica">
Identifier:
IdentifierChars

IdentifierChars:
JavaLetter {JavaLetterOrDigit}

JavaLetter:
any Unicode character that is a "Java letter"
</pre>

<aside class="definicion">
  
  **Paquete:** Colección con nombre de clases de Java que puede ser utilizada por un programa.
  
  **Clase:** Definición de un objeto o programa de Java.
  
</aside>

---

### Tipos de datos primitivos

<table class="tabla-datos">
  <thead>
    <tr>
      <th>Nombre del tipo</th>
      <th>Tamaño usado (bits)</th>
      <th>Total de números representables</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>byte</strong></td>
      <td>8 (1 octeto)</td>
      <td>2<sup>8</sup> = 256</td>
    </tr>
    <tr>
      <td><strong>short</strong></td>
      <td>16 (2 octetos)</td>
      <td>2<sup>16</sup> = 65.536</td>
    </tr>
    <tr>
      <td><strong>int</strong></td>
      <td>32 (4 octetos)</td>
      <td>2<sup>32</sup> = 4.294.967.296</td>
    </tr>
    <tr>
      <td><strong>long</strong></td>
      <td>64 (8 octetos)</td>
      <td>2<sup>64</sup></td>
    </tr>
  </tbody>
</table>