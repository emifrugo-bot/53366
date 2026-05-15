# Analizador con ANTLR4 y JavaScript

## Tema

**39568_22**

## Descripción del proyecto

Este proyecto implementa un analizador léxico, sintáctico e intérprete básico utilizando **ANTLR4** con **JavaScript**.

El lenguaje asignado permite representar un **pedido**, compuesto por un identificador y una lista de ítems. Cada ítem contiene un producto, una cantidad y un precio.

El programa permite leer una entrada desde `input.txt`, realizar el análisis léxico y sintáctico, mostrar el árbol de derivación, listar los lexemas y tokens, e interpretar el pedido calculando subtotales y total final.

---

## Clonar el proyecto

Para descargar el proyecto desde GitHub, abrir una terminal, CMD o PowerShell y ejecutar:

`git clone https://github.com/emifrugo-bot/53366.git`

Luego ingresar a la carpeta del proyecto:

`cd 53366`

Ingresar a la carpeta donde se encuentra el analizador:

`cd antlr-pedido-project`

Abrir el proyecto en Visual Studio Code:

`code .`

---

## Requisitos necesarios

Para ejecutar el proyecto se necesita tener instalado:

- Node.js
- Java
- Git
- Visual Studio Code

---

## Instalación de dependencias

Desde la terminal, ubicado dentro de la carpeta `antlr-pedido-project`, ejecutar:

`npm install`

En caso de usar PowerShell y recibir un error de permisos, ejecutar:

`npm.cmd install`

---

## Gramática implementada

La gramática principal se encuentra en el archivo `Pedido.g4`.

La regla inicial de la gramática es:

`pedido`

Ejemplo de entrada válida:

pedido clienteA {
    manzana: 2: 100;
    pera: 5: 250;
}

---

## Ejecutar el analizador

El programa principal se encuentra en el archivo `index.js`.

Para ejecutarlo, usar:

`node index.js`

El programa lee automáticamente el contenido del archivo `input.txt`.

Para probar distintos ejemplos, se puede copiar el contenido de alguno de estos archivos:

- `correcto1.txt`
- `correcto2.txt`
- `incorrecto1.txt`
- `incorrecto2.txt`

Luego se pega dentro de `input.txt`, se guarda el archivo y se vuelve a ejecutar:

`node index.js`

---

## Resultado esperado

Si la entrada es correcta, el programa muestra:

- Mensaje de entrada válida.
- Árbol de derivación.
- Tabla de lexemas y tokens.
- Interpretación del pedido.

Ejemplo de interpretación:

Pedido: clienteA  
manzana: 2 x $100 = $200  
pera: 5 x $250 = $1250  
Total del pedido: $1450

Si la entrada contiene errores sintácticos, el programa informa:

`Se encontraron errores de sintaxis en la entrada.`

---

## Archivos principales

- `Pedido.g4`: contiene la gramática del lenguaje.
- `index.js`: archivo principal que ejecuta el analizador.
- `input.txt`: archivo donde se coloca la entrada a analizar.
- `CustomPedidoVisitor.js`: interpreta el árbol de derivación.
- `generated/`: carpeta con los archivos generados automáticamente por ANTLR.
- `correcto1.txt` y `correcto2.txt`: ejemplos válidos.
- `incorrecto1.txt` y `incorrecto2.txt`: ejemplos inválidos.

---

## Autor

**Emiliano Frugoni**  
Legajo: **53366**

Trabajo realizado para la materia **Sintaxis y Semántica de los Lenguajes de Programación**.