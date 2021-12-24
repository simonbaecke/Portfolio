import React from "react"
import { useState, useEffect } from 'react'
import { Carousel } from "react-bootstrap"
import '../App.css'

const Carouselh = () => {
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
            <Carousel className="mb-3">
                {projects.map((project) => (
                    <Carousel.Item key={project.id}>
                        <img
                            className="d-block w-100"
                            src={project.home}
                        />
                        <Carousel.Caption>
                            <h3>{project.titel}</h3>
                            <p>{project.vak}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export { Carouselh };