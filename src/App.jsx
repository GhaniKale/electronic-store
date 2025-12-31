import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import {useEffect,useState} from 'react'
import FloatingWhatsapp from './components/FloatingWhatsapp'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
export default function App(){
 const [load,setLoad]=useState(true)
 useEffect(()=>{setTimeout(()=>setLoad(false),2000)},[])
 if(load) return <Preloader/>
 return(<>
  <Navbar/><Hero/><Pricing/><About/><Projects/><Testimonials/><Contact/><Footer/><FloatingWhatsapp/>


 </>)
}