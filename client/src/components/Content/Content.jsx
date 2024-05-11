import React from 'react';
import MyPic from './MyPic/MyPic';
import MyName from './MyName/MyName';
import { Col, Row } from 'antd';

const MyContent = () => {
    return (
        <Row style={{"border":'2px solid red'}}>
            <Col style={{"border":'2px solid blue'}}>
                <MyPic/>
            </Col>
            {/* <Col style={{"border":'2px solid black'}}>
                <MyName/>
            </Col> */}
        </Row>
    );
}

export default MyContent;
