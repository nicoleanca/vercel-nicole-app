import * as React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'

//anthuria mockups
import anthuriahp from '../images/SS_Anthuria_hp.png';

//dextera mockups
import dexterahp from '../images/SS_Dextera_hp.png'; 
import dexteract from '../images/SS_Dextera_ct.png'; 
import dexteractb from '../images/SS_Dextera_ctb.png'; 

//educated mockups
import educatedhp from '../images/SS_Educated_hp.png';



const AboutPage = () => {
  return (
    <div className="page-container">
      <NavBar/>
    <p>Hi there! I'm the proud creator of this site, which I built with React.</p>
    <p>Soon I will explain here how I built this website. Started from create-react-app and deployed it using Vercel through Git. 
      I first used the package react-router-dom to route my website. 
      On the CV page, I displayed the pdf using react-pdf to be able to preview it. This was a bit tricky to make responsive for mobile devices.
      I also played around with the button animation on that page.
      TODO: On the home page I want to use a library to mimic handwriting.
      TODO: On the fun stuff page I want to do a beautiful-dnd drag and drop to make a Puzzle. Display "I am a dog mom".
       </p>
    <div> Here are some mock-ups I did for a flower shop. I drew the logo and background in Procreate. </div>
    <img src={anthuriahp} alt="Homepage mock-up for flower shop" width="100%" height="auto"/>
    <div> Here are some mock-ups I did for a law firm.</div>
    <img src={dexterahp} alt="Homepage mock-up for a law firm" width="100%" height="auto"/>
    <img src={dexteract} alt="Contact page mock-up for a law firm" width="100%" height="auto"/>
    <img src={dexteractb} alt="Contact bar mock-up for a law firm" width="100%" height="auto"/>
    <div> Here are some mock-ups I did for an online study platform. </div>
    <img src={educatedhp} alt="Homepage mock-up for online study platform" width="100%" height="auto"/>
  </div>
  )
}



export default AboutPage