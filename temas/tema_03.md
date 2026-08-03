---
title: "Tema 03: Estructuras de programación"
css: ["../estilos/estilo.css", "../estilos/tema_03.css"]
---

# Estructuras de programación

<a href="../pdf/tema_03.pdf" target="_blank" class="boton-descarga-top">📥 PDF</a>

<nav class="menu-flotante">
<input type="checkbox" id="menu-toggle" class="menu-checkbox">
<label for="menu-toggle" class="menu-boton">☰</label>
<div class="menu-contenido">
<h3>Contenido</h3>
<ul>
<li><a href="#introducción">Introducción</a></li>
<li><a href="#análisis-léxico-y-componentes-del-lenguaje">Análisis léxico y componentes del lenguaje</a>
<ul>
<li><a href="#concepto-de-token-y-separador">Concepto de Token y separador</a></li>
<li><a href="#palabras-reservadas">Palabras reservadas</a></li>
</ul>
</li>
<li><a href="#expresiones-y-operadores">Expresiones y Operadores</a>
<ul>
<li><a href="#operadores">Operadores</a></li>
<li><a href="#evaluación-en-cortocircuito">Evaluación en cortocircuito</a></li>
<li><a href="#precedencia-y-asociatividad">Precedencia y asociatividad</a></li>
</ul>
</li>
<li><a href="#conversión-de-tipos">Conversión de tipos</a>
<ul>
<li><a href="#reglas-de-promoción">Reglas de promoción</a></li>
<li><a href="#conversión-explícita">Conversión explícita</a></li>
<li><a href="#clases-envolventes">Clases envolventes</a></li>
</ul>
</li>
<li><a href="#uso-de-la-biblioteca-estándar">Uso de la biblioteca estándar</a>
<ul>
<li><a href="#la-clase-math">La clase Math</a></li>
</ul>
</li>
<li><a href="#instrucciones">Instrucciones</a>
<ul>
<li><a href="#sentencias">Sentencias</a></li>
<li><a href="#bloques-y-ámbito">Bloques y ámbito</a></li>
</ul>
</li>
<li><a href="#el-flujo-de-ejecución">El flujo de ejecución</a>
<ul>
<li><a href="#concepto-de-flujo-de-control">Concepto de flujo de control</a></li>
<li><a href="#estructuras-secuenciales">Estructuras secuenciales</a></li>
</ul>
</li>
<li><a href="#selección">Selección</a>
<ul>
<li><a href="#selección-simple">Selección simple</a></li>
<li><a href="#selección-compuesta">Selección compuesta</a></li>
<li><a href="#selección-múltiple">Selección múltiple</a></li>
<li><a href="#lógica-de-anidamiento">Lógica de anidamiento</a></li>
</ul>
</li>
<li><a href="#repetición">Repetición</a>
<ul>
<li><a href="#sentencia-while">Sentencia while</a></li>
<li><a href="#bucles-controlados-por-condición">Bucles controlados por condición</a></li>
<li><a href="#bucles-controlados-por-contador">Bucles controlados por contador</a></li>
<li><a href="#diseño-de-bucles">Diseño de bucles</a></li>
</ul>
</li>
<li><a href="#depuración-y-verificación">Depuración y verificación</a>
<ul>
<li><a href="#trazas-de-ejecución">Trazas de ejecución</a></li>
<li><a href="#errores-comunes">Errores comunes</a></li>
</ul>
</li>
</ul>
</div>
</nav>

<section class="objetivos">
<h2>Objetivos</h2>

* Comprender la diferencia entre análisis léxico, sintaxis y semántica.
* Identificar los componentes léxicos de Java.
* Construir y evaluar expresiones matemáticas y lógicas.
* Utilizar métodos de la biblioteca estándar de Java.
* Reconocer los distintos tipos de sentencias.
* Entender el concepto de flujo de control.
* Desarrollar algoritmos iterativos.
* Realizar trazas de ejecución.

</section>

<section class="toc">
<h2>Contenido</h2>

* [Introducción](#introducción)
* [Análisis léxico y componentes del lenguaje](#análisis-léxico-y-componentes-del-lenguaje)
    * [Concepto de Token y separador](#concepto-de-token-y-separador)
    * [Palabras reservadas](#palabras-reservadas)
* [Expresiones y Operadores](#expresiones-y-operadores)
    * [Operadores](#operadores)
    * [Evaluación en cortocircuito](#evaluación-en-cortocircuito)
    * [Precedencia y asociatividad](#precedencia-y-asociatividad)
* [Conversión de tipos](#conversión-de-tipos)
    * [Reglas de promoción](#reglas-de-promoción)
    * [Conversión explícita](#conversión-explícita)
    * [Clases envolventes](#clases-envolventes)
* [Uso de la biblioteca estándar](#uso-de-la-biblioteca-estándar)
    * [La clase Math](#la-clase-math)
* [Instrucciones](#instrucciones)
    * [Sentencias](#sentencias)
    * [Bloques y ámbito](#bloques-y-ámbito)
* [El flujo de ejecución](#el-flujo-de-ejecución)
    * [Concepto de flujo de control](#concepto-de-flujo-de-control)
    * [Estructuras secuenciales](#estructuras-secuenciales)
* [Selección](#selección)
    * [Selección simple](#selección-simple)
    * [Selección compuesta](#selección-compuesta)
    * [Selección múltiple](#selección-múltiple)
    * [Lógica de anidamiento](#lógica-de-anidamiento)
* [Repetición](#repetición)
    * [Sentencia while](#sentencia-while)
    * [Bucles controlados por condición](#bucles-controlados-por-condición)
    * [Bucles controlados por contador](#bucles-controlados-por-contador)
    * [Diseño de bucles](#diseño-de-bucles)
* [Depuración y verificación](#depuración-y-verificación)
    * [Trazas de ejecución](#trazas-de-ejecución)
    * [Errores comunes](#errores-comunes)

</section>

## Introducción

Hasta este punto de nuestro aprendizaje, hemos comprendido que un programa de ordenador es, en esencia, un algoritmo escrito para ser ejecutado por una máquina. En el tema anterior, exploramos los cimientos: aprendimos a declarar variables, a reconocer tipos de datos primitivos y a utilizar la biblioteca estándar de Java para realizar operaciones de entrada/salida básicas. Sin embargo, si analizamos los programas que hemos construido, observaremos que todos comparten una característica común: son puramente lineales. El ordenador se limita a ejecutar una instrucción tras otra, en el estricto orden físico en que fueron escritas.

No obstante, la programación en el «mundo real» y la resolución de problemas técnicos complejos en entornos productivos requieren una sofisticación mucho mayor. El pensamiento computacional no es una simple sucesión de pasos, sino un tejido o «urdimbre» donde cada hebra lógica debe entrelazarse con precisión. Para lograr esto, un lenguaje de programación debe ser entendido como un conjunto de reglas, símbolos y palabras que nos permiten modelar la realidad.

El proceso por el cual el ordenador interpreta nuestras intenciones comienza con el análisis léxico. Cuando el compilador recibe nuestro código fuente, su primera tarea es identificar tokens, elementos con significado propio que el compilador separa gracias a delimitadores. Como sucede en el lenguaje natural, no podemos formar una oración coherente amontonando palabras, en los lenguajes de programación combinamos estos componentes léxicos para formar expresiones. Algo como n + 1, por sí solo, es solo un valor latente; para que sea algo capaz de realizar una tarea, debe integrarse en una estructura que le dé sentido, como una asignación, por ejemplo.

La verdadera potencia del software reside en la capacidad de romper la linealidadd el código para establecer un flujo de control. Este define el orden en que las sentencias se ejecutan realmente durante la actividad de la aplicación. Para ilustrarlo, podemos usar la analogía de la conducción: ir por un tramo recto de carretera equivale a una estructura secuencial; sin embargo, al llegar a una bifurcación, debemos tomar una decisión basada en una condición o quizás necesitemos dar varias vueltas hasta encontrar un lugar donde aparcar.

Profundizaremos aquí en cómo construir expresiones y conoceremos la selección y la iteración, herramientas que nos permitirán empezar a desarrollar algoritmos inteligentes, capaces de tomar decisiones autónomas y procesar información de forma eficiente, sentando así las bases necesarias antes de adentrarnos en los fundamentos de la programación orientada a objetos.

## Análisis léxico y componentes del lenguaje

### Concepto de Token y separador

### Palabras reservadas

## Expresiones y Operadores

### Operadores

### Evaluación en cortocircuito

### Precedencia y asociatividad

## Conversión de tipos

### Reglas de promoción

### Conversión explícita

### Clases envolventes

## Uso de la biblioteca estándar

### La clase Math

## Instrucciones

### Sentencias

### Bloques y ámbito

## El flujo de ejecución

### Concepto de flujo de control

### Estructuras secuenciales

## Selección

### Selección simple

### Selección compuesta

### Selección múltiple

### Lógica de anidamiento

## Repetición

### Sentencia while

### Bucles controlados por condición

### Bucles controlados por contador

### Diseño de bucles

## Depuración y verificación

### Trazas de ejecución

### Errores comunes

<footer class="pie">
<div class="navegacion-principal">
<a href="tema_02.html" class="anterior">Anterior</a> | 
<a href="../index.html" class="inicio">Inicio</a> | 
<a href="tema_04.html" class="siguiente">Siguiente</a>
</div>
  
<div class="navegacion-secundaria">
<!-- Renderizar solo si existen en el tema -->
<a href="ejercicios.html">Ejercicios</a>
<!--a href="problemas.html">Problemas</a-->
</div>
</footer>