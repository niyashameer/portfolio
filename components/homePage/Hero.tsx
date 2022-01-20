import React from "react";
import Button from "../../shared/component/Button";
import SvgRenderer from "../../shared/component/svgRenderer";
import Social from "../../shared/component/social";

export default function Hero() {
	return (
		<div className='relative h-screen'>
			<div className='flex flex-row items-center h-full py-14'>
				<div className='md:w-3/6 flex flex-col px-14 md:h-[28rem] xs:h-[24rem] h-[80%] justify-between'>
					<div className='flex flex-col justify-around md:h-80 h-64 text-lightBlack'>
						<h1 className='font-[SF_Pro_Display_Regular] font-bold text-5xl'>
							Hey, I&apos;m Niya Shameer
						</h1>
						<p className='text-retro text-lg'>
							You’ll find me squeaking at something exciting that I came across
						</p>
						<div className='w-full'>
							<Button text='Resume'></Button>
						</div>
					</div>
					<div className='w-full lg:relative md:absolute xs:relative lg:bottom-0 md:bottom-32'>
						<Social />
					</div>
				</div>
				<div className='hidden md:block w-[47%] absolute z-0 bottom-0 right-2'>
					<SvgRenderer
						filePath='/assets/vectors/hero.png'
						widthClassProperties='w-full'
					/>
				</div>
			</div>
		</div>
	);
}
