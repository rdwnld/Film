import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'

const Detaildune = () => {
    return (
        <Container fluid className='bg-dark py-5 detail'>
            <Container>
                <h2 className='text-center text-light mt-5'>Dune</h2>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'><iframe width="560" height="315" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>.</Col>
                    <Col className='text-light'>
                        <p>Sinopsis Dune kali ini menceritakan tentang perjalanan Duke Atreides (Oscar Isaac) menjelajahi gurun bernama Dune untuk mendapat sumber spice (rempah-rempah).</p>
                        <hr></hr>
                        <p>Kekuatan spice yang luar biasa bisa membantu manusia berumur panjang, sangat cerdas, bahkan mampu menjelajahi luar angkasa dengan kecepatan cahaya.</p>
                        <hr></hr>
                        <p>Tanggal rilis: 13 Oktober 2021 (Indonesia)
                            <br></br>
                            Sutradara: Denis Villeneuve<br></br>
                            Box office: 401,8 juta USD<br></br>
                            Diadaptasi dari: Dune<br></br>
                            Didistribusikan oleh: Warner Bros. Pictures<br></br>
                            Nominasi: Academy Award untuk Musik Orisinil Terbaik, LAINNYA</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr></hr>
                        <p>Perjalanan pahlawan mitis dan emosional, Dune"menceritakan kisah Paul Atreides, seorang pemuda cerdas dan berbakat yang lahir dalam takdir besar di luar pemahamannya, yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depannya.</p>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detaildune