import React, { useRef, useState } from 'react'
import { Form, Button, Card, FormGroup, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Password do not match")
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch (error) {
            
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Sign Up</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <FormGroup id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' ref={emailRef} required />
                                </FormGroup>
                                <FormGroup id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' ref={passwordRef} required />
                                </FormGroup>
                                <FormGroup id='confirm-password'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type='confirm-password' ref={confirmPasswordRef} required />
                                </FormGroup>
                                <Button disabled={loading} type='submit'>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Already have an account? <Link to={'/login'}> Log in </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
