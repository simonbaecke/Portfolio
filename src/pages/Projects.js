import React from 'react'
import '../App.css'
import {Container, Tab, Tabs, Card, Image} from 'react-bootstrap'
import slide2 from '../assets/Bio.png'

const Projects = () => {
    return (
        <div className="page-host">
            <Container>

                    <Tabs defaultActiveKey="ontw1" id="uncontrolled-tab-example" className="mb-3">
                        <Tab classname="grey-letter" eventKey="ontw1" title="Dienstencentrum">
                            Hallo
                            <Image src={slide2} rounded fluid></Image>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        </Tab>
                    </Tabs>

            </Container>
        </div>
    )
}

export default Projects