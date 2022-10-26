import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'

const Detailavenger = () => {
    return (
        <Container fluid className='bg-dark py-5 detail'>
            <Container>
                <h2 className='text-center text-light mt-5'>Antman</h2>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'><iframe width="560" height="315" src="https://www.youtube.com/embed/ZBVhuhnWxKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                    <Col className='text-light'>
                        <p>Ant-Man (bahasa Indonesia: Manusia Semut) adalah sebuah film superhero Amerika Serikat yang dirilis pada 17 Juli 2015. Film ini merupakan film kedua belas di Marvel Cinematic Universe. Film ini dibintangi oleh Paul Rudd, Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Peña, Judy Greer, Tip "T.I.</p>
                        <hr></hr>
                        <p>Pemeran: Paul Rudd; Evangeline Lilly;</p>
                        <p>Penulis skenario: Adam McKay; Paul Rudd</p>
                        <p>Didasarkan dari: Ant-Man; oleh Stan Lee;</p>

                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr></hr>
                        <p>PDengan setelan kostum berkemampuan luar biasa untuk mengecilkan diri dalam skala ekstrim dan meningkatkan kekuatan, Scott yang dulu adalah seorang pencuri ahli, kini berubah menjadi sosok superhero.</p>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detailavenger