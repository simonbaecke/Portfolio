import {Container, Image, Row, Col} from "react-bootstrap";
import '../App.css';
import React from "react";
import hoofd from '../assets/aboutmefoto.png'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'



const AboutMe = () => {
    return (
        <div className="page-host">
            <Container fluid>
                <Row>
                    <Col md={12} lg={4}>
                        <Image src={hoofd} fluid></Image>
                    </Col>
                    <Col className="mx-lg-5 my-sm-5">
                        <h2>
                            Simon Baecke
                        </h2>
                        <p style={{fontSize: 18}}>
                            Welkom op mijn portfolio. Mijn naam is Simon Baecke en ik studeer ingenieurswetenschappen architectuur aan de UGent. Ik heb reeds mijn bacheloropleiding van 3 jaar voltooid en zit nu in het eerste jaar van mijn twee jaar durende masteropleiding.
                        </p>
                        <p style={{fontSize: 18}}>
                            Op deze website kan u al mijn projecten vinden die ik doorheen de jaren als student architectuur heb gemaakt. 
                        </p>
                        <a href="https://www.facebook.com/simon.baecke.9" target="_blank"><Image src={facebook} width="25px" height="25px"></Image></a>
                        <a className="mx-2" href="https://www.instagram.com/simonbaecke/" target="_blank"><Image src={instagram} width="25px" height="25px"></Image></a>
                        <a href="https://twitter.com/BaeckeSimon" target="_blank"><Image src={twitter} width="25px" height="25px"></Image></a>
                        <a className="mx-2" href="https://github.com/simonbaecke" target="_blank"><Image src={github} width="25px" height="25px"></Image></a>
                        <a href="https://www.linkedin.com/in/simonbaecke" target="_blank"><Image src={linkedin} width="25px" height="25px"></Image></a> 
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <h1 class="text-center my-4">
                        Vaardigheden
                    </h1>  
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.microsoft.com/nl-be/microsoft-365/microsoft-office" target="_blank" className="link">Microsoft Office</a></p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.python.org" target="_blank" className="link">Python</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.adobe.com/be_nl/products/photoshop.html" target="_blank" className="link">Adobe Photoshop</a></p>
                    </Col>
                    <Col xs={12} lg={6}>
                    <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.adobe.com/be_en/products/illustrator.html" target="_blank" className="link">Adobe Illustrator</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription" target="_blank" className="link">Autodesk Autocad</a></p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.autodesk.be/nl/products/revit/overview?term=1-YEAR&tab=subscription" target="_blank" className="link">Autodesk Revit</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.rhino3d.com" target="_blank" className="link">Rhinoceros</a></p>
                    </Col>
                    <Col>
                        <p className="text-center my-2" style={{fontSize: 18}}><a href="https://www.grasshopper3d.com" target="_blank" className="link">Grasshopper</a></p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default AboutMe

