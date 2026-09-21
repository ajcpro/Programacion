---
title: "Ejercicios Tema 02: Entrada, salida y metodología de diseño"
css: ["../estilos/estilo.css"]
---

# Ejercicios: Tema 02

1. ¿Qué diferencia existe entre la sintaxis y la semántica de un lenguaje de programación?[cite: 10]
2. Indica si cada uno de los siguientes ejemplos presenta un problema de sintaxis o de semántica y explica por qué:[cite: 10]
   * **a)** Una sentencia de declaración sin el punto y coma final.[cite: 10]
   * **b)** Una variable de tipo `int` a la que se pretende asignar una cadena.[cite: 10]
   * **c)** Una palabra reservada escrita con mayúsculas cuando el lenguaje distingue entre mayúsculas y minúsculas.[cite: 10]
3. ¿Qué es una plantilla sintáctica y para qué sirve?[cite: 10]
4. Observa la siguiente plantilla sintáctica:[cite: 10]
   ```text
   Programa: {ImportDeclaration} ClassDeclaration
   ```[cite: 10]
   ¿Qué elemento es obligatorio? ¿Qué elemento puede aparecer varias veces? ¿Puede no aparecer ninguna declaración de importación?[cite: 10]
5. Observa la plantilla de una declaración de variable que aparece en el tema. Indica cuáles de las siguientes declaraciones son válidas y cuáles no:[cite: 10]
   * `int edad;`[cite: 10]
   * `String nombre;`[cite: 10]
   * `char inicial, letra;`[cite: 10]
   * `int;`[cite: 10]
   * `String nombre apellido;`[cite: 10]
   * `public int contador;`[cite: 10]
6. Utilizando la plantilla sintáctica correspondiente, escribe tres formas distintas de declarar variables de tipo `int`, `double` y `String`.[cite: 10]
7. ¿Por qué una plantilla sintáctica puede utilizar palabras y símbolos que deben aparecer literalmente en el programa y, al mismo tiempo, nombres que representan otras construcciones sintácticas?[cite: 10]
8. Indica si los siguientes identificadores son válidos en Java. En los que no lo sean, explica el motivo:[cite: 10]
   * `Nombre`[cite: 10]
   * `2nombre`[cite: 10]
   * `nombre_apellido`[cite: 10]
   * `nombre-apellido`[cite: 10]
   * `Public`[cite: 10]
   * `dato2`[cite: 10]
   * `nombre completo`[cite: 10]
9. Explica por qué `nombre` y `Nombre` son dos identificadores diferentes en Java.[cite: 10]
10. ¿Por qué no es recomendable utilizar identificadores formados por una sola letra, salvo en los casos en que tenga sentido hacerlo?[cite: 10]
11. Indica qué representa cada identificador de los siguientes fragmentos: una clase, una variable, una instancia o un método.[cite: 10]
    * `String nombre;`[cite: 10]
    * `Scanner teclado;`[cite: 10]
    * `teclado.next();`[cite: 10]
    * `MiPrograma.main(...)`[cite: 10]
12. ¿Qué diferencia existe entre un tipo primitivo y una clase como `String`?[cite: 10]
13. ¿Qué es una variable? ¿Qué información debemos indicar al declararla?[cite: 10]
14. ¿Qué diferencia existe entre declarar una variable y darle un valor?[cite: 10]
15. Explica qué sucede en memoria cuando se declara una variable pero todavía no se le ha asignado un valor.[cite: 10]
16. Indica cuáles de los siguientes elementos son literales:[cite: 10]
    * `25`[cite: 10]
    * `Edad`[cite: 10]
    * `'A'`[cite: 10]
    * `"A"`[cite: 10]
    * `True`[cite: 10]
    * `TAMAÑO`[cite: 10]
17. ¿Qué diferencia existe entre un literal y una constante con nombre? Indica alguna ventaja de utilizar una constante con nombre.[cite: 10]
18. Escribe una declaración de constante con nombre para representar:[cite: 10]
    * **a)** El número máximo de alumnos de una clase;[cite: 10]
    * **b)** El nombre de un ciclo formativo;[cite: 10]
    * **c)** La inicial de un nombre.[cite: 10]
19. El siguiente código contiene varios errores. Indícalos y corrígelo:[cite: 10]
    ```java
    int edad
    String nombre;
    nombre = Antonio;
    inicial = "A";
    ```[cite: 10]
20. ¿Qué diferencia existe entre una declaración y una asignación?[cite: 10]
21. Explica qué sucede al ejecutar cada una de las siguientes sentencias, suponiendo que las variables han sido declaradas correctamente:[cite: 10]
    * `nombre = "Antonio";`[cite: 10]
    * `nombre = "María";`[cite: 10]
    * ¿Qué valor conserva finalmente `nombre`?[cite: 10]
22. Explica por qué la siguiente construcción no representa una ecuación matemática válida en Java:[cite: 10]
    ```java
    x + y = z;
    ```[cite: 10]
23. ¿Qué significa que una variable sea de un determinado tipo? ¿Qué relación existe entre el tipo de una variable y los valores que puede almacenar?[cite: 10]
24. Dadas las siguientes declaraciones:[cite: 10]
    ```java
    String nombre;
    String apellido;
    char inicial;
    ```[cite: 10]
    indica cuáles de las siguientes asignaciones son válidas:[cite: 10]
    * `nombre = "Ana";`[cite: 10]
    * `apellido = "García";`[cite: 10]
    * `inicial = 'G';`[cite: 10]
    * `inicial = "G";`[cite: 10]
    * `nombre = apellido;`[cite: 10]
25. ¿Por qué podemos utilizar el operador `+` para concatenar cadenas? ¿Qué resultado se obtiene al concatenar dos cadenas?[cite: 10]
26. Si:[cite: 10]
    ```java
    String nombre = "Ana";
    String apellido = "López";
    ```[cite: 10]
    indica el resultado de las siguientes expresiones:[cite: 10]
    * `nombre + apellido`[cite: 10]
    * `nombre + " " + apellido`[cite: 10]
    * `"Nombre: " + nombre`[cite: 10]
    * `"Nombre: " + nombre + " " + apellido`[cite: 10]
27. ¿Qué ocurre cuando se concatena una cadena con un valor de un tipo primitivo?[cite: 10]
28. Explica la diferencia entre las siguientes dos instrucciones:[cite: 10]
    * `System.out.print("Hola");`[cite: 10]
    * `System.out.println("Hola");`[cite: 10]
29. ¿Qué es una llamada a un método?[cite: 10]
30. En la siguiente llamada:[cite: 10]
    ```java
    System.out.println("Hola");
    ```[cite: 10]
    identifica:[cite: 10]
    * **a)** La clase;[cite: 10]
    * **b)** El objeto;[cite: 10]
    * **c)** El método;[cite: 10]
    * **d)** El argumento.[cite: 10]
31. En la siguiente llamada:[cite: 10]
    ```java
    String nombre = teclado.next();
    ```[cite: 10]
    identifica la expresión que produce el valor que se almacena en `nombre`. ¿Qué diferencia existe entre esta llamada y `System.out.println(...)`?[cite: 10]
32. Explica la diferencia entre una función y un procedimiento.[cite: 10]
33. Indica cuáles de las siguientes llamadas corresponden a una función y cuáles a un procedimiento, según la distinción estudiada en el tema:[cite: 10]
    * `teclado.next()`[cite: 10]
    * `teclado.nextLine()`[cite: 10]
    * `System.out.print(...)`[cite: 10]
    * `System.out.println(...)`[cite: 10]
34. ¿Qué es una biblioteca? ¿Qué ventaja proporciona al programador?[cite: 10]
35. ¿Qué es un paquete y para qué sirve?[cite: 10]
36. Explica para qué sirve una sentencia `import`.[cite: 10]
37. ¿Qué diferencia existe entre escribir:[cite: 10]
    ```java
    import java.util.Scanner;
    ```[cite: 10]
    y utilizar directamente una clase que pertenece a `java.lang`, como `String`?[cite: 10]
38. La clase `Scanner` se encuentra en un paquete de la biblioteca estándar. Explica qué necesitamos hacer para poder utilizarla en un programa.[cite: 10]
39. ¿Qué diferencia existe entre `System.in` y `System.out`?[cite: 10]
40. ¿Qué hace el objeto `Scanner` cuando utilizamos sus métodos de lectura?[cite: 10]
41. ¿Qué diferencia existe entre `next()`, `nextLine()` y `nextInt()`?[cite: 10]
42. Supongamos que la entrada contiene:[cite: 10]
    ```text
    Ana López
    ```[cite: 10]
    ¿Qué obtendríamos mediante `next()` en dos llamadas consecutivas? ¿Y qué obtendríamos mediante `nextLine()`?[cite: 10]
43. Explica por qué un programa interactivo debería indicar al usuario qué dato debe introducir antes de realizar una lectura.[cite: 10]
44. ¿Qué es el indicativo de petición de entrada? ¿Por qué es importante?[cite: 10]
45. ¿Qué es la impresión del eco? ¿En qué circunstancias puede ser útil?[cite: 10]
46. Analiza el siguiente fragmento e indica qué datos debe introducir el usuario y qué información se mostrará:[cite: 10]
    ```java
    System.out.print("Nombre: ");
    nombre = teclado.nextLine();
    System.out.print("Apellido: ");
    apellido = teclado.nextLine();
    System.out.println("Nombre introducido: " + nombre + " " + apellido);
    ```[cite: 10]
47. Modifica mentalmente el ejercicio anterior para que, además del nombre y apellido, el programa solicite el nombre del ciclo formativo y posteriormente muestre todos los datos en una única línea.[cite: 10]
48. Explica qué ventajas tiene utilizar nombres significativos en lugar de identificadores como `a`, `b`, `c` o `x1`.[cite: 10]
49. En el siguiente programa:[cite: 10]
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
    ```[cite: 10]
    identifica todos los elementos que ya conocemos y señala los elementos que todavía no podríamos explicar completamente en este punto del curso.[cite: 10]
50. Explica por qué es posible aprender a utilizar una clase de la biblioteca sin conocer todavía cómo está implementada internamente.[cite: 10]
51. Un compañero afirma: «Para programar bien Java hay que memorizar todos los métodos de las bibliotecas». ¿Estás de acuerdo? Explica tu respuesta.[cite: 10]
52. Utilizando la plantilla sintáctica de los identificadores estudiada en el tema, determina cuál de los siguientes nombres podría utilizarse para una variable y cuál sería preferible como nombre de una clase:[cite: 10]
    * `cuenta`, `Cuenta`, `numeroDeAlumnos`, `Alumno`, `nombreCompleto`, `Persona`[cite: 10]
    Explica qué criterio has utilizado.[cite: 10]
53. Lee el siguiente fragmento y responde sin ejecutarlo:[cite: 10]
    ```java
    String nombre;
    String ciclo;
    nombre = "Ana";
    ciclo = "DAW";
    System.out.println("Alumno: " + nombre);
    System.out.println("Ciclo: " + ciclo);
    ```[cite: 10]
    ¿Qué valores contienen las variables antes de ejecutar las llamadas a `println`? ¿Qué aparecerá por pantalla?[cite: 10]
54. Diseña, utilizando las plantillas sintácticas estudiadas, la declaración de las variables necesarias para almacenar los siguientes datos de un alumno: nombre, primer apellido, edad, inicial del segundo apellido y si está matriculado.[cite: 10]
55. Explica qué partes de un programa pertenecen al lenguaje Java y cuáles proceden de la biblioteca estándar.[cite: 10]
56. ¿Por qué puede afirmarse que utilizar una biblioteca permite concentrarnos en resolver nuestro problema en lugar de volver a programar operaciones que ya han sido desarrolladas?[cite: 10]