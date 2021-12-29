import React from "react"
import { Carousel } from "react-bootstrap"
import '../App.css'
import useFetch from "../hooks/useFetch"

const Carouselh = () => {
    const {data} = useFetch('http://localhost:5000/simon/mydata/projects.json') // importeren van custom hook get request

    return (
        <div>
            <Carousel variant="dark" className="mb-3">
                {data.map((project) => ( //map doorheen json
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