import React from 'react'
import Footer from "./componentes/iu/Footer";
import NavBar from "./componentes/iu/NavBar";
import { Routes, Route } from 'react-router-dom';
import Genero from '../componentes/genero/Genero';
import Directores from '../componentes/directores/Directores';
import Productora from '../componentes/productora/Productora';
import Tipo from '../componentes/tipo/Tipo';
import Media from '../componentes/media/Media'

export default function AppRouters() {
    return (
        <>
            <div className="container">
                <NavBar />
                <Routes>
                    <Route path ='/' element={<Genero/>}/>
                    <Route path ='/directores' element={<Directores/>}/>
                    <Route path ='/productora' element={<Productora/>}/>
                    <Route path ='/tipo' element={<Tipo/>}/>
                    <Route path ='/series-peliculas' element={<Media/>}/>
                    
                </Routes>

            </div>
            <Footer />
        </>
    )
}
