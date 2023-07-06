import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, FormLabel, Row } from 'react-bootstrap'
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import IndiaMap from './IndiaMap';
import StateMap from './StateMap';

export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const [stateCode, setStateCode] = useState("");
    const [stateName, setStateName] = useState("");
    const [stateMap, setStateMap] = useState("");
    const navigate = useNavigate()
    async function handleLogout() {
        try {
            await logout()
            navigate("/login")
        } catch {
            console.log("Error while logout")
        }
    }
    useEffect(() => {
        if (!currentUser) {
            navigate("/login")
        }
    }, [])
    return (
        <div>
            <Card style={{ display: 'flex' }}>
                <Card.Body>
                    <FormLabel>Profile</FormLabel>{"  "}
                    <Button onClick={handleLogout}>Logout</Button>
                </Card.Body>
            </Card>
            <Container style={{ padding: '10px' }}>
                <Row>
                    {
                        !stateMap &&
                        <Col>
                            <Card>
                                <Card.Body>
                                    <IndiaMap
                                        setStateCode={setStateCode}
                                        setStateName={setStateName}
                                        setStateMap={setStateMap}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                    {
                        stateMap &&
                        <Col>
                            <StateMap stateMap={stateMap} stateName={stateName} />
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
}
