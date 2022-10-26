import './style.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from './Cardfilm'


import Dune from '../assets/trending/dune.jpg'
import Morbius from '../assets/trending/morbius.jpg'
import Joker from '../assets/trending/joker.jpg'
import Everything from '../assets/trending/everything.jpg'
import Lightyear from '../assets/trending/lightyear.jpg'
import Infinite from '../assets/trending/infinite.jpg'


const Trending = () => {
    return (
        <>
            <div className='trd'>
                <Container className='text-center'>
                    <h1 className='text-light' id='trending'>Trending</h1>

                    <Row className='mb-4'>
                        <Col>
                            <Card gambar={Morbius} judul="Morbius" />
                        </Col>
                        <Col>
                            <Card gambar={Dune} judul="Dune" />
                        </Col>
                        <Col>
                            <Card gambar={Joker} judul="Joker" />
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col>
                            <Card gambar={Infinite} judul="Infinite" />
                        </Col>
                        <Col>
                            <Card gambar={Everything} judul="Everything" />
                        </Col>
                        <Col>
                            <Card gambar={Lightyear} judul="Lightyear" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Trending