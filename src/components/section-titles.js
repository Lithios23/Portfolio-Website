import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Styles from '../sass/section-titles.module.scss'

function MainTitle(){
    
    return (
        <Container fluid id={Styles.mainTitle} className='p-0'>
            <div id={Styles.topText}>
                <p className='text-white m-0'>Hey there, I'm</p>
            </div>
            <Container fluid className='p-0 bg-secondary'>
                <Row className="d-flex align-items-center p-0 m-0">
                    <Col xs='2' className="h-100 p-0">
                        <span className={`w-100 bg-primary d-block ${Styles.titleLine}`}></span>
                    </Col>
                    <Col xs='auto p-0 d-flex px-2'>
                        <h1 className="text-primary mx-auto text-nowrap my-0 lh-1 pt-2">Max Garcia</h1>
                    </Col>
                    <Col className="h-100 p-0">
                        <span className={`w-100 bg-primary d-block ${Styles.titleLine}`}></span>
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
        <div id={Styles.projectsTitle} className="d-flex position-absolute p-0">
            <img src="./title-ends/title-end-left.png" alt=''/>
            <div className="d-flex bg-secondary">
                <span className={`my-auto w-100 bg-primary ${Styles.titleLine}`}></span>
                <h2 className="text-primary mx-3 text-nowrap my-0">Projects</h2>
                <span className={`my-auto w-100 bg-primary ${Styles.titleLine}`}></span>
            </div>
            <img src="./title-ends/title-end-right.png" alt=''/>
        </div>
    )
}

export {ContactTitle, ProjectsTitle, MainTitle};
