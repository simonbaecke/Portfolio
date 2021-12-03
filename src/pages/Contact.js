import {Container, Row, Col} from 'react-bootstrap';
import {Maps} from '../components/maps';
import '../App.css'

const Contact = () => {
    return (
        <div className="page-host">
            <Container fluid>
                <Row>
                    <Col md={12} lg={6}>
                        <h5>Simon Baecke Architecten</h5>
                        <p>
                            Jozef Platteaustraat 22<br />
                            9000 Gent<br />
                            <a href='mailto:simon.baecke@ugent.be' className="link"> simon.baecke@ugent.be</a><br />
                            t/f: +32 (0)499 63 63 88<br />
                            BTW BE 0123 456 789
                        </p>
                    </Col>
                    <Col  md={12} lg={6}>
                        <Maps/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact