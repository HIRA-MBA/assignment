import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from './component/Header/Header'
import Footer from './component/Footer/footer'
import NavBar from "./component/NavBar/NavBar";
import Hero from "./component/HeroSection/HeroSection";


export default function Home() {
  return (<div>
    <Header ></Header>
<NavBar></NavBar>
<Hero></Hero>
<br/>   

<Footer></Footer>
  </div>
    
  );
}
