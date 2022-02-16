import React from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const About = () => {
	return (
		<div className='relative h-screen px-14 py-14 flex items-center'>
			{/* <div className='rounded-full w-48 h-48 bg-darkBlue absolute top-28 -left-24'></div> */}
			<div className='mx-auto text-center flex flex-col items-center h-screen place-content-center'>
				{/* <SvgRenderer filePath='assets/vectors/aboutMe.svg' /> */}
				{/* <div className='text-lightBlack font-bold text-4xl w-5/12 mx-auto'>
					about me
				</div> */}
			
			<div className='relative mt-20 h-72 text-2xl w-1/2 justify-between mx-auto text-center text-lightText'>
				<h1 className=''>Hello, there!</h1>
				<h2>
					Among other things, I{" "}
					<span className='text-lightGreen font-bold'>sing</span>,{" "}
					<span className='text-retro font-bold'>develop websites</span> and{" "}
					<span className='text-lightGreen font-bold'>orate</span>.
				</h2>
				<h2 className="w-full">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et diam
					dignissim, scelerisque quam eu, ultrices tellus. Phasellus in sapien
					vitae ante rutrum auctor vel quis lectus. Donec auctor risus libero,
					et sodales sem maximus a. Phasellus urna lacus, imperdiet sit amet
					augue eget, pharetra dignissim turpis.
				</h2>
				</div>
				</div>
		</div>
	);
};
export default About