import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Social from "../shared/component/social";
import Hero from "../components/homePage/Hero";
import { About } from "../components/homePage/About";
import { Navbar } from "../shared/component/Navbar";
import { Music } from "../components/homePage/Music";

export default function Home() {
	return (
		<div
			className={`text-lightBlack font-[SF_Pro_Display_Regular] w-full`}>
			<Head>
				<title>Niya Shameer | Portfolio</title>
				<meta name='description' content='Personal Portfolio of Niya Shameer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Hero />
			<About />
			<Music />
		</div>
	);
}
