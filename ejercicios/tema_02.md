---
title: "Ejercicios Tema 02: Entrada, salida y metodología de diseño"
css: ["../estilos/estilo.css"]
---

# Ejercicios: Tema 02

1. ¿Qué diferencia existe entre la sintaxis y la semántica de un lenguaje de programación?
2. Indica si cada uno de los siguientes ejemplos presenta un problema de sintaxis o de semántica y explica por qué:
   * Una sentencia de declaración sin el punto y coma final.
   * Una variable de tipo `int` a la que se pretende asignar una cadena.
   * Una palabra reservada escrita con mayúsculas cuando el lenguaje distingue entre mayúsculas y minúsculas.
3. ¿Qué es una plantilla sintáctica y para qué sirve?
4. Observa la siguiente plantilla sintáctica:
   ```text
   Programa: {ImportDeclaration} ClassDeclaration
   ```
   ¿Qué elemento es obligatorio? ¿Qué elemento puede aparecer varias veces? ¿Puede no aparecer ninguna declaración de importación?
5. Observa la plantilla de una declaración de variable que aparece en el tema. Indica cuáles de las siguientes declaraciones son válidas y cuáles no:
   * `int edad;`
   * `String nombre;`
   * `char inicial, letra;`
   * `int;`
   * `String nombre apellido;`
   * `public int contador;`
6. Utilizando la plantilla sintáctica correspondiente, escribe tres formas distintas de declarar variables de tipo `int`, `double` y `String`.
7. ¿Por qué una plantilla sintáctica puede utilizar palabras y símbolos que deben aparecer literalmente en el programa y, al mismo tiempo, nombres que representan otras construcciones sintácticas?
8. Indica si los siguientes identificadores son válidos en Java. En los que no lo sean, explica el motivo:
   * `Nombre`
   * `2nombre`
   * `nombre_apellido`
   * `nombre-apellido`
   * `Public`
   * `dato2`
   * `nombre completo`
9. Explica por qué `nombre` y `Nombre` son dos identificadores diferentes en Java.
10. ¿Por qué no es recomendable utilizar identificadores formados por una sola letra, salvo en los casos en que tenga sentido hacerlo?
11. Indica qué representa cada identificador de los siguientes fragmentos: una clase, una variable, una instancia o un método.
    * `String nombre;`
    * `Scanner teclado;`
    * `teclado.next();`
    * `MiPrograma.main(...)`
12. ¿Qué diferencia existe entre un tipo primitivo y una clase como `String`?
13. ¿Qué es una variable? ¿Qué información debemos indicar al declararla?
14. ¿Qué diferencia existe entre declarar una variable y darle un valor?
15. Explica qué sucede en memoria cuando se declara una variable pero todavía no se le ha asignado un valor.
16. Indica cuáles de los siguientes elementos son literales:
    * `25`
    * `Edad`
    * `'A'`
    * `"A"`
    * `True`
    * `TAMAÑO`
17. ¿Qué diferencia existe entre un literal y una constante con nombre? Indica alguna ventaja de utilizar una constante con nombre.
18. Escribe una declaración de constante con nombre para representar:
    * El número máximo de alumnos de una clase;
    * El nombre de un ciclo formativo;
    * La inicial de un nombre.
19. El siguiente código contiene varios errores. Indícalos y corrígelo:

    <pre class="codigo-java">
    int edad
    String nombre;
    nombre = Antonio;
    inicial = "A";
    </pre>

20. ¿Qué diferencia existe entre una declaración y una asignación?
21. Explica qué sucede al ejecutar cada una de las siguientes sentencias, suponiendo que las variables han sido declaradas correctamente:
    * `nombre = "Antonio";`
    * `nombre = "María";`
    * ¿Qué valor conserva finalmente `nombre`?
22. Explica por qué la siguiente construcción no representa una ecuación matemática válida en Java:
    ```java
    x + y = z;
    ```
23. ¿Qué significa que una variable sea de un determinado tipo? ¿Qué relación existe entre el tipo de una variable y los valores que puede almacenar?
24. Dadas las siguientes declaraciones:
    ```java
    String nombre;
    String apellido;
    char inicial;
    ```
    indica cuáles de las siguientes asignaciones son válidas:
    * `nombre = "Ana";`
    * `apellido = "García";`
    * `inicial = 'G';`
    * `inicial = "G";`
    * `nombre = apellido;`
25. ¿Por qué podemos utilizar el operador `+` para concatenar cadenas? ¿Qué resultado se obtiene al concatenar dos cadenas?
26. Si:
    ```java
    String nombre = "Ana";
    String apellido = "López";
    ```
    indica el resultado de las siguientes expresiones:
    * `nombre + apellido`
    * `nombre + " " + apellido`
    * `"Nombre: " + nombre`
    * `"Nombre: " + nombre + " " + apellido`
27. ¿Qué ocurre cuando se concatena una cadena con un valor de un tipo primitivo?
28. Explica la diferencia entre las siguientes dos instrucciones:
    * `System.out.print("Hola");`
    * `System.out.println("Hola");`
29. ¿Qué es una llamada a un método?
30. En la siguiente llamada:
    ```java
    System.out.println("Hola");
    ```
    identifica:
    * La clase;
    * El objeto;
    * El método;
    * El argumento.
31. En la siguiente llamada:
    ```java
    String nombre = teclado.next();
    ```
    identifica la expresión que produce el valor que se almacena en `nombre`. ¿Qué diferencia existe entre esta llamada y `System.out.println(...)`?
32. Explica la diferencia entre una función y un procedimiento.
33. Indica cuáles de las siguientes llamadas corresponden a una función y cuáles a un procedimiento, según la distinción estudiada en el tema:
    * `teclado.next()`
    * `teclado.nextLine()`
    * `System.out.print(...)`
    * `System.out.println(...)`
34. ¿Qué es una biblioteca? ¿Qué ventaja proporciona al programador?
35. ¿Qué es un paquete y para qué sirve?
36. Explica para qué sirve una sentencia `import`.
37. ¿Qué diferencia existe entre escribir:
    ```java
    import java.util.Scanner;
    ```
    y utilizar directamente una clase que pertenece a `java.lang`, como `String`?
38. La clase `Scanner` se encuentra en un paquete de la biblioteca estándar. Explica qué necesitamos hacer para poder utilizarla en un programa.
39. ¿Qué diferencia existe entre `System.in` y `System.out`?
40. ¿Qué hace el objeto `Scanner` cuando utilizamos sus métodos de lectura?
41. ¿Qué diferencia existe entre `next()`, `nextLine()` y `nextInt()`?
42. Supongamos que la entrada contiene:
    ```text
    Ana López
    ```
    ¿Qué obtendríamos mediante `next()` en dos llamadas consecutivas? ¿Y qué obtendríamos mediante `nextLine()`?
43. Explica por qué un programa interactivo debería indicar al usuario qué dato debe introducir antes de realizar una lectura.
44. ¿Qué es el indicativo de petición de entrada? ¿Por qué es importante?
45. ¿Qué es la impresión del eco? ¿En qué circunstancias puede ser útil?
46. Analiza el siguiente fragmento e indica qué datos debe introducir el usuario y qué información se mostrará:
    ```java
    System.out.print("Nombre: ");
    nombre = teclado.nextLine();
    System.out.print("Apellido: ");
    apellido = teclado.nextLine();
    System.out.println("Nombre introducido: " + nombre + " " + apellido);
    ```
47. Modifica mentalmente el ejercicio anterior para que, además del nombre y apellido, el programa solicite el nombre del ciclo formativo y posteriormente muestre todos los datos en una única línea.
48. Explica qué ventajas tiene utilizar nombres significativos en lugar de identificadores como `a`, `b`, `c` o `x1`.
49. En el siguiente programa:
    ```java
    public class Alumno {
        String nombre;
        String ciclo;
        public static void main(String[] args) {
            Scanner teclado = new Scanner(System.in);
            System.out.print("Nombre: ");
            nombre = teclado.nextLine();
        }
    }
    ```
    identifica todos los elementos que ya conocemos y señala los elementos que todavía no podríamos explicar completamente en este punto del curso.
50. Explica por qué es posible aprender a utilizar una clase de la biblioteca sin conocer todavía cómo está implementada internamente.
51. Un compañero afirma: «Para programar bien Java hay que memorizar todos los métodos de las bibliotecas». ¿Estás de acuerdo? Explica tu respuesta.
52. Utilizando la plantilla sintáctica de los identificadores estudiada en el tema, determina cuál de los siguientes nombres podría utilizarse para una variable y cuál sería preferible como nombre de una clase:
    ```java
    cuenta, Cuenta, numeroDeAlumnos, Alumno, nombreCompleto, Persona
    ```
    Explica qué criterio has utilizado.
53. Lee el siguiente fragmento y responde sin ejecutarlo:
    ```java
    String nombre;
    String ciclo;
    nombre = "Ana";
    ciclo = "DAW";
    System.out.println("Alumno: " + nombre);
    System.out.println("Ciclo: " + ciclo);
    ```
    ¿Qué valores contienen las variables antes de ejecutar las llamadas a `println`? ¿Qué aparecerá por pantalla?
54. Diseña, utilizando las plantillas sintácticas estudiadas, la declaración de las variables necesarias para almacenar los siguientes datos de un alumno: nombre, primer apellido, edad, inicial del segundo apellido y si está matriculado.
55. Explica qué partes de un programa pertenecen al lenguaje Java y cuáles proceden de la biblioteca estándar.
56. ¿Por qué puede afirmarse que utilizar una biblioteca permite concentrarnos en resolver nuestro problema en lugar de volver a programar operaciones que ya han sido desarrolladas?