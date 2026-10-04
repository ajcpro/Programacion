---
title: "Ejercicios Tema 03: Estructuras de programación"
css: ["../estilos/estilo.css"]
---

# Ejercicios: Tema 03

1. Explica qué es un token y qué es un separador. Indica qué función desempeña cada uno en el análisis léxico de un programa.
2. En el siguiente fragmento:
    <pre class="codigo-java">
    int numero = 25;
    System.out.println(numero);
    </pre>
    Identifica los diferentes tokens que aparecen y clasifícalos como palabra reservada, identificador, literal, operador o separador.
3. Indica qué función cumplen los espacios, tabuladores y saltos de línea desde el punto de vista del análisis léxico de Java. ¿Podría escribirse un programa completo en una sola línea?
4. Indica cuáles de los siguientes elementos son literales:
    <pre class="codigo-fuente">
    25
    numero
    "25"
    '2'
    true
    false
    null
    MAXIMO
    2.5
    0xFF
    </pre>
    Clasifícalos además según el tipo de valor que representan.
5. Indica cuáles de los siguientes elementos son palabras reservadas de Java y cuáles pueden ser identificadores:
    <pre class="codigo-fuente">
    while
    Mientras
    int
    Integer
    class
    Clase
    true
    verdadero
    return
    retorno
    for
    FOR
    </pre>
6. Explica por qué true, false y null no pueden utilizarse como identificadores.
7. Según la plantilla sintáctica de Identifier, indica si los siguientes identificadores son válidos en Java:
    <pre class="codigo-fuente">
    numero
    2numero
    numero2
    _numero
    numero_2
    true
    null
    class
    miNumero
    mi numero
    </pre>
    Justifica los casos inválidos.
8. Observa la siguiente plantilla sintáctica:
    <div class="plantilla-sintactica">
    <div class="produccion">
    <div class="produccion-encabezado">Literal:</div>
    <div class="produccion-alternativas">
    IntegerLiteral<br>
    FloatingPointLiteral<br>
    BooleanLiteral<br>
    CharacterLiteral<br>
    StringLiteral<br>
    NullLiteral
    </div>
    </div>
    </div>
    ¿De cuántas alternativas dispone Literal? ¿Qué significa que aparezcan varias alternativas?
9. Interpreta la siguiente producción:
    <div class="plantilla-sintactica">
    <div class="produccion">
    <div class="produccion-encabezado">IntegerLiteral:</div>
    <div class="produccion-alternativas">
    DecimalNumeral<br>
    HexNumeral<br>
    OctalNumeral<br>
    BinaryNumeral
    </div>
    </div>
    </div>
    ¿Qué cuatro formas de representación de un entero permite?
10. Indica cuáles de los siguientes literales enteros son válidos en Java y, cuando sean válidos, qué valor representan:
    <pre class="codigo-fuente">
    26
    026
    0x1A
    0b11010
    0X1a
    012
    08
    0b102
    1_000_000
    1__000
    </pre>
11. Indica qué diferencia existe entre `5`, `5.0` y `5L` desde el punto de vista del tipo del literal.
12. Indica qué tipo tendrá cada uno de los siguientes literales:
    <pre class="codigo-fuente">
    10
    10L
    10.0
    10.0f
    true
    'A'
    " A "
    null
    </pre>
13. Indica cuáles de las siguientes construcciones son expresiones y qué tipo de valor producen al evaluarse:
    <pre class="codigo-fuente">
    5 + 3
    5 > 3
    !true
    numero
    numero = 5
    </pre>
14. Calcula el resultado de las siguientes expresiones suponiendo que todas las variables son de tipo int:
    <pre class="codigo-fuente">
    10 + 3 * 2
    (10 + 3) * 2
    18 / 5
    18 % 5
    7 + 4 * 3 - 2
    20 / 4 * 3
    20 / (4 * 3)
    </pre>
15. Repite el ejercicio anterior indicando además qué operadores se han aplicado y en qué orden.
16. Indica si las siguientes expresiones producen un resultado entero, real o booleano:
    <pre class="codigo-fuente">
    7 / 2
    7.0 / 2
    7 % 2
    7 > 2
    7 == 2
    7 + 2.0
17. Explica la diferencia entre los operadores de igualdad (==) y asignación (=). ¿Qué problema produciría confundirlos en una selección?
18. Indica cuáles de las siguientes expresiones son válidas en Java:
    <pre class="codigo-fuente">
    a < b
    a <= b
    a == b
    a = b
    a && b
    a < b < c
    </pre>
    Supón que a, b y c son variables de tipo int.
19. Supón que a y b son variables de tipo boolean. Indica cuáles de las siguientes expresiones son válidas:
    <pre class="codigo-fuente">
    a == b
    a != b
    a < b
    a && b
    a || b
    </pre>
20. Completa la tabla de verdad de:
    <pre class="codigo-fuente">
    !p
    p && q
    p || q
    </pre>
    para todos los valores posibles de p y q.
21. Sin ejecutar el programa, indica qué expresiones se evalúan cuando x vale 5:
    <pre class="codigo-java">
    if (x < 0 && obtenerDato())
    ...
    </pre>
    y cuando x vale -5.
    Explica la respuesta teniendo en cuenta la evaluación en cortocircuito.
22. Haz lo mismo con:
    <pre class="codigo-java">
    if (x > 0 || obtenerDato())
    ...
    </pre>
    para x = 5 y x = -5.
23. Explica por qué el orden de los operandos de && y || puede ser importante en Java.
24. Calcula el resultado de las siguientes expresiones teniendo en cuenta la precedencia de los operadores:
    <pre class="codigo-fuente">
    3 + 4 * 2
    10 - 6 / 2
    2 + 3 * 4 > 10
    5 > 2 && 8 < 10
    5 > 2 || 8 > 10
    ! (5 > 2)
    </pre>
25. Añade paréntesis a las siguientes expresiones para dejar explícito el orden de evaluación que corresponde a las reglas de precedencia:
    <pre class="codigo-fuente">
    a + b * c
    a < b && c < d
    a + b > c * d
    a == b || c != d && e > f
    </pre>
26. Explica qué significa que dos operadores tengan la misma precedencia y cómo interviene la asociatividad para determinar el orden de evaluación.
27. Considera:
    <pre class="codigo-fuente">
    int a = 4;
    int b = 9;
    int c = 2;
    </pre>
    Indica qué valor queda almacenado en a después de cada una de las siguientes sentencias, considerándolas independientes:
    <pre class="codigo-fuente">
    a = b;
    a = a + b;
    a = a * c + b;
    a = b % c;
    </pre>
28. Indica qué ocurre con el tipo de resultado en las siguientes expresiones:
    <pre class="codigo-fuente">
    int + int
    int + long
    int + float
    long + double
    </pre>
29. Explica qué significa que un operando sea promocionado a un tipo más amplio durante la evaluación de una expresión.
30. Indica qué tipo tendrá cada resultado:
    <pre class="codigo-fuente">
    int a = 5;
    double b = 2.0;
    a + b
    a * b
    a / b
    </pre>
31. Explica qué ocurre al convertir explícitamente:
    <pre class="codigo-fuente">
    double x = 7.8;
    int y = (int) x;
    </pre>
    ¿Qué valor contiene y?
32. Calcula los resultados de:
    <pre class="codigo-fuente">
    (int) 7.9
    (int) -7.9
    (double) 7
    (char) 65
    </pre>
33. Explica por qué una conversión explícita puede provocar pérdida de información.

[Tema3](../temas/tema_03.html) | [Problemas](../problemas/tema_03.html)