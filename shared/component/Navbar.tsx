import React from "react";
import SvgRenderer from "./svgRenderer";

function Navbar(props: { state: boolean }) {
	return (
		<nav className={`${props.state? `bg-darkBlue text-white `: `bg-lightBlack text-white `} z-50 top-0 left-0 flex items-center w-full font-[SF_Pro_Display_Regular] font-lightBlack h-[4.5rem] px-14 justify-center space-x-8 transition-all delay-150`}>
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
}

export default Navbar;
