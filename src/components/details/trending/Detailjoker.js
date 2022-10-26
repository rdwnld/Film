import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'

const Detailjoker = () => {
    return (
        <Container fluid className='bg-dark py-5 detail'>
            <Container>
                <h2 className='text-center text-light mt-5'>Joker</h2>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'><iframe width="560" height="315" src="https://www.youtube.com/embed/vOW4oybCNAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                    <Col className='text-light'>
                        <p>Joker adalah film cerita seru psikologis Amerika Serikat tahun 2019 yang disutradarai oleh Todd Phillips dan diproduseri oleh Todd Philips, Bradley Cooper, dan Emma Tillinger Koskoff.</p>
                        <hr></hr>
                        <p>Tanggal rilis: 2 Oktober 2019 (Indonesia)</p>
                        <hr></hr>
                        <p>Sutradara: Todd Phillips
                            <br></br>
                            Serial film: Joker
                            <br></br>
                            Box office: 1,074 miliar USD
                            <br></br>
                            Penghargaan: Academy Award untuk Aktor Terbaik,
                            <br></br>
                            Distributor: Warner Bros. Pictures, Sf-Film<br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr></hr>
                        <p>Arthur Fleck, seorang badut pesta, hidup dalam keadaan sulit bersama ibunya yang sakit-sakitan. Karena orang-orang menganggapnya aneh, ia memutuskan untuk berubah menjadi jahat dan membuat kekacauan.</p>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detailjoker