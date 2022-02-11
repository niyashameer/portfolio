import React from "react";
import Button from "../../shared/component/Button";
import SvgRenderer from "../../shared/component/svgRenderer";
import Social from "../../shared/component/social";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { motion as mot} from "framer-motion-3d";

export default function Hero() {
	const heading1 = "Hey, I'm Niya Shameer";
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec etdiam dignissim, scelerisque quam eu, ultrices tellus";
	
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

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
		rotate: '20deg',
		zIndex: 10000
	}
	return (
		<div className='relative h-screen hero-screen'>
			<div className='flex flex-row items-center h-full py-14'>
				<div className='md:w-3/6 flex flex-col px-14 md:h-[28rem] xs:h-[24rem] h-[80%] justify-between'>
					<div className='flex flex-col justify-around md:h-80 h-64 text-lightBlack'>
						<motion.h1
							className='font-[SF_Pro_Display_Regular] font-bold text-5xl'
							variants={sentence}
							initial='hidden'
							animate='visible'>
							{heading1.split("").map((char, index) => {
								return (
									<motion.span key={char + "-" + index} variants={letter}>
										{char}
									</motion.span>
								);
							})}
						</motion.h1>
						<motion.p
							className='text-retro text-lg'
							variants={sentence}
							initial='hidden'
							animate='visible'>
							{description.split("").map((char, index) => {
								return (
									<motion.span key={char + "-" + index} variants={letter}>
										{char}
									</motion.span>
								);
							})}
						</motion.p>
						<div className='w-full'>
							<Button text='Resume'></Button>
						</div>
					</div>
					<div className='w-full lg:relative md:absolute xs:relative lg:bottom-0 md:bottom-32'>
						<Social />
					</div>
				</div>
				<mot.div
					style={style}
					whileTap={{cursor: "grabbing"}}
					className='hidden md:block w-[47%] absolute z-0 bottom-0 right-2'
					variants={image}
					animate='visible'>
					<SvgRenderer
						filePath='/assets/vectors/hero.png'
						widthClassProperties='w-full'
					/>
				</mot.div>
			</div>
		</div>
	);
}
