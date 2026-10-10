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
8. Observa la siguiente plantilla sintáctica:<div class="plantilla-sintactica">
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
9. Interpreta la siguiente producción:<div class="plantilla-sintactica">
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
34. Indica qué clase envolvente corresponde a cada tipo primitivo:
    <pre class="codigo-fuente">
    byte
    short
    int
    long
    float
    double
    char
    boolean
    </pre>
35. Identifica qué operaciones corresponden a *boxing* y cuáles a *unboxing*:
    <pre class="codigo-java">
    Integer n = 5;
    int m = n;
    Double x = 4.5;
    double y = x;
    </pre>
36. Indica qué clase envolvente utilizarías para transformar el texto `"123"` en un `int` y qué método utilizarías para ello.
37. Explica qué diferencia conceptual existe entre convertir un `String` a un valor numérico y realizar un *cast* entre tipos numéricos.
38. ¿Qué problema resuelve la biblioteca estándar de Java? ¿Qué relación existe entre una biblioteca, un paquete, una clase y un método?
39. Explica qué significa la siguiente expresión:
    <pre class="codigo-java">
    Math.sqrt(25)
    </pre>
Identifica la clase, el método y el argumento.
40. Indica qué elemento proporciona cada una de las siguientes expresiones:
    <pre class="codigo-java">
    Math.PI
    Math.abs(-8)
    Math.pow(2, 3)
    Math.round(3.6)
    Math.floor(3.6)
    </pre>
41. Indica qué resultado produce:
    <pre class="codigo-java">
    (int) (Math.random() * 10)
    </pre>
    ¿Qué valores enteros puede producir?
42. ¿Por qué la expresión anterior no puede producir el valor `10`?
43. Escribe, utilizando la fórmula estudiada en el tema, una expresión que produzca un entero aleatorio entre `20` y `50`, ambos incluidos.
44. Explica qué problema resuelve una importación estática como:
    <pre class="codigo-java">
    import static java.lang.Math.sqrt;
    </pre>
    ¿Cómo cambiaría una llamada a `sqrt`?
45. Explica la diferencia entre una expresión y una sentencia.
46. Clasifica como expresión o sentencia:
    <pre class="codigo-fuente">
    a + b
    a = b
    System.out.println(a)
    a > b
    </pre>
47. Explica qué es un bloque de código y qué caracteres lo delimitan en Java.
48. Considera:
    <pre class="codigo-java">
    int a = 10;
    {
        int b = 20;
        System.out.println(a);
        System.out.println(b);
    }
    System.out.println(a);
    </pre>
¿Qué variables pueden utilizarse en cada una de las tres llamadas a `println`?
49. ¿Qué ocurre con una variable declarada dentro de un bloque cuando la ejecución abandona dicho bloque?
50. Explica por qué dos variables pueden tener el mismo nombre si están declaradas en bloques diferentes y sus ámbitos no se solapan.
51. Explica con tus palabras qué es el flujo de control de un programa.
52. Indica la diferencia entre el orden en el que aparecen las sentencias en el código y el orden en el que pueden ejecutarse.
53. Considera:
    <pre class="codigo-java">
    int a = 10;
    int b = 20;
    int suma = a + b;
    System.out.println(suma);
    </pre>
Indica qué instrucciones se ejecutan y en qué orden.
54. Explica por qué una secuencia constituye una estructura de control aunque no cambie explícitamente el flujo lineal de ejecución.
55. Indica qué ocurre con el flujo de control en una selección simple cuando la condición es verdadera y cuando es falsa.
56. Explica la diferencia entre:
    <pre class="codigo-java">
    if ( condicion )
        sentencia;
    </pre>
    y
    <pre class="codigo-java">
    if ( condicion )
        sentencia1;
    else
        sentencia2;
    </pre>
57. Indica cuántas sentencias de las siguientes se ejecutan en cada caso:
    <pre class="codigo-java">
    if ( a > 10 )
        System.out.println("A");
    System.out.println("B");
    </pre>
    para `a = 5` y `a = 20`.
58. Explica qué problema puede producir el siguiente fragmento:
    <pre class="codigo-java">
    if ( a > 0 );
        System.out.println("Positivo");
    </pre>
    ¿Se ejecutará siempre la segunda sentencia?
59. Reescribe el siguiente código utilizando una selección compuesta:
    <pre class="codigo-java">
    if ( nota >= 5 )
        System.out.println("Aprobado");
    </pre>
para que también se muestre `"Suspenso"` cuando corresponda.
60. Indica qué camino seguirá el siguiente programa si `nota` vale `8`:
    <pre class="codigo-java">
    if ( nota >= 9 )
        System.out.println("Sobresaliente");
    else if ( nota >= 7 )
        System.out.println("Notable");
    else if ( nota >= 5 )
        System.out.println("Aprobado");
    else
        System.out.println("Suspenso");
    </pre>
61. ¿Cuántas condiciones se evalúan si `nota` vale `8`? ¿Y si vale `3`?
62. Explica por qué la estructura anterior puede considerarse una selección encadenada aunque no exista una sentencia `if-else-if` independiente en la gramática de Java.
63. Reescribe conceptualmente mediante un operador ternario:
    <pre class="codigo-java">
    if ( edad >= 18 )
        tipo = "mayor";
    else
        tipo = "menor";
    </pre>
64. Explica por qué el operador ternario es una expresión y no debe utilizarse para sustituir indiscriminadamente a cualquier `if-else`.
65. Indica a qué `if` pertenece cada `else` del siguiente fragmento:
    <pre class="codigo-java">
    if ( a > 0 )
        if ( b > 0 )
            System.out.println("A");
        else
            System.out.println("B");
    </pre>
Explica la regla que utiliza Java.
66. Indica para qué tipo de problema resulta especialmente apropiado un `switch` frente a una secuencia de `if-else-if`.
67. En el siguiente `switch`, indica qué se imprime si `dia` vale `2`:
    <pre class="codigo-java">
    switch ( dia )
        case 1:
            System.out.println("Lunes");
            break;
        case 2:
            System.out.println("Martes");
            break;
        default:
            System.out.println("Otro");
    }
    </pre>
68. Explica qué es el *fall-through* de un `switch` y cómo puede utilizarse deliberadamente para agrupar varios `case`.
69. Indica qué restricciones deben cumplir las constantes utilizadas en las etiquetas `case`.
70. Explica la diferencia entre una sentencia `switch` tradicional y una *switch expression*.
71. ¿Qué función desempeñan `->` y `yield` en una *switch expression*?
72. Explica qué diferencia fundamental existe entre una selección y una repetición respecto al flujo de control.
73. Indica qué es una iteración.
74. Considera:
    <pre class="codigo-java">
    int numero = 1;

    while ( numero <= 5 )
        System.out.println(numero);
        numero = numero + 1;
    }
    </pre>
    Haz una traza en papel indicando el valor de `numero` y el resultado de la condición en cada comprobación.
75. ¿Cuántas iteraciones realiza el siguiente bucle?
    <pre class="codigo-java">
    int numero = 10;

    while ( numero < 5 )
        numero++;
    </pre>
76. Explica por qué un `while` puede realizar cero iteraciones.
77. Explica qué problema presenta el siguiente código:
    <pre class="codigo-java">
    int numero = 1;

    while ( numero <= 5 )
        System.out.println(numero);
    </pre>
78. ¿Es necesariamente un error sintáctico un bucle infinito? Razona la respuesta.
79. Explica qué caracteriza a un bucle controlado por condición.
80. Diferencia entre:
    a. bucle controlado por valor centinela
    b. bucle controlado por bandera
    c. bucle controlado por fin de flujo
81. Indica qué valor centinela elegirías para una aplicación que lea edades válidas entre `0` y `120`.
82. Explica por qué el centinela debe poder distinguirse inequívocamente de los datos válidos.
83. Indica qué representa la variable `finalizado` en un bucle controlado por bandera.
84. Explica la diferencia fundamental entre `while` y `do-while`.
85. Indica cuál de los dos utilizarías en cada situación:
    a. Leer datos hasta encontrar un `0`, pudiendo ser el primer dato el propio `0`.
    b. Solicitar al usuario una nota hasta que esté entre `0` y `10`.
    c. Mostrar números mientras un contador siga dentro de un intervalo.
86. Convierte conceptualmente el siguiente `while` en un `do-while`, sin cambiar el significado:
    <pre class="codigo-java">
    while ( dato < 1 || dato > 10 )
        dato = teclado.nextInt();
    </pre>
¿Qué condición inicial necesitas para que ambas estructuras tengan realmente el mismo comportamiento?
87. Explica por qué una entrada de datos que debe realizarse necesariamente una primera vez es un ejemplo natural para `do-while`.
88. Enumera los cuatro componentes fundamentales de un bucle controlado por contador.
89. Identifica esos cuatro componentes en:
    <pre class="codigo-java">
    for ( int i = 1; i <= 10; i++ )
        System.out.println(i);
    </pre>
90. Escribe la forma equivalente mediante `while`:
<pre class="codigo-java">
    for ( int i = 1; i <= 10; i++ )
        System.out.println(i);
    </pre>
91. Explica qué parte de un `for` se ejecuta una única vez, cuál antes de cada iteración y cuál después de cada iteración.
92. Haz una traza del siguiente bucle:
    <pre class="codigo-java">
    for ( int i = 2; i <= 10; i += 2 )
        System.out.println(i);
    </pre>
93. Escribe los valores que toma el contador en:
    <pre class="codigo-java">
    for ( int i = 10; i >= 1; i -= 2 ) {
        ...
    }
    </pre>
94. Explica qué error produciría intercambiar accidentalmente el sentido de actualización del contador respecto de la condición.
95. ¿Qué es un error *off-by-one*? Pon un ejemplo sencillo relacionado con un intervalo del 1 al 10.
96. Escribe tres formas equivalentes, cuando se utilizan como sentencias independientes, de incrementar `contador` en una unidad.
97. Indica qué diferencia existe entre:
    <pre class="codigo-java">
    contador++;
    ++contador;
    </pre>
    cuando aparecen como sentencias independientes.
98. Explica la diferencia entre:
    <pre class="codigo-java">
    int a = contador++;
    </pre>
    y
    <pre class="codigo-java">
    int a = ++contador;
    </pre>
99. Haz una traza de:
    <pre class="codigo-java">
    int contador = 5;
    int a = contador++;
    int b = ++contador;
    </pre>
    indicando el valor de `contador`, `a` y `b`.
100. Haz lo mismo con los operadores de decremento:
    <pre class="codigo-java">
    int contador = 5;
    int a = contador--;
    int b = --contador;
    </pre>
101. Completa las equivalencias:
    <pre class="codigo-fuente">
    contador += 5
    contador -= 3
    contador *= 2
    contador /= 4
    contador %= 3
    </pre>
utilizando solamente el operador `=`.
102. Indica qué valor queda en `x` después de cada una de las siguientes sentencias, suponiendo inicialmente `x = 10`:
    <pre class="codigo-java">
    x += 5;
    x -= 3;
    x *= 2;
    x /= 4;
    x %= 3;
    </pre>
    Considera cada caso de forma independiente.
103. Explica por qué `contador += 1` y `contador++` pueden producir el mismo estado final cuando se utilizan como sentencias independientes, aunque no sean la misma construcción sintáctica.
104. Elige entre `if`, `if-else`, `switch`, `while`, `do-while` y `for` para cada una de las siguientes situaciones:
    a. Mostrar un mensaje únicamente si una edad es mayor de edad.
    b. Elegir una acción entre tres opciones de un menú.
    c. Leer datos hasta que aparezca un valor especial.
    d. Mostrar los números del 1 al 100.
    e. Solicitar una contraseña hasta que sea correcta, debiendo solicitarla al menos una vez.
105. Para cada una de las situaciones anteriores, explica por qué las demás estructuras serían menos apropiadas.
106. Haz sobre el papel la traza completa del siguiente programa:
   <pre class="codigo-java">
    int i = 1;
    int suma = 0;

    while ( i <= 4 ) {
        suma += i;
        i++;
    }

    System.out.println(suma);
    </pre>
    Indica los valores de `i` y `suma` antes y después de cada iteración.
107. Haz una traza del siguiente programa e indica exactamente qué se imprime:
    <pre class="codigo-java">
    for ( int i = 1; i <= 3; i++ ) {
        for ( int j = 1; j <= i; j++ )
            System.out.print(j + " ");
        System.out.println();
    }
    </pre>
108. Explica, sin escribir código, qué estructura o combinación de estructuras utilizarías para resolver cada uno de los siguientes algoritmos:
    a. Obtener el mayor de tres valores.
    b. Mostrar todos los números pares entre dos valores.
    c. Leer una serie de valores hasta encontrar un valor especial.
    d. Mostrar una tabla de multiplicar.
    e. Clasificar una calificación en cuatro categorías.
    f. Repetir una solicitud hasta que el dato sea válido.
109. Observa el siguiente código y localiza cualquier posible problema lógico relacionado con el flujo de control:
    <pre class="codigo-java">
    int i = 1;

    while ( i <= 10 ) {
        System.out.println(i);
        i--;
    }
    </pre>
    Explica qué ocurre y por qué.
110. Explica qué elementos de un bucle debes comprobar sistemáticamente cuando realizas una revisión manual de un algoritmo repetitivo.

[Tema3](../temas/tema_03.html) | [Problemas](../problemas/tema_03.html)