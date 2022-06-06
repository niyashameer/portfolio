import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Skills from "../components/homePage/Skills";
import Achievements from "../components/homePage/Achievements";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		const scrollWrap = document?.querySelector("body");

		const height = () => scrollWrap!.getBoundingClientRect().height;
		const speed = 0.08;

		let offset = 0;

		const smoothScroll = () => {
			offset += (window.pageYOffset - offset) * speed;

			scrollWrap!.style.transform =
				"translateY(-" + offset + "px) translateZ(0)";

			window.requestAnimationFrame(smoothScroll);
		};

		const handleResize = () => {
			document.body.style.height = Math.floor(height()) + "px";
		};
		smoothScroll();
		handleResize();
		window.addEventListener("resize", handleResize);
	});
	return (
		<div
			id='main-container'
			className={`text-lightText font-[SF_Pro_Display_Regular] w-full overflow-hidden bg-darkerBlue`}>
			<Head>
				<title>Niya Shameer | Portfolio</title>
				<meta name='description' content='Personal Portfolio of Niya Shameer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<About />
			<Skills />
			<Achievements />
		</div>
	);
}
