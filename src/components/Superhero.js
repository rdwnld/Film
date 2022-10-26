import './style.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from './Cardfilm'

import Antman from '../assets/superhero/antman.jpg'
import Avenger from '../assets/superhero/avenger.jpg'
import Batman from '../assets/superhero/batman.jpg'
import Robinhood from '../assets/superhero/robinhood.jpg'
import Spiderman from '../assets/superhero/spiderman-cover.jpg'
import Superman from '../assets/superhero/superman.jpg'



const Superhero = () => {
    return (
        <>
            < div className='sph' >
                <Container className='text-center mt-5'>
                    <h1 className='text-light' id='superhero'>Superhero</h1>

                    <Row className='mb-4'>
                        <Col>
                            <Card gambar={Antman} judul="Antman" />
                        </Col>
                        <Col>
                            <Card gambar={Avenger} judul="Avenger" />
                        </Col>
                        <Col>
                            <Card gambar={Batman} judul="Batman" />
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col>
                            <Card gambar={Robinhood} judul="Robinhood" />
                        </Col>
                        <Col>
                            <Card gambar={Spiderman} judul="Spiderman" />
                        </Col>
                        <Col>
                            <Card gambar={Superman} judul="Supermann" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Superhero