import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../App.css'
import useFetch from '../hooks/useFetch'

const Shortinfo = () => {
    const { data } = useFetch('http://localhost:5000/simon/mydata/projects.json') // importeren van custom hook get request

    return ( // ontwerp van eigen soort kaart component met korte info voor project op homepagina
        <div>
            {data.map((project) => (
                <Row className="my-3" key={project.id}>
                    <Col md={12} lg={6} >
                        <a href="/projects">
                            <Image src={project.home} rounded fluid>
                            </Image>
                        </a>
                    </Col>
                    <Col md={12} lg={6} >
                        <p class="right">{project.datum}</p><h3><a href="/projects" className="link">{project.titel}</a></h3>
                        <p style={{ fontSize: 18 }}>{project.korteOmschrijving}</p>
                    </Col>
                </Row>
            ))}
        </div>
    );
}


export { Shortinfo }