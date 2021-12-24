import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../App.css'
import { useState, useEffect } from 'react'

const Shortinfo = () => {
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
    
    return (
        <div>
            {projects.map((project) => (
                <Row className="mt-3" key={project.id}>
                    <Col md={12} lg={6} >
                        <Image src={project.home} rounded fluid>
                        </Image>
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


export {Shortinfo}