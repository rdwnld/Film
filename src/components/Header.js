import Navigasi from './Navigasi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Detaildune from './details/trending/Detaildune'
import Detailmorbius from './details/trending/Detailmorbius'
import Detailjoker from './details/trending/Detailjoker'

import Detailantman from './details/superhero/Detailantman'
import Detailavenger from './details/superhero/Detailavenger'
import Detailbatman from './details/superhero/Detailbatman'

import Home from './Home'

import './style.css'

const Header = () => {
    return (
        <div>
            <Navigasi />
            <div >
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        {/* Trending */}
                        <Route path="Dune" element={<Detaildune />} />
                        <Route path="Morbius" element={<Detailmorbius />} />
                        <Route path="Joker" element={<Detailjoker />} />
                        {/* Superhero */}
                        <Route path="Antman" element={<Detailantman />} />
                        <Route path="Avenger" element={<Detailavenger />} />
                        <Route path="Batman" element={<Detailbatman />} />

                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Header