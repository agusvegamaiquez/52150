// CustomCalculatorVisitor.js
import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor({ modo = "interpretar" } = {}) {
        super();
        this.memory = {};
        this.output = "";
        this.modo = modo; // "interpretar" o "traducir"
    }

    visitPrograma(ctx) {
        this.visitChildren(ctx);
        return this.modo === "traducir" ? this.output : null;
    }

    visitFuncion(ctx) {
        const nombre = ctx.getChild(1).getText();
        if (this.modo === "traducir") {
            this.output += `function ${nombre}() {\n`;
        }
        this.visit(ctx.instrucciones());
        if (this.modo === "traducir") {
            this.output += `}\n`;
        }
    }

    visitInstrucciones(ctx) {
        return this.visitChildren(ctx);
    }

    visitLeer(ctx) {
        const id = ctx.identificador ? ctx.identificador().getText() : ctx.getChild(0).getText();
        if (this.modo === "traducir") {
            this.output += `  let ${id} = prompt("Ingrese valor para ${id}:");\n`;
        } else {
            console.log(`(Simulación lectura para variable '${id}', asignando null)`);
            this.memory[id] = null;
        }
        return null;
    }

    visitEscribir(ctx) {
        const expr = this.visit(ctx.expresion());
        if (this.modo === "traducir") {
            this.output += `  console.log(${expr});\n`;
        } else {
            console.log(expr);
        }
        return null;
    }

    visitAsignacion(ctx) {
        const id = ctx.getChild(0).getText();
        const valor = this.visit(ctx.expresion());
        if (this.modo === "traducir") {
            this.output += `  ${id} = ${valor};\n`;
        } else {
            this.memory[id] = valor;
        }
        return null;
    }

    visitNumero(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        return ctx.getText();
    }

    visitIdentificador(ctx) {
        const id = ctx.getText();
        if (this.modo === "traducir") {
            return id;
        }
        return this.memory[id] ?? 0;
    }

    visitConcatenacion(ctx) {
        const izquierda = this.visit(ctx.expresion(0));
        const derecha = this.visit(ctx.expresion(1));
        return `${izquierda} + ${derecha}`;
    }

    visitSumaResta(ctx) {
        const izquierda = this.visit(ctx.expresion(0));
        const derecha = this.visit(ctx.expresion(1));
        const operador = ctx.op.text;
        return `(${izquierda} ${operador} ${derecha})`;
    }

    visitMultiplicacionDivision(ctx) {
        const izquierda = this.visit(ctx.expresion(0));
        const derecha = this.visit(ctx.expresion(1));
        const operador = ctx.op.text;
        return `(${izquierda} ${operador} ${derecha})`;
    }
}
