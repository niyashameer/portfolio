import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Skills from "../components/homePage/Skills";
import Achievements from "../components/homePage/Achievements";

export default function Home() {

	return (
		<div
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
