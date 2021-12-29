import {Container, Image, Row, Col} from "react-bootstrap";
import '../App.css';
import React from "react";
import { Socialbuttons } from "../components/socialbuttons";
import { Skills } from "../components/skills";



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
                            Op deze website kan u enkele van mijn projecten vinden die ik doorheen de jaren als student architectuur heb gemaakt. 
                        </p>
                        <Row>
                            <Socialbuttons/>
                        </Row>

                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <h2 class="text-center my-4">
                        Vaardigheden
                    </h2>  
                </Row>
                <Skills/>
            </Container>

        </div>
    )
}


export default AboutMe

