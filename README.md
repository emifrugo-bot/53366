# Analizador con ANTLR4 y JavaScript

## Tema

**39568_22**

## Descripción del proyecto

Este proyecto implementa un analizador léxico, sintáctico e intérprete básico utilizando **ANTLR4** con **JavaScript**.

El lenguaje asignado permite representar un **pedido**, compuesto por un identificador y una lista de ítems. Cada ítem contiene un producto, una cantidad y un precio.

El programa permite:

- Leer código fuente desde un archivo `input.txt`.
- Realizar el análisis léxico.
- Realizar el análisis sintáctico.
- Informar si la entrada es válida o si contiene errores.
- Mostrar una tabla de lexemas y tokens.
- Mostrar el árbol de derivación en formato texto.
- Interpretar el pedido calculando subtotales y total final.

---

## Gramática original en EBNF

```txt
<pedido> ::= "pedido" <id> "{" { <item> } "}" ;
<item> ::= <producto> ":" <cantidad> ":" <precio> ";" ;
<producto> ::= <id> ;
<cantidad> ::= <numero> ;
<precio> ::= <numero> ;
<id> ::= [a-zA-Z]+ ;
<numero> ::= [0-9]+ ;
```

---

## Gramática implementada en ANTLR4

```antlr
grammar Pedido;

pedido
    : PEDIDO ID LLAVE_ABRE item+ LLAVE_CIERRA EOF
    ;

item
    : producto DOSPUNTOS cantidad DOSPUNTOS precio PUNTOCOMA
    ;

producto
    : ID
    ;

cantidad
    : NUMERO
    ;

precio
    : NUMERO
    ;

PEDIDO       : 'pedido';
ID           : [a-zA-Z]+;
NUMERO       : [0-9]+;

LLAVE_ABRE   : '{';
LLAVE_CIERRA : '}';
DOSPUNTOS    : ':';
PUNTOCOMA    : ';';

WS           : [ \t\r\n]+ -> skip;
```

---

## Ejemplo de entrada válida

```txt
pedido clienteA {
    manzana: 2: 100;
    pera: 5: 250;
}
```

---

## Interpretación del ejemplo

Para la entrada anterior, el intérprete realiza el siguiente cálculo:

```txt
Pedido: clienteA
manzana: 2 x $100 = $200
pera: 5 x $250 = $1250
Total del pedido: $1450
```

---

## Estructura del proyecto

```txt
53366/
├── generated/
│   ├── PedidoLexer.js
│   ├── PedidoParser.js
│   ├── PedidoListener.js
│   ├── PedidoVisitor.js
│   └── otros archivos generados por ANTLR4
│
├── inputs/
│   ├── correcto1.txt
│   ├── correcto2.txt
│   ├── incorrecto1.txt
│   └── incorrecto2.txt
│
├── CustomPedidoVisitor.js
├── Pedido.g4
├── gramatica.txt
├── index.js
├── input.txt
├── package.json
├── package-lock.json
├── antlr-4.13.2-complete.jar
└── README.md
```

---

## Requisitos necesarios

Para ejecutar el proyecto se necesita tener instalado:

- **Node.js**
- **Java**
- **ANTLR4**
- Visual Studio Code, recomendado para visualizar el árbol sintáctico

---

## Instalación de dependencias

Desde la terminal, ubicado en la carpeta del proyecto, ejecutar:

```bash
npm install
```

En caso de usar PowerShell y recibir un error de permisos, ejecutar:

```bash
npm.cmd install
```

---

## Generación de archivos del parser

Los archivos del lexer, parser, listener y visitor se generan a partir de la gramática `Pedido.g4`.

Para generarlos, ejecutar:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -o generated Pedido.g4
```

Este comando genera los archivos necesarios dentro de la carpeta `generated`.

---

## Ejecución del analizador

El programa principal se encuentra en el archivo:

```txt
index.js
```

Para ejecutarlo, utilizar:

```bash
node index.js
```

El programa lee automáticamente el contenido del archivo:

```txt
input.txt
```

Por lo tanto, para probar distintos ejemplos, se puede copiar el contenido de alguno de los archivos de la carpeta `inputs` y pegarlo dentro de `input.txt`.

---

## Archivos de prueba incluidos

El proyecto incluye cuatro archivos de prueba:

```txt
inputs/correcto1.txt
inputs/correcto2.txt
inputs/incorrecto1.txt
inputs/incorrecto2.txt
```

### Entradas correctas

Los archivos `correcto1.txt` y `correcto2.txt` contienen ejemplos que cumplen con la gramática definida.

### Entradas incorrectas

Los archivos `incorrecto1.txt` e `incorrecto2.txt` contienen errores sintácticos intencionales, por ejemplo:

- Falta de punto y coma `;`.
- Falta de llave de cierre `}`.

Estos archivos permiten comprobar que el analizador detecta errores en la entrada.

---

## Salida esperada para una entrada correcta

Al ejecutar el programa con una entrada válida, se obtiene una salida similar a la siguiente:

```txt
Entrada válida.

Árbol de derivación:
...

Tabla de lexemas y tokens:
---------------------------
Lexema: pedido | Token: PEDIDO
Lexema: clienteA | Token: ID
Lexema: { | Token: LLAVE_ABRE
Lexema: manzana | Token: ID
Lexema: : | Token: DOSPUNTOS
Lexema: 2 | Token: NUMERO
Lexema: : | Token: DOSPUNTOS
Lexema: 100 | Token: NUMERO
Lexema: ; | Token: PUNTOCOMA
Lexema: pera | Token: ID
Lexema: : | Token: DOSPUNTOS
Lexema: 5 | Token: NUMERO
Lexema: : | Token: DOSPUNTOS
Lexema: 250 | Token: NUMERO
Lexema: ; | Token: PUNTOCOMA
Lexema: } | Token: LLAVE_CIERRA

Interpretación:
Pedido: clienteA
manzana: 2 x $100 = $200
pera: 5 x $250 = $1250
Total del pedido: $1450
```

---

## Salida esperada para una entrada incorrecta

Si la entrada contiene errores sintácticos, el programa informa que se encontraron errores:

```txt
Se encontraron errores de sintaxis en la entrada.
```

ANTLR también muestra información sobre la línea y el símbolo donde se produjo el problema.

---

## Visualización del árbol sintáctico en VS Code

Para visualizar el árbol sintáctico usando la extensión de ANTLR4 en Visual Studio Code:

1. Abrir el archivo `Pedido.g4`.
2. Verificar que el archivo `input.txt` contenga una entrada válida.
3. Ejecutar la opción de debug o visualización de ANTLR4.
4. Usar como regla inicial:

```txt
pedido
```

El árbol generado permite observar cómo la entrada fue reconocida por la gramática.

---

## Funcionalidades implementadas

El analizador cumple con las siguientes tareas:

1. **Análisis léxico y sintáctico**  
   Reconoce los tokens y verifica que la estructura del pedido sea válida.

2. **Tabla de lexemas y tokens**  
   Muestra cada lexema leído y el token correspondiente.

3. **Árbol de análisis sintáctico**  
   Muestra el árbol de derivación en formato texto.

4. **Interpretación básica**  
   Procesa los ítems del pedido, calcula los subtotales y muestra el total final.

---

## Autor

Trabajo realizado para la tarea de construcción de un analizador con **ANTLR4 y JavaScript**.