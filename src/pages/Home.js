import React from 'react'
import { Row, Container} from 'react-bootstrap'
import { Shortinfo } from '../components/shortinfo'
import '../App.css'
import { useMatchMedia } from "../useMatchMedia";
import { Carouselh } from '../components/Carouselhome ';



const Home = () => {
    const isDesktopResolution = useMatchMedia("(min-width:992px)", true);
    return (
        <div className="page-host">
            <Container fluid>
                <Row>
                    {isDesktopResolution && <Carouselh/>}
                </Row>
                <Shortinfo />
            </Container>
        </div>
    )
}

export default Home