import React, {render} from 'react'
import '../App.css'
import {Container, Accordion, Button, Carousel} from 'react-bootstrap'
import dienstencentrum from '../assets/dienstcentrum.png'
import dienstencentrum2 from '../assets/dienstcentrum2.png'
import dienstencentrum3 from '../assets/dienstcentrum3.png'
import dienstencentrum4 from '../assets/dienstcentrum4.png'
import pluswonen from '../assets/pluswonen.png'
import pluswonen2 from '../assets/pluswonen2.png'
import pluswonen3 from '../assets/pluswonen3.png'
import pluswonen4 from '../assets/pluswonen4.png'
import bio from '../assets/Bio.png'
import bio2 from '../assets/bio2.png'
import bio3 from '../assets/bio3.png'
import bio4 from '../assets/bio4.png'
import bim from '../assets/bim.png'
import bim2 from '../assets/bim2.png'
import bim3 from '../assets/bim3.png'


const Projects = () => {
    return (
        <div className="page-host">
            <Container>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dienstencentrum</Accordion.Header>
                        <Accordion.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dienstencentrum}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dienstencentrum2}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dienstencentrum3}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dienstencentrum4}
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p className="my-3" style={{fontSize: 18}}>In het kader van het concept van de zorgzame buurt, waarbij een buurtgerichte en samenhangende integratie van wonen, zorg en welzijn wordt nagestreefd, wordt een ontwerp gemaakt voor een dienstencentrum. Het dienstencentrum is een schakel in de buurtbeleving van de wijk waar een mix van verschillende leeftijden en nationaliteiten samenkomen. Het huist een cafetaria, bibliotheek, speelotheek, politiebureau, burgerzaken, pedicure, doucheruimtes & activiteitenlokalen. </p>
                            <Button className= "mt-4" variant="dark">Vaardigheden</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Pluswonen</Accordion.Header>
                        <Accordion.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={pluswonen}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={pluswonen2}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={pluswonen3}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={pluswonen4}
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p className="my-3" style={{fontSize: 18}}>De opdracht omvat een stadswoning op een leegstaand kavel in Gent. De woning moet over een verhoogd rendement bezitten waarbij een plusruimte wordt aangeschakeld om de polyvalentie van de woning te ondersteunen. Concreet betekent dit dat we starten vanuit de woonbehoefte van een gemiddeld gezin (ouders met twee kinderen) waarbij ruimte voorzien wordt die een flexibele invulling kan krijgen in functie van de omstandigheden/behoeften. Dit kan gaan over inwonende grootouders of student, een wijziging in de gezinssamenstelling (kinderen het huis uit, samengesteld gezin, alleenstaand), wijziging in de werksituatie (thuiswerken, eigen praktijk, co-working) of vanuit een sociaal engagement tijdelijk onderdak kunnen bieden…enz. Daarbovenop voorzien we ook nog een atelier-ruimte op het terrein. Deze kan dienstig zijn voor klussen of voor een activiteit in bijberoep,… al dan niet door één of meerdere bewoners van het pand. Eventueel kan deze ruimte ook onafhankelijk verhuurd worden. </p>
                            <Button className= "mt-4" variant="dark">Vaardigheden</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>BioBourgooien</Accordion.Header>
                        <Accordion.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bio}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bio2}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bio3}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bio4}
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p className="my-3" style={{fontSize: 18}}>Een ontwerp voor een stadsboerderij gelegen in een overstromingsgebied. De site moest een biologische boerderij huizen, in combinatie met een hostel dat geniet van de voordelen van de natuur.</p>
                            <Button className= "mt-4" variant="dark">Vaardigheden</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Charles Vandenhove Paviljoen</Accordion.Header>
                        <Accordion.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bim}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bim2}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bim3}
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p className="my-3" style={{fontSize: 18}}>Een project in samenwerking met Bregt Logghe & Stef Lemmens waarbij een digitaal BIM model moest opgebouwd op basis van een bestaande architectuurparel. Onze keuze viel op het Charles Vandenhove Paviljoen te Gent. Het gebouw werd opgebouwd in Autodesk Revit met ondersteuning van Rhinoceros.</p>
                            <Button className= "mt-4" variant="dark">Vaardigheden</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}

export default Projects