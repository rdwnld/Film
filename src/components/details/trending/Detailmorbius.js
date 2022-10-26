import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'

const Detailmorbius = () => {
    return (
        <Container fluid className='bg-dark py-5 detail'>
            <Container>
                <h2 className='text-center text-light mt-5'>Morbius</h2>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'><iframe width="560" height="315" src="https://www.youtube.com/embed/THjDv_26xQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                    <Col className='text-light'>
                        <p>Ahli biokimia Michael Morbius (Jared Leto) mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir.</p>
                        <hr></hr>
                        <p>Tanggal rilis: 30 Maret 2022 (Indonesia)
                            <br></br>
                            Sutradara: Daniel Espinosa
                            <br></br>
                            Box office: 163,9 juta USD
                            <br></br>
                            Musik digubah oleh: Jon Ekstrand
                            <br></br>
                            Didistribusikan oleh: Sony Pictures Motion Picture Group
                            <br></br>
                            Produser: Avi Arad, Matt Tolmach, Lucas Foster</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr></hr>
                        <p>Ahli biokimia Michael Morbius (Jared Leto) mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir.</p>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detailmorbius