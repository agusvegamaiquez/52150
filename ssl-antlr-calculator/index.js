import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    input = await leerCadena();
  }

  const inputStream = CharStreams.fromString(input);
  const lexer = new CalculatorLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new CalculatorParser(tokenStream);

  const tree = parser.programa();

  if (parser.syntaxErrorsCount > 0) {
    console.error("Errores de sintaxis.");
  } else {
    console.log("Entrada válida. Ejecutando...\n");

    // Interpretar
    const ejecutor = new CustomCalculatorVisitor({ modo: "interpretar" });
    ejecutor.visit(tree);

    // Traducir a JavaScript
    const traductor = new CustomCalculatorVisitor({ modo: "traducir" });
    const jsCode = traductor.visit(tree);

    // Mostrar y guardar el código traducido
    console.log("\n--- Código traducido a JavaScript ---\n");
    console.log(jsCode);
    fs.writeFileSync("traducido.js", jsCode);
  }
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Ingrese código: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

main();
