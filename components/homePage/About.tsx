import React from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const About = () => {
	return (
		<div className='relative h-screen px-14 py-14 flex'>
			<div className='relative w-5/12'>
				<SvgRenderer filePath='assets/vectors/aboutMe.svg' />
				<div className='absolute top-[35%] left-[26%] text-white font-bold text-4xl w-full'>
					about me
				</div>
			</div>
			<div className='relative mt-[18%] -ml-10 flex flex-col text-2xl w-1/2 justify-between h-1/2'>
				<h1 className=''>Hello, there!</h1>
				<h2>
					Among other things, I{" "}
					<span className='text-darkBlue font-bold'>sing</span>,{" "}
					<span className='text-darkRed font-bold'>develop websites</span> and{" "}
					<span className='text-retro font-bold'>orate</span>.
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
	);
};
export default About