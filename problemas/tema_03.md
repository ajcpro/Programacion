---
title: "Problemas Tema 03: Estructuras de programación"
css: ["../estilos/estilo.css"]
---

# Problemas: Tema 03

## 1. Suma de múltiplos en un intervalo

Escribe un programa que lea dos números enteros `A` y `B`, compruebe que `A <= B` y vuelva a solicitar los datos si no se cumple esta condición. A continuación, calculará la suma de los números comprendidos estrictamente entre ambos extremos que sean múltiplos de 3. Si no hay ninguno, deberá mostrar que la suma es cero.

## 2. Tabla de multiplicar validada

Escribe un programa que solicite un entero comprendido entre 1 y 10. Mientras el valor introducido esté fuera del intervalo, se volverá a solicitar. Una vez validado, se mostrará la tabla de multiplicar del número desde 1 hasta 10, con una línea por operación y el formato `8 * 3 = 24`.

## 3. Estadística de un número conocido de mediciones

El programa solicitará cuántas mediciones se van a introducir. El número de mediciones deberá ser positivo. Después leerá esa cantidad de valores reales y mostrará la suma, la media, el máximo y el mínimo.

## 4. Estadística de una secuencia terminada por centinela

Escribe un programa que lea números enteros hasta que se introduzca el cero. El cero indica el final de la secuencia y no debe formar parte de los datos procesados. El programa mostrará la cantidad de datos introducidos, su suma, cuántos son positivos y cuántos negativos. También calculará la media si se ha introducido al menos un dato.

## 5. Validación y clasificación de notas

Escribe un programa que solicite una nota comprendida entre 0 y 10, ambos incluidos, y repita la petición mientras el dato se encuentre fuera del intervalo. Una vez validada, mostrará su calificación según estos criterios:

* Desde 0 hasta menos de 5: insuficiente.
* Desde 5 hasta menos de 6: suficiente.
* Desde 6 hasta menos de 7: bien.
* Desde 7 hasta menos de 9: notable.
* Desde 9 hasta 10: sobresaliente.

## 6. Divisores propios

Escribe un programa que lea un entero positivo `N` y muestre sus [divisores propios](https://es.wikipedia.org/wiki/Divisibilidad#Factor_o_divisor_propio), excluyendo al propio `N`. Si no hay divisores propios positivos distintos de 1, el programa deberá indicarlo claramente. Además de mostrar los divisores, calculará su suma.

## 7. Determinación de un número primo

Escribe un programa que lea un entero y determine si es [primo](https://es.wikipedia.org/wiki/N%C3%BAmero_primo). El programa deberá considerar que los números menores que 2 no son primos. Para los demás, comprobará si existe algún divisor distinto de 1 y del propio número. Cuando encuentre un divisor, deberá evitar seguir realizando comprobaciones que ya no sean necesarias.

## 8. Cálculo del factorial

El [factorial](https://es.wikipedia.org/wiki/Factorial) de un entero positivo `N` se define como el producto de todos los enteros comprendidos entre 1 y `N`. Escribe un programa que solicite un entero entre 1 y 20, ambos incluidos, y calcule su factorial.

Utiliza una variable de tipo `long` para el resultado. Si el dato está fuera del intervalo, deberá volver a solicitarse. Comprueba el resultado para varios valores, incluido el límite superior permitido.

## 9. Mínimo común múltiplo

Escribe un programa que lea dos enteros positivos y calcule su [mínimo común múltiplo](https://es.wikipedia.org/wiki/M%C3%ADnimo_com%C3%BAn_m%C3%BAltiplo) a partir del MCD, calculado mediante el algoritmo de Euclides.

Realiza también una traza de los valores de entrada 48 y 18.

## 10. Números perfectos hasta un límite

Un [número perfecto](https://es.wikipedia.org/wiki/N%C3%BAmero_perfecto) es un entero positivo igual a la suma de sus divisores propios. Escribe un programa que solicite un límite superior `N` y muestre todos los números perfectos comprendidos entre 2 y `N`. Al terminar, mostrará cuántos números perfectos ha encontrado.

## 11. Calculadora con menú repetitivo

Escribe un programa que muestre un menú con las opciones siguientes:

1. Sumar dos números.
2. Restar dos números.
3. Multiplicar dos números.
4. Dividir dos números.
5. Terminar.

Mientras no se elija la opción 5, el programa solicitará la opción y realizará la operación elegida. Para las operaciones aritméticas se leerán dos operandos. La división será real y deberá comprobarse que el divisor no sea cero. Una opción no válida dará lugar a un mensaje informativo y el menú volverá a mostrarse.

## 12. Juego de adivinación

Escribe un programa que genere un entero aleatorio entre 1 y 100, ambos incluidos. El usuario deberá intentar adivinarlo. Después de cada intento, el programa indicará si el número secreto es mayor o menor que el valor introducido. El proceso se repetirá hasta acertar. Al finalizar, el programa mostrará el número de intentos realizados.

Utiliza `Math.random()` para generar el número secreto.

[Tema3](../temas/tema_03.html)
