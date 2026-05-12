import PedidoLexer from "./generated/PedidoLexer.js";
import PedidoParser from "./generated/PedidoParser.js";
import { CustomPedidoVisitor } from "./CustomPedidoVisitor.js";

import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input.txt
    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Proceso la entrada con el analizador
    let inputStream = CharStreams.fromString(input);
    let lexer = new PedidoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new PedidoParser(tokenStream);

    // Regla inicial de la gramática Pedido.g4
    let tree = parser.pedido();

    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");

        // Muestro el árbol de derivación
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Muestro la tabla de lexemas y tokens
        console.log("\nTabla de lexemas y tokens:");
        console.log("---------------------------");

        tokenStream.fill();

        for (const token of tokenStream.tokens) {
            if (token.type !== antlr4.Token.EOF) {
                const tokenName = PedidoLexer.symbolicNames[token.type];
                console.log(`Lexema: ${token.text} | Token: ${tokenName}`);
            }
        }

        // Uso el visitor para interpretar el pedido
        console.log("\nInterpretación:");
        const visitor = new CustomPedidoVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", answer => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
