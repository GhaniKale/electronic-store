import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import {useEffect,useState} from 'react'

export default function App(){
 const [load,setLoad]=useState(true)
 useEffect(()=>{setTimeout(()=>setLoad(false),2000)},[])
 if(load) return <Preloader/>
 return(<>
  <Navbar/><Hero/><About/><Projects/><Contact/><Footer/>
 </>)
}