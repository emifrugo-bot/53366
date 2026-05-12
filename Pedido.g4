grammar Pedido;

pedido
    : PEDIDO ID LLAVE_ABRE item+ LLAVE_CIERRA EOF
    ;

item
    : producto DOSPUNTOS cantidad DOSPUNTOS precio PUNTOCOMA
    ;

producto
    : ID
    ;

cantidad
    : NUMERO
    ;

precio
    : NUMERO
    ;

PEDIDO       : 'pedido';
ID           : [a-zA-Z]+;
NUMERO       : [0-9]+;

LLAVE_ABRE   : '{';
LLAVE_CIERRA : '}';
DOSPUNTOS    : ':';
PUNTOCOMA    : ';';

WS           : [ \t\r\n]+ -> skip;