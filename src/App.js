import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Items from './components/Items'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

import Timing from './components/Timing'

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Timing/>
            <About/>
            <Items/>
            <Menu/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
