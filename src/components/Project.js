import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return(
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Urban Tour</Card.Title>
                            <Card.Text>
                                It's a project about the Toursim Prediction. 
                                <br/>
                                <iframe width="90%" height="250" src="https://www.youtube.com/embed/zkH6Xu2_8MA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Text>
                            <Button variant="primary" href="https://www.youtube.com/watch?v=zkH6Xu2_8MA">
                                Go to Video
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>Tourism Network</Card.Title>
                            <Card.Text>
                                It's a project about the Tourism Network. 
                                <br/>
                                <iframe width="90%" height="250" src="https://www.youtube.com/embed/XxyWzBUp-NU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Text>
                            <Button variant="primary" href="https://www.youtube.com/embed/XxyWzBUp-NU">
                             Go to Video
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Project;