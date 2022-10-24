import React from "react";
import Styles from "../sass/horizontal-carousel.module.scss";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faSquareJs, faCss3Alt, faReact, faBootstrap, faSass, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function HorizontalCarousel() {
  return (
    <Container fluid id={Styles.wrapper} className='p-0 overflow-hidden position-relative'>
      <div id={Styles.carousel} className='d-flex'>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faHtml5}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faCss3Alt}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faSquareJs}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faReact}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faBootstrap}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faSass}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faPython}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faDatabase}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faHtml5}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faCss3Alt}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faSquareJs}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faReact}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faBootstrap}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faSass}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faPython}/>
        </div>
        <div className={`${Styles.item} d-flex justify-content-center align-items-center`}>
          <FontAwesomeIcon icon={faDatabase}/>
        </div>
      </div>
    </Container>
  )
}