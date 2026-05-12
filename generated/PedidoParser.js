// Generated from Pedido.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PedidoListener from './PedidoListener.js';
import PedidoVisitor from './PedidoVisitor.js';

const serializedATN = [4,1,8,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,4,0,15,8,0,11,0,12,0,16,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,30,0,10,1,0,0,0,
2,21,1,0,0,0,4,28,1,0,0,0,6,30,1,0,0,0,8,32,1,0,0,0,10,11,5,1,0,0,11,12,
5,2,0,0,12,14,5,4,0,0,13,15,3,2,1,0,14,13,1,0,0,0,15,16,1,0,0,0,16,14,1,
0,0,0,16,17,1,0,0,0,17,18,1,0,0,0,18,19,5,5,0,0,19,20,5,0,0,1,20,1,1,0,0,
0,21,22,3,4,2,0,22,23,5,6,0,0,23,24,3,6,3,0,24,25,5,6,0,0,25,26,3,8,4,0,
26,27,5,7,0,0,27,3,1,0,0,0,28,29,5,2,0,0,29,5,1,0,0,0,30,31,5,3,0,0,31,7,
1,0,0,0,32,33,5,3,0,0,33,9,1,0,0,0,1,16];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PedidoParser extends antlr4.Parser {

    static grammarFileName = "Pedido.g4";
    static literalNames = [ null, "'pedido'", null, null, "'{'", "'}'", 
                            "':'", "';'" ];
    static symbolicNames = [ null, "PEDIDO", "ID", "NUMERO", "LLAVE_ABRE", 
                             "LLAVE_CIERRA", "DOSPUNTOS", "PUNTOCOMA", "WS" ];
    static ruleNames = [ "pedido", "item", "producto", "cantidad", "precio" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PedidoParser.ruleNames;
        this.literalNames = PedidoParser.literalNames;
        this.symbolicNames = PedidoParser.symbolicNames;
    }



	pedido() {
	    let localctx = new PedidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PedidoParser.RULE_pedido);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(PedidoParser.PEDIDO);
	        this.state = 11;
	        this.match(PedidoParser.ID);
	        this.state = 12;
	        this.match(PedidoParser.LLAVE_ABRE);
	        this.state = 14; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 13;
	            this.item();
	            this.state = 16; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	        this.state = 18;
	        this.match(PedidoParser.LLAVE_CIERRA);
	        this.state = 19;
	        this.match(PedidoParser.EOF);
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PedidoParser.RULE_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.producto();
	        this.state = 22;
	        this.match(PedidoParser.DOSPUNTOS);
	        this.state = 23;
	        this.cantidad();
	        this.state = 24;
	        this.match(PedidoParser.DOSPUNTOS);
	        this.state = 25;
	        this.precio();
	        this.state = 26;
	        this.match(PedidoParser.PUNTOCOMA);
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



	producto() {
	    let localctx = new ProductoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PedidoParser.RULE_producto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(PedidoParser.ID);
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



	cantidad() {
	    let localctx = new CantidadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PedidoParser.RULE_cantidad);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(PedidoParser.NUMERO);
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



	precio() {
	    let localctx = new PrecioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PedidoParser.RULE_precio);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(PedidoParser.NUMERO);
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

PedidoParser.EOF = antlr4.Token.EOF;
PedidoParser.PEDIDO = 1;
PedidoParser.ID = 2;
PedidoParser.NUMERO = 3;
PedidoParser.LLAVE_ABRE = 4;
PedidoParser.LLAVE_CIERRA = 5;
PedidoParser.DOSPUNTOS = 6;
PedidoParser.PUNTOCOMA = 7;
PedidoParser.WS = 8;

PedidoParser.RULE_pedido = 0;
PedidoParser.RULE_item = 1;
PedidoParser.RULE_producto = 2;
PedidoParser.RULE_cantidad = 3;
PedidoParser.RULE_precio = 4;

class PedidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PedidoParser.RULE_pedido;
    }

	PEDIDO() {
	    return this.getToken(PedidoParser.PEDIDO, 0);
	};

	ID() {
	    return this.getToken(PedidoParser.ID, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(PedidoParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(PedidoParser.LLAVE_CIERRA, 0);
	};

	EOF() {
	    return this.getToken(PedidoParser.EOF, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.enterPedido(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.exitPedido(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PedidoVisitor ) {
	        return visitor.visitPedido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PedidoParser.RULE_item;
    }

	producto() {
	    return this.getTypedRuleContext(ProductoContext,0);
	};

	DOSPUNTOS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PedidoParser.DOSPUNTOS);
	    } else {
	        return this.getToken(PedidoParser.DOSPUNTOS, i);
	    }
	};


	cantidad() {
	    return this.getTypedRuleContext(CantidadContext,0);
	};

	precio() {
	    return this.getTypedRuleContext(PrecioContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(PedidoParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.exitItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PedidoVisitor ) {
	        return visitor.visitItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProductoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PedidoParser.RULE_producto;
    }

	ID() {
	    return this.getToken(PedidoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.enterProducto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.exitProducto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PedidoVisitor ) {
	        return visitor.visitProducto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CantidadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PedidoParser.RULE_cantidad;
    }

	NUMERO() {
	    return this.getToken(PedidoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.enterCantidad(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.exitCantidad(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PedidoVisitor ) {
	        return visitor.visitCantidad(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrecioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PedidoParser.RULE_precio;
    }

	NUMERO() {
	    return this.getToken(PedidoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.enterPrecio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PedidoListener ) {
	        listener.exitPrecio(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PedidoVisitor ) {
	        return visitor.visitPrecio(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PedidoParser.PedidoContext = PedidoContext; 
PedidoParser.ItemContext = ItemContext; 
PedidoParser.ProductoContext = ProductoContext; 
PedidoParser.CantidadContext = CantidadContext; 
PedidoParser.PrecioContext = PrecioContext; 
