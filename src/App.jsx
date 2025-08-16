import React, { useState } from 'react';
import Navbar from './components/navBar/Navbar';
import Hero from './components/hero/Hero';
import Programs from './components/programs/program';
import Title from './components/titles/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import VedioPlayer from './components/vedioPlayer/VedioPlayer';


const App = () => {

  const [playState , setPlayState] = useState(false)

  return ( 
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What we Offer"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallary" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="Testimonials" title="What Students Say"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VedioPlayer playState={playState} setPlayState={setPlayState} />
    </div>
   );
}
export default App;