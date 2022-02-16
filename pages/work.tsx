import React from "react";
import Music from "../components/work/Music";
import Clubs from "../components/work/Clubs";
import Projects from "../components/work/Projects";
import WorkExp from "../components/work/Work";
import Head from "next/head";

const Work = () => {
	return (
		<div className='text-lightText font-[SF_Pro_Display_Regular] w-full overflow-hidden bg-darkerBlue'>
			<Head>
				<title>Work | Niya Shameer</title>
				<meta name='description' content='Personal Portfolio of Niya Shameer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<WorkExp />
			<Projects />
			<Music />
			<Clubs />
		</div>
	);
};

export default Work;
