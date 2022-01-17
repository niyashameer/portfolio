import React from "react";
import SvgRenderer from "./svgRenderer";

export const Navbar = () => {
	return (
		<nav className='flex items-center w-full font-[SF_Pro_Display_Regular] font-lightBlack h-20 px-14 justify-center space-x-8 drop-shadow'>
			<div className='flex items-center space-x-8 place-self-center float-right'>
				<a
					href='/work'
					className='hover:underline underline-offset-4 transition-all delay-20 duration-400 hover:text-orange'>
					Work
				</a>
				<a href='/'>
					<div className='w-54 h-10 flex flex-row place-self-center justify-between space-x-8 hover:text-orange'>
						<SvgRenderer filePath='assets/logo/logo.svg' />
					</div>
				</a>
				<a
					href='/contact'
					className='hover:underline underline-offset-4 transition-all delay-20 duration-400 hover:text-orange'>
					Contact
				</a>
			</div>
		</nav>
	);
};
