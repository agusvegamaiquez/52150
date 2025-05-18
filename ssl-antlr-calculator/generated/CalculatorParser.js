// Generated from c:/Users/avega/Proyecto/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,15,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,1,1,1,1,1,1,1,3,1,34,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,
2,5,2,44,8,2,10,2,12,2,47,9,2,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,4,1,4,1,
4,3,4,58,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,3,8,81,8,8,1,8,1,8,1,8,5,8,86,8,8,10,8,12,8,89,9,
8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,1,16,12,0,2,4,6,8,10,12,14,16,18,20,
22,0,0,93,0,25,1,0,0,0,2,29,1,0,0,0,4,40,1,0,0,0,6,51,1,0,0,0,8,57,1,0,0,
0,10,59,1,0,0,0,12,65,1,0,0,0,14,71,1,0,0,0,16,80,1,0,0,0,18,90,1,0,0,0,
20,92,1,0,0,0,22,94,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,
25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,30,5,1,0,0,30,31,3,18,9,0,31,33,
5,2,0,0,32,34,3,4,2,0,33,32,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,5,
3,0,0,36,37,5,4,0,0,37,38,3,6,3,0,38,39,5,5,0,0,39,3,1,0,0,0,40,45,3,18,
9,0,41,42,5,10,0,0,42,44,3,18,9,0,43,41,1,0,0,0,44,47,1,0,0,0,45,43,1,0,
0,0,45,46,1,0,0,0,46,5,1,0,0,0,47,45,1,0,0,0,48,50,3,8,4,0,49,48,1,0,0,0,
50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,
58,3,10,5,0,55,58,3,12,6,0,56,58,3,14,7,0,57,54,1,0,0,0,57,55,1,0,0,0,57,
56,1,0,0,0,58,9,1,0,0,0,59,60,5,6,0,0,60,61,5,2,0,0,61,62,3,18,9,0,62,63,
5,3,0,0,63,64,5,11,0,0,64,11,1,0,0,0,65,66,5,7,0,0,66,67,5,2,0,0,67,68,3,
16,8,0,68,69,5,3,0,0,69,70,5,11,0,0,70,13,1,0,0,0,71,72,3,18,9,0,72,73,5,
8,0,0,73,74,3,16,8,0,74,75,5,11,0,0,75,15,1,0,0,0,76,77,6,8,-1,0,77,81,3,
20,10,0,78,81,3,22,11,0,79,81,3,18,9,0,80,76,1,0,0,0,80,78,1,0,0,0,80,79,
1,0,0,0,81,87,1,0,0,0,82,83,10,4,0,0,83,84,5,9,0,0,84,86,3,16,8,5,85,82,
1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,17,1,0,0,0,89,87,1,
0,0,0,90,91,5,12,0,0,91,19,1,0,0,0,92,93,5,13,0,0,93,21,1,0,0,0,94,95,5,
14,0,0,95,23,1,0,0,0,7,27,33,45,51,57,80,87];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'funcion'", "'('", "')'", "'{'", "'}'", 
                            "'leer'", "'escribir'", "'='", "'+'", "','", 
                            "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "COMA", "PUNTOYCOMA", "IDENTIFICADOR", 
                             "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "instruccion", "leer", "escribir", "asignacion", 
                         "expresion", "identificador", "numero", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.funcion();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(CalculatorParser.T__0);
	        this.state = 30;
	        this.identificador();
	        this.state = 31;
	        this.match(CalculatorParser.T__1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 32;
	            this.parametros();
	        }

	        this.state = 35;
	        this.match(CalculatorParser.T__2);
	        this.state = 36;
	        this.match(CalculatorParser.T__3);
	        this.state = 37;
	        this.instrucciones();
	        this.state = 38;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.identificador();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 41;
	            this.match(CalculatorParser.COMA);
	            this.state = 42;
	            this.identificador();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4288) !== 0)) {
	            this.state = 48;
	            this.instruccion();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_instruccion);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.leer();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.escribir();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.asignacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(CalculatorParser.T__5);
	        this.state = 60;
	        this.match(CalculatorParser.T__1);
	        this.state = 61;
	        this.identificador();
	        this.state = 62;
	        this.match(CalculatorParser.T__2);
	        this.state = 63;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(CalculatorParser.T__6);
	        this.state = 66;
	        this.match(CalculatorParser.T__1);
	        this.state = 67;
	        this.expresion(0);
	        this.state = 68;
	        this.match(CalculatorParser.T__2);
	        this.state = 69;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.identificador();
	        this.state = 72;
	        this.match(CalculatorParser.T__7);
	        this.state = 73;
	        this.expresion(0);
	        this.state = 74;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, CalculatorParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            localctx = new NumeroLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 77;
	            this.numero();
	            break;
	        case 14:
	            localctx = new CadenaLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 78;
	            this.cadena();
	            break;
	        case 12:
	            localctx = new IdentificadorExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 79;
	            this.identificador();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SumaContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expresion);
	                this.state = 82;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 83;
	                this.match(CalculatorParser.T__8);
	                this.state = 84;
	                this.expresion(5); 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(CalculatorParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(CalculatorParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CalculatorParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(CalculatorParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.COMA = 10;
CalculatorParser.PUNTOYCOMA = 11;
CalculatorParser.IDENTIFICADOR = 12;
CalculatorParser.NUMERO = 13;
CalculatorParser.CADENA = 14;
CalculatorParser.WS = 15;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_funcion = 1;
CalculatorParser.RULE_parametros = 2;
CalculatorParser.RULE_instrucciones = 3;
CalculatorParser.RULE_instruccion = 4;
CalculatorParser.RULE_leer = 5;
CalculatorParser.RULE_escribir = 6;
CalculatorParser.RULE_asignacion = 7;
CalculatorParser.RULE_expresion = 8;
CalculatorParser.RULE_identificador = 9;
CalculatorParser.RULE_numero = 10;
CalculatorParser.RULE_cadena = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_funcion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_parametros;
    }

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.COMA);
	    } else {
	        return this.getToken(CalculatorParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	escribir() {
	    return this.getTypedRuleContext(EscribirContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_leer;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_escribir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_asignacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CadenaLiteralContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCadenaLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCadenaLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCadenaLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.CadenaLiteralContext = CadenaLiteralContext;

class SumaContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSuma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSuma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSuma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.SumaContext = SumaContext;

class NumeroLiteralContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNumeroLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNumeroLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNumeroLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.NumeroLiteralContext = NumeroLiteralContext;

class IdentificadorExprContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterIdentificadorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitIdentificadorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitIdentificadorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.IdentificadorExprContext = IdentificadorExprContext;

class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_identificador;
    }

	IDENTIFICADOR() {
	    return this.getToken(CalculatorParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(CalculatorParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.FuncionContext = FuncionContext; 
CalculatorParser.ParametrosContext = ParametrosContext; 
CalculatorParser.InstruccionesContext = InstruccionesContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.LeerContext = LeerContext; 
CalculatorParser.EscribirContext = EscribirContext; 
CalculatorParser.AsignacionContext = AsignacionContext; 
CalculatorParser.ExpresionContext = ExpresionContext; 
CalculatorParser.IdentificadorContext = IdentificadorContext; 
CalculatorParser.NumeroContext = NumeroContext; 
CalculatorParser.CadenaContext = CadenaContext; 
