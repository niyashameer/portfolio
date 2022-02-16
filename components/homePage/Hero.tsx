import React, { useEffect, useRef } from "react";
import Button from "../../shared/component/Button";
import SvgRenderer from "../../shared/component/svgRenderer";
import Social from "../../shared/component/social";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { motion as mot } from "framer-motion-3d";
import Lottie from "lottie-web";
import LottieAnimation from "../../public/assets/lottie/coder.json";
import Typed from "typed.js";

export default function Hero() {
	const heading1 = "Hey, I'm Niya Shameer";
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec etdiam dignissim, scelerisque quam eu, ultrices tellus";

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	const el = useRef(null);
	const desc = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current!, {
			strings: ["Hey, I'm Niya Shameer"], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 70,
			backSpeed: 70,
			backDelay: 100,
		});
		const typedDesc = new Typed(desc.current!, {
			strings: [
				"^2000",
				"will tell y",
				"love to be given new chal",
				"enjoy the little things in life.",
			], // Strings to display
			startDelay: 300,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 100,
		});

		// Destropying
		return () => {
			typed.destroy();
			typedDesc.destroy();
		};
	}, []);

	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector("#code")!,
			animationData: LottieAnimation,
			renderer: "svg",
		});
	}, [LottieAnimation]);

	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	};
	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};
	const image = {
		inital: {
			rotate: "0deg",
		},
		visible: { rotate: "20deg" },
	};
	const style = {
		x,
		y,
		rotateX,
		rotateY,
		rotate: "20deg",
		zIndex: 10000,
	};
	return (
		<div className='relative h-screen hero-screen'>
			<div className='flex flex-row items-center h-full py-14 justify-between'>
				<div className='h-full flex items-center md:w-3/6'>
					<div className='flex flex-col px-14 md:h-[28rem] xs:h-[24rem] h-[80%] justify-between'>
						<div className='flex flex-col justify-around md:h-80 h-[60%] text-lightText'>
							<motion.h1
								className='font-[SF_Pro_Display_Regular] font-bold text-5xl'
								variants={sentence}
								initial='hidden'
								animate='visible'>
								{heading1.split("").map((char, index) => {
									return (
										<motion.span
											key={char + "-" + index}
											// variants={letter}
											ref={el}>
											{/* {char} */}
										</motion.span>
									);
								})}
							</motion.h1>
							<motion.p
								className='text-lighText text-lg'
								variants={sentence}
								initial='hidden'
								animate='visible'>
								I&nbsp;
								<motion.span
									// key={char + "-" + index}
									// variants={letter}
									ref={desc}></motion.span>
							</motion.p>
							<div className='w-full'>
								<Button text='Resume'></Button>
							</div>
						</div>
						<div className='w-full lg:relative md:absolute xs:relative lg:bottom-0 md:bottom-32'>
							<Social />
						</div>
					</div>
				</div>
				<div
					className='hidden md:block lg:w-[60rem] lg:h-[34rem] lg:-mr-[15rem] md:-mr-[10rem]'
					id='code'>
					{/* <SvgRenderer
						filePath='/assets/vectors/hero.png'
						widthClassProperties='w-full'
					/> */}
				</div>
			</div>
		</div>
	);
}
