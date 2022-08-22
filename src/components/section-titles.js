import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Styles from '../sass/section-titles.module.scss'
import Stack from 'react-bootstrap/Stack'

function MainTitle(){
    
    return (
        <Container fluid id={Styles.mainTitle} className='p-0 mt-5 position-absolute'>
            <Row className='m-0'>
                <Col xs={{offset:2}} className='p-0'>
                    <p className='text-white m-0 ms-4'>Hey there, I'm</p>
                </Col>
            </Row>
            <Container fluid className='p-0 bg-secondary'>
                <Row className="d-flex align-items-center p-0 m-0">
                    <Col xs='3' className="h-100 p-0">
                        <span className={`w-100 bg-primary d-block ${Styles.titleLine}`}></span>
                    </Col>
                    <Col xs='5 p-0 d-flex'>
                        <h1 className="text-primary mx-auto text-nowrap my-0 lh-1 pt-2">Max Garcia</h1>
                    </Col>
                    <Col className="h-100 p-0">
                        <span className={`w-100 bg-primary d-block ${Styles.titleLine}`}></span>
                    </Col>
                </Row>
                <Row className='m-0 mt-n1'>
                    <Col xs={{span:'5', offset:3}} className='d-flex pb-1'>
                        <Stack direction="horizontal" gap={6} className="mx-auto">
                            <a href="#about" class={Styles.headerLinks}>About</a>
                            <a href="#projects" class={Styles.headerLinks}>Projects</a>
                            <a href="#contact" class={Styles.headerLinks}>Contact</a>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

function ContactTitle(){
    
    return (
        <div className="bg-secondary d-flex justify-content-center align-items-center p-0">
            <span className={`w-100 bg-primary ${Styles.titleLine}`}></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Contact Me!</h2>
            <span className={`w-100 bg-primary ${Styles.titleLine}`}></span>
        </div>
    )
}

function ProjectsTitle(){
    
    return (
        <div id={Styles.projectsTitle} className="bg-secondary d-flex justify-content-center align-items-center p-0">
            <span className={`w-100 bg-primary ${Styles.titleLine}`}></span>
            <h2 className="text-primary mx-3 text-nowrap my-0">Projects</h2>
            <span className={`w-100 bg-primary ${Styles.titleLine}`}></span>
        </div>
    )
}

export {ContactTitle, ProjectsTitle, MainTitle};
