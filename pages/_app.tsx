import { useEffect, useState } from "react";
import { Footer } from "../shared/component/Footer";
import Navbar from "../shared/component/Navbar";
import "../styles/globals.css";
import { KimochiiPointer } from "kimochii-pointer";

function MyApp({ Component, pageProps }: any) {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		const pointer = new KimochiiPointer();
		pointer.mount();
		changeBackground();
		window.addEventListener("scroll", changeBackground);
	});

	const changeBackground = () => {
		if (window.scrollY >= 66) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	return (
		<>
			<Navbar state={navbar} />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
