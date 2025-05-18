import CalculatorListener from "./generated/CalculatorListener.js";

export class CustomCalculatorListener extends CalculatorListener {
    enterAsignacion(ctx) {
        console.log(` Se detectó una asignación: ${ctx.getText()}`);
    }

    enterLeer(ctx) {
        console.log(` Se detectó una instrucción de lectura: ${ctx.getText()}`);
    }

    enterEscribir(ctx) {
        console.log(` Se detectó una instrucción de escritura: ${ctx.getText()}`);
    }

    enterFuncion(ctx) {
        console.log(` Se detectó una función: ${ctx.IDENTIFICADOR().getText()}`);
    }

    enterInstruccion(ctx) {
        console.log(` Se detectó una instrucción: ${ctx.getText()}`);
    }
}
