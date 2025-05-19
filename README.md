# Analizador Léxico y Sintáctico con ANTLR4 y JavaScript

Este proyecto implementa un analizador para un lenguaje de definición de funciones personalizado, utilizando ANTLR4 y JavaScript. El objetivo es realizar el análisis léxico y sintáctico del código fuente, construir el árbol de análisis sintáctico, generar una tabla de tokens y traducir el código fuente a JavaScript de forma básica.

Agustina Vega Maiquez 2k13- SSL - UTN Ing. en Sistemas



## INSTALACIÓN

Para instalar este proyecto se debe clonar el repositorio ejecutando en una ventana de comandos (CMD, POWERSHELL o terminal en Linux) los siguientes comandos en orden (MUY IMPORTANTE SEGUIR BIEN ESTOS PASOS):

```
git clone https://github.com/agusvegamaiquez/52150.git
```

```
cd 52150
```

```
cd ssl-antlr-calculator
```

```
code .
```


## Gramática utilizada (EBNF)

<programa> ::= (<funcion>}+
<funcion>::= "funcion" <identificador> "(" [<parametros>] ")" "(" [<instrucciones>] "7"
<parametros> ::= <identificador> "," <identificador>)*
<instrucciones> ::= (<leer> | <escribir> | <asignacion>>
<leer>::= "leer" "(" <identificador> ")" ";"
<escribir> ::= "escribir" "(" <expresion> ")" ";"
<asignacion>::= <identificador> "=" <expresion> ";"
<expresion> :: <numero> | <cadena> | <identificador>
<identificador>::= [a-zA-Z][a-zA-Z0-9_]
<numero> ::= [0-9]+
<cadena>::="" [^"]

## Archivos incluidos

- `Calculator.g4`: Archivo de gramática ANTLR.
- `CustomCalculatorListener.js`: Listener personalizado que detecta las instrucciones y genera salida o código.
- `main.js`: Script principal que carga el archivo de entrada y realiza el análisis.
- `generated/`: Carpeta con los archivos generados automáticamente por ANTLR (Lexer, Parser, Listener, etc.).
- `ejemplo_valido_1.txt`: Archivo de prueba con entrada válida.
- `ejemplo_valido_2.txt`: Otro archivo de entrada válida.
- `ejemplo_invalido_1.txt`: Archivo de prueba con error sintáctico (falta punto y coma).
- `ejemplo_invalido_2.txt`: Archivo de prueba con error sintáctico (parámetros mal escritos).

## Instrucciones para ejecutar

1. Instalar dependencias necesarias 

2. Generar los archivos del parser con ANTLR:

Pararse en Calculator.g4 y Apretar la A grande


3. Ejecutar el analizador con un archivo de entrada:

Fn + F5  (con eso verá el arbol)


4. Ejecutar node index.js para ver la traduccion en la terminal o en traducido. js
   (Para ir cambiando de input, copie y pegue los txt de ejemplo, no se preocupe que en original.txt está el que estaba originalmente)


El programa realiza las siguientes tareas:
- Análisis léxico y sintáctico del código fuente.
- Generación de una tabla lexema/token.
- Representación del árbol de análisis sintáctico.
- Traducción básica del código fuente a JavaScript (opcional, si se implementa en el Listener).

## Archivos de prueba

### ejemplo_valido_1.txt

funcion saludar() {
leer(nombre);
escribir("Hola");
escribir("Tu nombre es: " + nombre);
}


### ejemplo_valido_2.txt

funcion sumar(a, b) {
resultado = a;
resultado = b;
escribir(resultado);
}


### ejemplo_invalido_1.txt

funcion imprimir() {
escribir("Hola")
leer(nombre);
}


Este archivo tiene un error sintáctico: falta el punto y coma después de la instrucción `escribir("Hola")`.

### ejemplo_invalido_2.txt

funcion calcular(x y) {
x = 5;
escribir(x);
}


Este archivo tiene un error en la lista de parámetros: falta una coma entre `x` y `y`.

## Ejemplo de traducción esperada a JavaScript

Entrada:

funcion saludar() {
leer(nombre);
escribir("Hola");
escribir("Tu nombre es: " + nombre);
}


Traducción a JavaScript:

function saludar() {
let nombre = prompt("Ingrese valor:");
console.log("Hola");
console.log("Tu nombre es: " + nombre);
}


## Comentarios finales

El listener personalizado implementado en `CustomCalculatorListener.js` permite reconocer las instrucciones principales del lenguaje (leer, escribir, asignación, definición de funciones) y puede adaptarse para traducir automáticamente el código a JavaScript. 


Este proyecto fue desarrollado en el marco de la tarea del curso correspondiente al tema 25914_1. 

Utilicé el pryecto de calculator y me daba miedo cambiarlo porque se me rompia el código, por lo que los nombres son los mismos.
