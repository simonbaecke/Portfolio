import React from 'react'
import { Carousel, Card, Row, Col, Container, Image } from 'react-bootstrap'
import {CarouselComponent} from '../components/Carousel'
import '../App.css'
import slide1 from '../assets/dienstcentrum.png'
import slide2 from '../assets/pluswonen.png'
import slide3 from '../assets/Bio.png'
import slide4 from '../assets/bim.png'

const Home = () => {
    return (
        <div className="page-host">
            <Container fluid>
                <Row>
                        <CarouselComponent/>
                </Row>
                <Row className="mt-5">
                    <Col md={12} lg={6}>
                        <Image src={slide1} rounded fluid>
                        </Image>
                    </Col>
                    <Col md={12} lg={6}>
                        <p class="right">17/05/2021</p><h3><a href="/projects" className="link">Dienstencentrum</a></h3>
                        <p style={{fontSize: 18}}>In het kader van het concept van de zorgzame buurt, waarbij een buurtgerichte en samenhangende integratie van wonen, zorg en welzijn wordt nagestreefd, wordt een ontwerp gemaakt voor een dienstencentrum.</p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={12} lg={6}>
                        <Image src={slide2} rounded fluid>
                        </Image>
                    </Col>
                    <Col md={12} lg={6}>
                        <p class="right">07/12/2020</p><h3><a href="/projects" className="link">Pluswonen</a></h3>
                        <p style={{fontSize: 18}}>Ontwerp van een stadswoning met een verhoogd ruimtelijk rendement. Op een klassiek kavel in Gent wordt een vernieuwende woning ontworpen die collectieve woon- en werkvormen toelaat en daartoe bijdraagt.</p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={12} lg={6}>
                        <Image src={slide3} rounded fluid>
                        </Image>
                    </Col>
                    <Col md={12} lg={6}>
                        <p class="right">25/05/2020</p><h3><a href="/projects" className="link">BioBourgooien</a></h3>
                        <p style={{fontSize: 18}}>Een ontwerp voor een stadsboerderij gelegen in een overstromingsgebied. De site moest een biologische boerderij huizen, in combinatie met een hostel dat geniet van de voordelen van de natuur.</p>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={12} lg={6}>
                        <Image src={slide4} rounded fluid>
                        </Image>
                    </Col>
                    <Col md={12} lg={6}>
                        <p class="right">11/12/2020</p><h3><a href="/projects" className="link">Charles Vandenhove Paviljoen</a></h3>
                        <p style={{fontSize: 18}} >Een project in samenwerking met Bregt Logghe & Stef Lemmens waarbij een digitaal BIM model moest opgebouwd op basis van een bestaande architectuurparel. Hier het Charles Vandenhove Paviljoen te Gent.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home