import React, { useState, useEffect } from 'react'
import '../App.css'
import { Container, Accordion, Button, Carousel, Col, Row, OverlayTrigger, Popover } from 'react-bootstrap'



const Longinfo = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchData(e) {
            const requestOptions = {
                method: "GET"
            }
            const data = await fetch(`http://localhost:5000/simon/mydata/projects.json`, requestOptions)
            const body = await data.json()
            setProjects(body)
            }
            fetchData()
    }, [])

    const popover = (
        <Popover id="popover-basic">
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="outline-dark">Vaardigheden</Button>
        </OverlayTrigger>
      );
      
    return (
        
        <div className="page-host">
            <Container>
                <Accordion>
                    {projects.map((project) => (
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
                                        <Col>
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
                                        <Col>
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
                                        <Col>
                                        <Row className='korteInfo'>
                                                <p><b>Academiejaar</b></p>
                                            </Row>
                                            <Row className='korteInfo'>
                                                <p>{project.jaar}</p>
                                            </Row>
                                            <Row className='korteInfo'>
                                                <p><b>Budget</b></p>
                                            </Row>
                                            <Row className='korteInfo'>
                                                <p>{project.budget}</p>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className='korteInfo'>
                                                <p><b>Datum</b></p>
                                            </Row>
                                            <Row className='korteInfo'>
                                                <p>{project.datum}</p>
                                            </Row>
                                            <Row className='korteInfo'>
                                                <Example />
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

export {Longinfo}