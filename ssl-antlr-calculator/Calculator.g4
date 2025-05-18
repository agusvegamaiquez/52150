grammar Calculator;

programa: funcion+ ;

funcion: 'funcion' identificador '(' parametros? ')' '{' instrucciones '}' ;

parametros: identificador (COMA identificador)* ;

instrucciones: instruccion* ;

instruccion: leer
           | escribir
           | asignacion
           ;

leer: 'leer' '(' identificador ')' PUNTOYCOMA ;

escribir: 'escribir' '(' expresion ')' PUNTOYCOMA ;

asignacion: identificador '=' expresion PUNTOYCOMA ;

expresion
    : expresion '+' expresion   # Suma
    | numero                    # NumeroLiteral
    | cadena                    # CadenaLiteral
    | identificador             # IdentificadorExpr
    ;


identificador: IDENTIFICADOR ;

numero: NUMERO ;

cadena: CADENA ;

// Tokens

COMA: ',' ;
PUNTOYCOMA: ';' ;

IDENTIFICADOR: [a-zA-Z_][a-zA-Z0-9_]* ;
NUMERO: [0-9]+ ;
CADENA: '"' (~["])* '"' ;

WS: [ \t\r\n]+ -> skip ;
