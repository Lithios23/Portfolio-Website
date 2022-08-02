import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"

function MainTitle(){
    
    return (
        <Container fluid className='p-0 mt-5 main-title position-absolute'>
            <p className='text-white m-0' id="header-text">Hey there, I'm</p>
            <Row className="bg-secondary d-flex align-items-center p-0 m-0">
                <Col xs='2' className="h-100 p-0">
                    <span className="title-line w-100 bg-primary d-block"></span>
                </Col>
                <Col xs='auto p-0'>
                    <h1 className="text-primary mx-3 text-nowrap my-0 lh-1 pt-2">Max Garcia</h1>
                </Col>
                <Col className="h-100 p-0">
                    <span className="title-line w-100 bg-primary d-block"></span>
                </Col>
            </Row>
        </Container>
    )
}

function ContactTitle(){
    
    return (
        <div className="bg-secondary d-flex justify-content-center align-items-center p-0">
            <span className="title-line w-100 bg-primary"></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Contact Me!</h2>
            <span className="title-line w-100 bg-primary"></span>
        </div>
    )
}

function ProjectsTitle(){
    
    return (
        <div className="bg-secondary d-flex justify-content-center align-items-center p-0 projects-title">
            <span className="title-line w-100 bg-primary"></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Projects</h2>
            <span className="title-line w-100 bg-primary"></span>
        </div>
    )
}

export {ContactTitle, ProjectsTitle, MainTitle};
