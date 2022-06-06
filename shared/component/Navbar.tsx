import Link from "next/link";
import React, { useEffect, useState } from "react";
import SvgRenderer from "./svgRenderer";

function Navbar(props: { state: boolean }) {
	const [progress, setProgress] = useState<number>(0);

	useEffect(() => {
		const timer = setTimeout(async () => {
			await setProgress(500);
			console.log(progress);
		}, 500);
		return () => {
			clearTimeout(timer);
			setProgress(50);
		};
	}, []);

	return (
		<nav
			// `${
			// props.state
			// 	? `bg-darkBlue text-white h-[4rem] drop-shadow-2xl`
			// 	: `border-x-[${progress}px] border-darkBlue text-black`}
			className={`z-50 top-0 left-0 flex items-center w-full font-[SF_Pro_Display_Regular] font-lightBlack h-[4.5rem] px-14 justify-center space-x-8 transition-all delay-150 mx-auto text-lg  bg-darkerBlue text-lightText hover:drop-shadow-none drop-shadow-3xl`}>
			<div className='flex items-center space-x-8 place-self-center float-right'>
				<Link href='/work'>
					<a className='transition-all delay-20 duration-400 hover:text-lightGreen px-4 py-2 z-[20000000]' data-kimochii-pointer='sticky'>
						Work
					</a>
				</Link>
				<Link href='/'>
					<a className='hover:text-lightGreen px-4 py-2 z-[20000000]' data-kimochii-pointer='sticky'>
						{/* <div className='w-54 h-10 flex flex-row place-self-center justify-between space-x-8 hover:text-lightGreen'>
						{/* <SvgRenderer filePath='assets/logo/logo.svg' /> */}
						{/* </div> */}
						Home
					</a>
				</Link>
				<Link href='/contact'>
					<a className='transition-all delay-20 duration-400 hover:text-lightGreen px-4 py-2 z-[20000000]' data-kimochii-pointer='sticky'>
						Contact
					</a>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
