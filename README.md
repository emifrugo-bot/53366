# Analizador con ANTLR4 y JavaScript

## Tema
39568_22

## Descripción
Este proyecto implementa un analizador léxico, sintáctico e intérprete básico utilizando ANTLR4 y JavaScript.

## Gramática
<pedido> ::= "pedido" <id> "{" { <item> } "}" ;
<item> ::= <producto> ":" <cantidad> ":" <precio> ";" ;
<producto> ::= <id> ;
<cantidad> ::= <numero> ;
<precio> ::= <numero> ;
<id> ::= [a-zA-Z]+ ;
<numero> ::= [0-9]+ ;

## Requisitos
- Node.js
- Java
- ANTLR4

## Instalación
npm install

Si se usa PowerShell:
npm.cmd install

## Generar archivos del parser
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -o generated Pedido.g4

## Ejecutar el analizador
node index.js

El programa lee el archivo input.txt.

## Archivos de prueba
Dentro de la carpeta inputs se incluyen:

- correcto1.txt
- correcto2.txt
- incorrecto1.txt
- incorrecto2.txt

## Funcionalidades
El programa realiza análisis léxico, análisis sintáctico, tabla de lexemas-tokens, árbol de derivación e interpretación básica del pedido.