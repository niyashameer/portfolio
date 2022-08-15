import { motion } from "framer-motion";
import React from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const About = () => {
	return (
		<div
			className='relative h-screen px-14 flex items-center'>
			<div className='mx-auto text-center flex flex-col items-center h-screen place-content-center'>
				<div className='flex items-center'>
					<motion.div
						transition={{ type: "inertia", velocity: 50 }}
						className='relative text-xl md:text-2xl w-[90%] md:w-[70%] xl:w-1/2  mx-auto text-center text-lightText'>
						<h1 className='italic'>Hello, there!</h1>
						<br />
						<h2 className='w-full'>
							Welcome to a little something I developed myself using{" "}
							<span className='font-bold text-lightGreen'>
								Next and Typescript,
							</span>{" "}
							among other things. This portfolio website will take you through a
							small part of{" "}
							<span className='font-bold text-lightGreen'>who I am</span>, and{" "}
							<span className='font-bold text-lightGreen'>
								what inspires me
							</span>
							. I&apos;ve always been on the lookout for experiences that can
							help me grow into a{" "}
							<span className='font-bold text-lightGreen'>
								kinder, smarter and inspiring
							</span>{" "}
							woman. Do let me know if you have inputs to make my website better, I
							would love to hear from you!
						</h2>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default About;
