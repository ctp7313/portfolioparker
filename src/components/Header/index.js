import React from 'react';
import { Col, Row, Container } from "../Grid";

function Header(props) {

    return(
        <div>
            <Row>
                <h1>{ props.headerName }</h1>
            </Row>
            <Row>
                <h5>{ props.subLine }</h5>
            </Row>
        </div>
    );
}

export default Header;