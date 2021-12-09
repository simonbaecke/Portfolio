import React from "react"
import { Carousel } from "react-bootstrap"
import slide1 from '../assets/dienstcentrum.png'
import slide2 from '../assets/pluswonen.png'
import slide3 from '../assets/Bio.png'
import slide4 from '../assets/bim.png'
import '../App.css'

const CarouselComponent = () => {
    return (
        <div>
            <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide1}
                                />
                                <Carousel.Caption>
                                <h3>Dienstencentrum</h3>
                                <p>Architectuurontwerp 3</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide2}
                                />

                                <Carousel.Caption>
                                <h3>Pluswonen</h3>
                                <p>Architectuurontwerp 3</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide3}
                                />

                                <Carousel.Caption>
                                <h3>BioBourgooien</h3>
                                <p>Architectuurontwerp 2</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide4}
                                />
                                <Carousel.Caption>
                                <h3>Charles Vandenhove Paviljoen</h3>
                                <p>Informatiebeheer in architectuur- en bouwprojecten</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                </Carousel>
        </div>
    );
}

export {CarouselComponent};