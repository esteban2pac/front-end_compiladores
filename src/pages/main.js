import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Main = () => {
    return (
        <div class="container-fluid">
            <Row>
                <Col>
                    <label for="caja_de_interprete" class="form-label"><h3>¡Ingrese aqui su codigo!</h3></label>
                    <textarea class="form-control" id="caja_de_interprete" rows="70"></textarea>
                    <button type="button" class="btn btn-primary float-end">Interpretar</button>
                    <button type="button" class="btn btn-success float-end">Ejecutar</button>
                </Col>
                <Col>
                    
                        <label for="codigo_estudiante" class="form-label"><h3>¡Importante!</h3></label>
                        <h4>
                        estos son nuestros cambios a el idioma:<br/>
                        'num' : 'NUMERO',<br/>
                        'mostrar' : 'IMPRIMIR',<br/>
                        'meanwhile' : 'MIENTRAS',<br/>
                        'si' : 'IF',<br/>
                        'sino' : 'ELSE'<br/>
                        </h4>
                        <h3>Codigo base del estudiante</h3>
                        <p>
                        //Se imprime el encabezado<br/>
                        mostrar("Tablas de" & " multiplicar");<br/>
                        //Se declara la variable a, de tipo num<br/>
                        num a;<br/>
                        //Se asigna a la variable a el valor 0<br/>
                        a=0;<br/>
                        //Se declara la variable c, de tipo num<br/>
                        num c;<br/>
                        //Se asigna a la variable c el valor 0<br/>
                        c=6;<br/>
                        //Se imprime un separador<br/>
                        mostrar("----------------");<br/>
                        /**<br/>
                        * Se imprimen las tablas del 1 al 5 y <br/>
                        * para cada tabla, se imprimen los resultados<br/>
                        * desde el uno hasta el 10, esto se hace con <br/>
                        * dos ciclos while anidados. <br/>
                        meanwhile(a&lsaquo;4+c)&#123;	<br/>
	                    a=a+1;<br/>
	                    num b;<br/>
	                    b=0;<br/>
	                    meanwhile(b&lsaquo;4+c)&#123;<br/>
		                b=b+1;<br/>
		                mostrar(a & " * " & b & " = " & a * b);<br/>
	                    &#125;<br/>
	                    mostrar("----------------");<br/>
                        &#125;<br/>
                        //Se asigna a la variable a el valor de 11<br/>
                        a=11;<br/>
                        /**<br/>
                        * La variable b ya había sido declarada pero <br/>
                        * dentro del ámbito del primer ciclo while, <br/>
                        * entonces no existe en este ámbito por lo que <br/>
                        * debe declararse.<br/>
                        **/<br/>
                        num b;<br/>
                        //Se asigna valor de 12 a b y valor de 13 a c<br/>
                        b=12;<br/>
                        c=13;<br/>
                        /**<br/>
                        * Se evalua si el valor de la variable a es <br/>
                        * mayor que 10, si el b es mayor que 11 y si<br/>
                        * el de c es mayor que 12. <br/>
                        **/<br/>
                        si(a&#8250;10)&#123;<br/>
                            mostrar("a es mayor que 10.");<br/>
                            si(b&#8250;11)&#123;<br/>
                                mostrar("a es mayor que 10 y b es mayor que 11.");<br/>
                                si(c&#8250;12)&#123;<br/>
                                    mostrar("a es mayor que 10, b es mayor que 11 y c es mayor que 12.");<br/>
                                &#125;<br/>
                            &#125;<br/>
                        &#125;sino&#123;<br/>
                            mostrar("a es menor o igual que 10.");<br/>
                        &#125;<br/>
                        </p>
                    
                </Col>
            </Row>
            </div>
    );
};
export default Main;