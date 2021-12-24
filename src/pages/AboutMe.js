import {Container, Image, Row, Col} from "react-bootstrap";
import '../App.css';
import React from "react";
import { Socialbuttons } from "../components/socialbuttons";



const AboutMe = () => {
    return (
        <div className="page-host">
            <Container fluid>
                <Row>
                    <Col md={12} lg={4}>
                        <Image src="http://localhost:5000/simon/mydata/aboutmefoto.png" fluid></Image>
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
                        <Row>
                            <Socialbuttons/>
                        </Row>

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

