import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Social from "../shared/component/social";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Navbar from "../shared/component/Navbar";
import Music from "../components/homePage/Music";
import { useEffect, useState } from "react";
import Skills from "../components/homePage/Skills";
import Achievements from "../components/homePage/Achievements";

export default function Home() {

	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		changeBackground()
		window.addEventListener("scroll", changeBackground)
	})
	
	const changeBackground = () => {
		if (window.scrollY >= 66) {
		  setNavbar(true)
		} else {
		  setNavbar(false)
		}
	  }
	return (
		<div
			className={`text-lightBlack font-[SF_Pro_Display_Regular] w-full`}>
			<Head>
				<title>Niya Shameer | Portfolio</title>
				<meta name='description' content='Personal Portfolio of Niya Shameer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar state={navbar}/>
			<Hero />
			<About />
			{/* <Music /> */}
			<Skills />
			<Achievements />
		</div>
	);
}
