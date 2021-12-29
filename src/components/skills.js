import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../App.css'
import useFetch from '../hooks/useFetch'

const Skills = () => {
    const { data } = useFetch('http://localhost:5000/simon/mydata/vaardigheden.json') // importeren van custom hook get request

    return ( // korte oplijsting van nuttige vaardigheden met klein logo, om een of andere reden niet mogelijk om ze naast elkaar te plaatsen met grid columns dus per rij
        <div>
            {data.map((vaardigheid) => (
                <Row key={vaardigheid.id}> 
                    <Col xs={12} lg={6} > 
                    <div className="text-center my-2">
                            <a href={vaardigheid.link1} target="_blank" className="link">
                                <img src={vaardigheid.logo1} height="18px" />
                                <span className='mx-2' style={{ fontSize: 18 }}>{vaardigheid.titel1}</span>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} >
                        <div className="text-center my-2">
                            <a href={vaardigheid.link2} target="_blank" className="link">
                                <img src={vaardigheid.logo2} height="18px" />
                                <span className='mx-2' style={{ fontSize: 18 }}>{vaardigheid.titel2}</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
    )
}

export { Skills }