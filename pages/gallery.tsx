import React from "react";
import Head from "next/head";
import Gallery from "../components/gallery/Gallery";

const Work = () => {
	return (
		<div className='text-lightText font-[SF_Pro_Display_Regular] w-full overflow-hidden bg-darkerBlue'>
			<Head>
				<title>Gallery | Niya Shameer</title>
				<meta name='description' content='Personal Portfolio of Niya Shameer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Gallery />
		</div>
	);
};

export default Work;