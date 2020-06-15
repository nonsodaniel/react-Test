import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'
import '../assets/css/home.css'
import Home2 from './Home2'
import Home1 from './Home1'

export const Home = () => {
    return (
        <>

            <section id="hero">
                <Header />
                <Home2 />
                <div className="img-overlay"></div>
            </section >
        </>
    )
}
