import React from 'react'
import '../App.css'
import { Container, Accordion,Carousel, Col, Row} from 'react-bootstrap'
import useFetch from '../hooks/useFetch'



const Longinfo = () => {
    const {data} = useFetch('http://localhost:5000/simon/mydata/projects.json') // importeren van custom hook get request

    return ( // accordion met carousel van 4 slides per project, meer informatie over project & een aantal vaste eigenschappen per project
        <div className="page-host">
            <Container> 
                <Accordion>
                    {data.map((project) => ( 
                        <Accordion.Item eventKey={project.id}>
                            <Accordion.Header>{project.titel}</Accordion.Header> 
                            <Accordion.Body>
                                <Carousel> 
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={project.home}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={project.slide2}
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={project.slide3}
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={project.slide4}
                                        />

                                    </Carousel.Item>
                                </Carousel>
                                <p className="my-3" style={{ fontSize: 18 }}>{project.langeOmschrijving} </p>
                                <Row>
                                    <Col md={6} lg={3}>
                                        <Row className='korteInfo'>
                                            <p><b>Programma</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.programma}</p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p><b>Locatie</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.locatie}</p>
                                        </Row>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <Row className='korteInfo'>
                                            <p><b>Vak</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.vak}</p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p><b>Oppervlakte</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.opp}</p>
                                        </Row>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <Row className='korteInfo'>
                                            <p><b>Academiejaar</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.jaar}</p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p><b>Opdrachtgever(s)</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.opdrachtgever}</p>
                                        </Row>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <Row className='korteInfo'>
                                            <p><b>Datum</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.datum}</p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p><b>Budget</b></p>
                                        </Row>
                                        <Row className='korteInfo'>
                                            <p>{project.budget}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    )
}

export { Longinfo }